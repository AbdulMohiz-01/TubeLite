import { Search, Plus } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import Signin from "./Signin";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import Upload from "./Upload";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [isModel, setIsModel] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const closeSignInModal = () => {
    setIsModel(false);
  };

  const closeUploadModal = () => {
    setIsUploadOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-background z-20 p-2">
      <div className="flex items-center justify-between px-4 h-12">
        <div className="flex items-center">
          <h1 className="font-roboto bg-white text-red-600 text-2xl font-bold ml-4">
            <span className="text-white bg-red-600 p-1">Tube</span>Lite
          </h1>
        </div>
        <div className="bg-gray-1000 rounded-full p-2 flex w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 ml-2 outline-none w-full text-sm"
          />
          <button>
            <Search className="text-white" />
          </button>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <button onClick={() => setIsUploadOpen(true)}>
                <Plus className="text-white mr-4 cursor-pointer" />
              </button>
              <div className="flex items-center flex-col gap-1">
                <Dropdown img={user.img} />
              </div>
            </>
          ) : (
            <button
              className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white focus:outline-none transition duration-300 ease-in-out"
              onClick={() => setIsModel(true)}
            >
              Sign In
            </button>
          )}

          {isModel && (
            <Modal>
              <Signin closeModal={closeSignInModal} />
            </Modal>
          )}
          {isUploadOpen && (
            <Modal>
              <Upload closeModal={closeUploadModal} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
