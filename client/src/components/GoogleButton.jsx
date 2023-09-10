import PropTypes from "prop-types";

const GoogleButton = ({ onClick }) => {
  return (
    <div className="flex items-center justify-between pb-6">
      <p className="mb-0 mr-2">{`Create account using Google`}</p>
      {/* Google button */}
      <button
        className="p-2 bg-white text-white rounded-full shadow-md focus:outline-none"
        onClick={onClick}
      >
        <img
          src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
          className="w-6 h-6 rounded-full"
        />
      </button>
    </div>
  );
};

// prop types for GoogleButton
GoogleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { GoogleButton };
