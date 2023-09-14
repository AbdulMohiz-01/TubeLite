import React from "react";
import { X } from "lucide-react";

const Upload = ({ closeModal }) => {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    tags: "",
    thumbnail: "",
    video: "",
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-1000 p-8 rounded-lg shadow-md w-96">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Upload</h2>
          <button
            className="relative -top-12 left-12 rounded-full p-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={() => closeModal()}
          >
            <X size={24} color="white" />
          </button>
        </div>

        {/* Upload Form */}
        <form className="space-y-4">
          {/* Form input for upload video */}
          <FormInput
            label="Upload Video"
            type="file"
            placeholder="Upload Video"
            accept="video/*"
          />

          {/* Title */}
          <FormInput
            label="Title"
            type="text"
            placeholder="Enter title"
            value={title}
          />

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg resize-none h-24 focus:outline-none"
              id="description"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="tags"
            >
              Tags
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
              id="tags"
              type="text"
              placeholder="Enter tags (comma-separated)"
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="thumbnail"
            >
              Thumbnail
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="thumbnail"
              type="file"
              accept="image/*"
            />
          </div>

          <div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;

const FormInput = ({ label, type, placeholder, value, onChange, accept }) => {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        accept={accept}
      />
    </div>
  );
};
