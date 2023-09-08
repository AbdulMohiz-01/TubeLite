import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signin = (props) => {
  // State
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const { closeModal } = props;

  // Handle submit
  const handleSubmit = (e) => {};
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-1000 p-8 rounded-lg shadow-md w-96">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Sign In</h2>
          <button
            className="relative -top-12 left-12 rounded-full p-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={() => closeModal()}
          >
            <X size={24} color="white" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-white mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-white mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-end">
            <button className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white focus:outline-none transition duration-300 ease-in-out">
              Sign In
            </button>
          </div>
        </form>

        {/* Don't have an account */}
        <div className="mt-4">
          <p className="text-white">
            {`Don't have an account?`}{" "}
            <Link
              to={"/signup"}
              className="text-red-600 hover:underline focus:outline-none"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
