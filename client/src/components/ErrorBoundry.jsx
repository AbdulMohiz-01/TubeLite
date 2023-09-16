import { Component } from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react"; // Import the Lucide icon for error

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-background  text-white">
          <AlertCircle className="w-16 h-16 text-red-500" /> {/* Lucide icon */}
          <h2 className="text-2xl font-semibold mt-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-300 text-sm mt-2">
            There was an error with this listing.
          </p>
          <Link to="/" className="text-blue-500 mt-4 hover:underline">
            <span className="text-sm">Click here</span> to go back to the home
            page.
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
