import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { LandingLayout } from "@/layouts/LandingLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

// Landing Pages
import LandingPage from "./pages/index"; // Fixed casing
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import TopUp from "./pages/TopUp";
import Referral from "./pages/Referral";
import ExplorePage from "./pages/Explore";

// Dashboard Pages
import DashboardPage from "./pages/dashboard/index";
import AnalyzePage from "./pages/dashboard/analyze";
import FarmingPage from "./pages/dashboard/farming";
import TwitterPage from "./pages/dashboard/twitter";
import SavedProjectsPage from "./pages/dashboard/save";
import ProfilePage from "./pages/dashboard/profile";
import SettingsPage from "./pages/dashboard/settings";

// Route Guard Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Dashboard Route Wrapper
const DashboardRoute = ({ element }: { element: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <DashboardLayout>{element}</DashboardLayout>
    </ProtectedRoute>
  );
};

const App = () => {
  // Create a client with defaults
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/topup" element={<TopUp />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/explore" element={<ExplorePage />} />

            {/* Dashboard Pages */}
            <Route
              path="/dashboard"
              element={<DashboardRoute element={<DashboardPage />} />}
            />
            <Route
              path="/dashboard/analyze"
              element={<DashboardRoute element={<AnalyzePage />} />}
            />
            <Route
              path="/dashboard/farming"
              element={<DashboardRoute element={<FarmingPage />} />}
            />
            <Route
            
              path="/dashboard/twitter"
              element={<DashboardRoute element={<TwitterPage />} />}
            />
            <Route
              path="/dashboard/save"
              element={<DashboardRoute element={<SavedProjectsPage />} />}
            />
            <Route
              path="/dashboard/profile"
              element={<DashboardRoute element={<ProfilePage />} />}
            />
            <Route
              path="/dashboard/settings"
              element={<DashboardRoute element={<SettingsPage />} />}
            />

            {/* Not Found */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
