import FormInput from "./FormInput";
import PropTypes from "prop-types";

const SignUpForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div className="relative mb-4">
          <FormInput
            name="name"
            value={user.name}
            onChange={(e) => handleChange("name", e.target.value)}
            type="text"
            placeholder="Abdul Mohiz"
            label="Name"
          />
        </div>

        {/* email input */}
        <div className="relative mb-4">
          <FormInput
            name="email"
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
            type="text"
            placeholder="sample@example.com"
            label="Email"
          />
        </div>

        {/* password input */}
        <div className="relative mb-4">
          <FormInput
            name="password"
            value={user.password}
            onChange={(e) => handleChange("password", e.target.value)}
            type="password"
            placeholder="********"
            label="Password"
          />
        </div>

        {/* Submit button */}
        <div className="mb-12 pb-1 pt-1 text-center">
          <button
            className="w-full px-4 py-2 bg-red-600 text-white  hover:shadow-xl rounded-lg focus:outline-none transition duration-300 ease-in-out"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </>
  );
};

// prop types for SignUpForm
SignUpForm.propTypes = {
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export { SignUpForm };
