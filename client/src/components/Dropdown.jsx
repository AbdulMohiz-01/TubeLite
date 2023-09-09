import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Settings, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import PropTypes from "prop-types";

export default function Dropdown({ img }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <img src={img} alt="avatar" className="w-10 h-10 rounded-full" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-1000 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="bg-gray-1000 text-white group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm hover:bg-red-800">
                  <Settings size={24} color={"white"} />
                  Settings
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <button
                  className="bg-gray-1000 text-white group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm hover:bg-red-800"
                  onClick={() => dispatch(logout())}
                >
                  <LogOut size={24} color={"white   "} />
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

// add prop types
Dropdown.propTypes = {
  img: PropTypes.string.isRequired,
};
