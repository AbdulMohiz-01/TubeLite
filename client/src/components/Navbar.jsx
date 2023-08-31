import { Search, Plus, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <img
          src="/path/to/logo.png"
          alt="Logo"
          className="h-8 w-auto mr-4"
        />
        <div className="bg-gray-800 rounded-md p-2">
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 ml-2 outline-none"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Plus className="text-white mr-4 cursor-pointer" />
        <User className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export {
    Navbar
}
