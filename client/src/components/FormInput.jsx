import PropTypes from "prop-types";

const FormInput = ({ name, value, onChange, type, placeholder, label }) => {
  return (
    <>
      <label htmlFor={name} className="text-white text-sm font-semibold">
        {label}:
      </label>
      <input
        type={type}
        className="w-full py-2 px-3 mt-1 shadow-inner rounded-md bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-500"
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;

// prop types for FormInput
FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
