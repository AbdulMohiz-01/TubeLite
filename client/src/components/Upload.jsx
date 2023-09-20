import React from "react";
import { X, Sparkles } from "lucide-react";
import clsx from "clsx";
import { generateDescription } from "../Service/aiApi";
import { useSelector } from "react-redux";

const Upload = ({ closeModal }) => {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    tags: "",
    thumbnail: "",
    video: "",
  });

  const [aiData, setAiData] = React.useState({
    id: "",
    title: "",
    summary: "",
    channelName: "",
    channelDescription: "",
    tags: "",
    callToAction: "",
    additionalAnnouncements: "",
    emotionalTone: "Enthusiastic",
    emojiesUsage: "",
  });

  const { currentUser } = useSelector((state) => state.user);

  const [writeWithAI, setWriteWithAI] = React.useState(false);
  const heightOfModal = clsx(
    "bg-gray-1000 p-8 rounded-lg shadow-md w-3/4 overflow-y-scroll overflow-x-hidden custom-scrollbar z-50",
    {
      "min-h-min": !writeWithAI,
      "h-screen": writeWithAI,
    },
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const hangleAIFormSubmit = async () => {
    const { desc } = await generateDescription({
      ...aiData,
      channelName: currentUser.name,
      id: currentUser._id,
      channelDescription:
        "Hello I love to code, my favourite language is JavaScript",
      title: data.title,
      emojiesUsage: "🚀💻👨‍💻",
    });

    console.log(desc);

    setData({ ...data, description: desc });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000] transition-all duration-300 ">
      <div className={heightOfModal}>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Upload</h2>
          <button
            className="relative -top-8 left-8 rounded-full p-2"
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

            <FormInput
              label="Description"
              id="description"
              type="text"
              name="description"
              placeholder="Enter description"
              onChange={handleChange}
              isDescription={true}
            />

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
                <button
                  className="w-full text-blue-vivid text-sm underline font-thin flex gap-1 items-center"
                  onClick={() => setWriteWithAI(false)}
                >
                  write description yourself
                </button>
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

        {/* AI Form */}
        {writeWithAI ? (
          <form className="space-y-4">
            <FormInput
              label="Summary"
              type="textarea"
              name="summary"
              placeholder="Enter summary"
              value={aiData.summary}
              onChange={(e) =>
                setAiData({ ...aiData, summary: e.target.value })
              }
              isDescription={true}
            />

            <div className="flex gap-4 flex-col w-full">
              <FormInput
                label="Tags"
                type="text"
                name="tags"
                placeholder="Enter tags separated by comma"
                value={aiData.tags}
                onChange={(e) => setAiData({ ...aiData, tags: e.target.value })}
              />

              <FormInput
                label="Additional Announcements"
                type="text"
                name="additionalAnnouncements"
                placeholder="Enter additional announcements"
                value={aiData.additionalAnnouncements}
                onChange={(e) =>
                  setAiData({
                    ...aiData,
                    additionalAnnouncements: e.target.value,
                  })
                }
              />

              <FormInput
                label="Call To Action"
                type="text"
                name="callToAction"
                placeholder="Enter call to action"
                value={aiData.callToAction}
                onChange={(e) =>
                  setAiData({ ...aiData, callToAction: e.target.value })
                }
              />

              <div className="flex gap-4 w-full">
                <div className="relative w-full">
                  <label
                    className="text-sm w-full font-medium text-white flex gap-1 items-center"
                    htmlFor="emotionalTone"
                  >
                    Emotional Tone
                  </label>
                  <select
                    className="block w-full text-sm border border-gray-300 rounded-lg p-2 focus:outline-none"
                    id="emotionalTone"
                    name="emotionalTone"
                    value={aiData.emotionalTone}
                    onChange={(e) =>
                      setAiData({ ...aiData, emotionalTone: e.target.value })
                    }
                  >
                    <option value="enthusiastic">Enthusiastic</option>
                    <option value="informative">Informative</option>
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                  </select>
                </div>

                <div className="relative w-full">
                  <label
                    className="text-sm w-full font-medium text-white flex gap-1 items-center"
                    htmlFor="emojiesUsage"
                  >
                    Emojies Usage
                  </label>
                  <select
                    className="block w-full text-sm border border-gray-300 rounded-lg p-2 focus:outline-none"
                    id="emojiesUsage"
                    name="emojiesUsage"
                    value={aiData.emojiesUsage}
                    onChange={(e) =>
                      setAiData({ ...aiData, emojiesUsage: e.target.value })
                    }
                  >
                    <option value="style1">Style 1</option>
                    <option value="style2">Style 2</option>
                    <option value="style3">Style 3</option>
                    {/* Add more styles as needed */}
                  </select>
                </div>
              </div>

              {/* button */}
              <div className="flex gap-4 w-full justify-end">
                <button
                  className="w-1/6 bg-magenta-lively hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg "
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    hangleAIFormSubmit();
                  }}
                >
                  Generate
                </button>
              </div>
            </div>
          </form>
        ) : null}
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
