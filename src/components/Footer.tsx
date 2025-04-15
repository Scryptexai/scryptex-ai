
import { Twitter, Send, FileText, BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600 mb-6">
            Built for Web3 farmers & alpha seekers
          </p>
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <Send className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <FileText className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Scryptex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
