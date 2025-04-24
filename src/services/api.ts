import { toast } from "@/hooks/use-toast";
import axios from "axios"; // Pastikan axios sudah diimpor

// Constants
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// Types
export interface User {
  id: string;
  username: string;
  email: string;
  wallet_address?: string;
  created_at: string;
  credits: number;
  role: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

// Helper functions
const handleApiError = (error: unknown) => {
  console.error("API Error:", error);
  
  let errorMessage = "An unexpected error occurred";
  
  if (error instanceof Response) {
    errorMessage = `Server error: ${error.status}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }
  
  toast({
    title: "Error",
    description: errorMessage,
    variant: "destructive",
  });
  
  return { success: false, message: errorMessage, data: null, timestamp: new Date().toISOString() };
};

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
};

// API functions
export const api = {
  // Auth
  async login(username: string, password: string): Promise<ApiResponse<AuthResponse>> {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Save token and user info
      if (data.success && data.data.access_token) {
        localStorage.setItem("token", data.data.access_token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("isLoggedIn", "true");
      }
      
      return data;
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async signup(userData: { username: string; email: string; password: string; wallet_address?: string }): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error(`Signup failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Save token and user info
      if (data.success && data.data.access_token) {
        localStorage.setItem("token", data.data.access_token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("isLoggedIn", "true");
      }
      
      return data;
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
    
    // Redirect to login page
    window.location.href = "/login";
  },
  
  // Project Analysis
  async analyzeProject(project_name: { name: string; website?: string; twitter_handle?: string; description?: string }): Promise<ApiResponse<{ project_id: string }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/analyze`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(project_name),
      });
      
      if (!response.ok) {
        throw new Error(`Analysis request failed: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getProjectAnalysis(projectId: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${BASE_URL}/api/analyze/${projectId}`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get analysis: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getFetcherData(projectId: string, fetcherType: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${BASE_URL}/api/analyze/fetcher/${projectId}/${fetcherType}`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get fetcher data: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getUserProjects(limit: number = 10, offset: number = 0): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${BASE_URL}/api/analyze/projects?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get projects: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  // Feedback
  async submitFeedback(feedbackData: { type: string; message: string; email?: string }): Promise<ApiResponse<{ feedback_id: string }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/feedback/submit`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(feedbackData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to submit feedback: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  // Chat
  async sendChatMessage(message: string, threadId?: string): Promise<ApiResponse<{ thread_id: string; response: any }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/chat/send`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ content: message, thread_id: threadId }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getChatThreads(): Promise<ApiResponse<{ threads: any[] }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/chat/threads`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get chat threads: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getChatThread(threadId: string): Promise<ApiResponse<{ thread: any }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/chat/thread/${threadId}`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get chat thread: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  // Credit System
  async getCreditStatus(): Promise<ApiResponse<{ balance: number; lifetime_earned: number; lifetime_spent: number; recent_logs: any[] }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/credit/status`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get credit status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async useCredit(amount: number, action: string, relatedEntity?: string): Promise<ApiResponse<{ remaining_credits: number; action: string; amount_used: number }>> {
    try {
      let url = `${BASE_URL}/api/credit/use?amount=${amount}&action=${action}`;
      
      if (relatedEntity) {
        url += `&related_entity=${relatedEntity}`;
      }
      
      const response = await fetch(url, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to use credits: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async requestCreditTopup(amount: number, paymentMethod: "crypto" | "fiat", walletAddress?: string): Promise<ApiResponse<{ topup_id: string; instructions: any; status: string }>> {
    try {
      let url = `${BASE_URL}/api/credit/topup-request?amount=${amount}&payment_method=${paymentMethod}`;
      
      if (walletAddress) {
        url += `&wallet_address=${walletAddress}`;
      }
      
      const response = await fetch(url, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to request top-up: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async verifyPayment(topupId: string, transactionHash?: string): Promise<ApiResponse<{ topup_id: string; status: string; credits_added?: number; new_balance?: number }>> {
    try {
      let url = `${BASE_URL}/api/credit/verify-payment?topup_id=${topupId}`;
      
      if (transactionHash) {
        url += `&transaction_hash=${transactionHash}`;
      }
      
      const response = await fetch(url, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to verify payment: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  // Farming
  async analyzeFarmingTasks(data: { project_name: string; chain: string; wallet_address?: string }): Promise<ApiResponse<{ project_id: string; name: string; chain: string; tasks: any[] }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/farming/analyze`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to analyze farming tasks: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async startFarming(projectId: string, walletAddress: string, tasks: string[] = []): Promise<ApiResponse<{ farming_id: string; status: string; tasks: any[] }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/farming/start`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          project_id: projectId,
          wallet_address: walletAddress,
          tasks
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to start farming: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getFarmingLogs(projectId: string): Promise<ApiResponse<{ project_id: string; project_name: string; status: string; logs: any[] }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/farming/logs/${projectId}`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get farming logs: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getMyFarmingProjects(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/farming/my`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get farming projects: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getSupportedChains(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/farming/chains`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get supported chains: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async saveFarmingProject(projectId: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${BASE_URL}/api/farming/save?project_id=${projectId}`, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to save farming project: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  // Twitter
  async createTwitterPost(projectId: string, topic: string, tone: string = "informative"): Promise<ApiResponse<{ post_id: string; content: string; status: string }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/twitter/post?project_id=${projectId}&topic=${topic}&tone=${tone}`, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create Twitter post: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async createTwitterThread(projectId: string, topics: string[]): Promise<ApiResponse<{ thread_id: string; post_count: number; topics: string[]; status: string }>> {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("project_id", projectId);
      
      topics.forEach(topic => {
        queryParams.append("topics", topic);
      });
      
      const response = await fetch(`${BASE_URL}/api/twitter/thread?${queryParams.toString()}`, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create Twitter thread: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getUserTwitterPosts(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/twitter/posts`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get Twitter posts: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async getUserTwitterThreads(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${BASE_URL}/api/twitter/threads`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get Twitter threads: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async connectTwitterAccount(twitterHandle: string): Promise<ApiResponse<{ twitter_handle: string; is_connected: boolean }>> {
    try {
      const response = await fetch(`${BASE_URL}/api/twitter/connect?twitter_handle=${twitterHandle}`, {
        method: "POST",
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to connect Twitter account: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
};

export const analyzeFetcher = async (data: { project_id: string; fetcher_type: string }): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post(`${BASE_URL}/api/analyze/fetcher`, data, {
      headers: getAuthHeaders(),
    });

    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const analyzeProject = async (data: {
  project_name: string;
  website: string;
}) => {
  return axios.post(`${BASE_URL}/api/analyze`, data, {
    headers: getAuthHeaders()
  });
};

export const joinWaitlist = async (data: {
  email: string;
  username: string;
  ref?: string;
}) => {
  const res = await axios.post(`${BASE_URL}/api/waitlist`, data);
  return res.data;
};

export const getReferralInfo = async (code: string) => {
  const res = await axios.get(`${BASE_URL}/api/waitlist/${code}`);
  return res.data;
};



export default api;
