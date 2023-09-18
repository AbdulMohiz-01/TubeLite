import React from "react";
import { X, Sparkles } from "lucide-react";

const Upload = ({ closeModal }) => {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    tags: "",
    thumbnail: "",
    video: "",
  });

  const [writeWithAI, setWriteWithAI] = React.useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000] transition-all duration-300">
      <div className="bg-gray-1000 p-8 rounded-lg shadow-md w-3/4 min-h-min z-50">
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
        <form className="space-y-4 flex w-full gap-4 justify-between">
          <div className="flex gap-4 flex-col w-full">
            {" "}
            {/* Title */}
            <FormInput
              label="Title"
              type="text"
              name="title"
              placeholder="Enter title"
              value={data.title}
              onChange={handleChange}
            />
            {/* Form input for upload video */}
            <FormInput
              label="Upload Video"
              type="file"
              name="video"
              placeholder="Upload Video"
              accept="video/*"
              onChange={handleChange}
            />
            {/* Thumbnail */}
            <FormInput
              label="Thumbnail"
              type="file"
              name="thumbnail"
              placeholder="Upload Thumbnail"
              accept="image/*"
              onChange={handleChange}
            />
            <div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                type="submit"
              >
                Upload
              </button>
            </div>
          </div>

          <div className="flex gap-4 flex-col w-full justify-start">
            {/* description */}
            {writeWithAI ? (
              <>
                {" "}
                <FormInput
                  label="short summary"
                  type="text"
                  name="summary"
                  placeholder="Enter description"
                  onChange={handleChange}
                  isDescription={true}
                />
              </>
            ) : (
              <FormInput
                label="Description"
                type="text"
                name="description"
                placeholder="Enter description"
                onChange={handleChange}
                isDescription={true}
              />
            )}

            {/* Tags */}
            <FormInput
              label="Tags"
              type="text"
              name="tags"
              placeholder="Enter tags separated by comma"
              value={data.tags}
              onChange={handleChange}
            />

            <div className="w-full flex justify-between">
              {writeWithAI ? (
                <>
                  <button class="btn">
                    <svg
                      height="20"
                      width="20"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      data-name="Layer 1"
                      id="Layer_1"
                      class="sparkle"
                    >
                      <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                    </svg>

                    <span class="text">Generate</span>
                  </button>
                </>
              ) : (
                <button
                  className="w-full text-blue-vivid text-sm underline font-thin flex gap-1 items-center"
                  onClick={() => setWriteWithAI(true)}
                >
                  {`Don't want to write description yourself? Use AI to do so!`}
                  <Sparkles size={16} />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  accept,
  isDescription = false,
  required = true,
}) => {
  return (
    <div>
      <label
        className="smb-2 text-sm w-full font-medium text-white flex gap-1 items-center"
        htmlFor={label}
      >
        {label}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      {isDescription ? (
        <textarea
          className="block w-full text-sm border border-gray-300 rounded-lg p-2 focus:outline-none"
          id={label}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={8}
          required={required}
        />
      ) : (
        <input
          className="block w-full text-sm border p-2 border-gray-300 rounded-lg focus:outline-none"
          id={label}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          accept={accept}
          required={required}
        />
      )}
    </div>
  );
};

// Path: client/src/components/Upload.jsx
