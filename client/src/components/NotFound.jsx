import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react"; // You can use Lucide's AlertCircle icon

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-white">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 mt-4 hover:underline">
        <span className="text-sm">Return to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
