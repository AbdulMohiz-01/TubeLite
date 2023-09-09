import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../Service/authApi";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const registerMutation = useMutation(register, {
    onSuccess: (data) => {
      console.log("This is data");
      console.log(data);
      // Handle successful registration here, e.g., redirect to a success page or show a success message.
      console.log("Registration successful:", data);
      // Optionally, you can navigate to a different page after successful registration.
      navigate(-1); // Redirect to the login page after registration.
    },
    onError: (error) => {
      // Handle registration error here, e.g., display an error message to the user.
      console.error("Registration error:", error);
    },
  });

  const handleChange = async (e) => {
    e.preventDefault();
    await registerMutation.mutate(user);
  };

  return (
    <section className="gradient-form min-h-screen flex justify-center items-center">
      <div className="container min-h-min p-10">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="text-white" />
        </button>
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Right column container with background and description */}
                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-red-600 to-natural-700 ">
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h1 className="mb-6 text-4xl lg:text-6xl font-semibold min-h-min">
                      Join our video community
                    </h1>
                    <p className="text-sm lg:text-base">
                      Join our vibrant video community {`-`} Share, Discover,
                      Connect.
                    </p>
                  </div>
                </div>

                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center flex flex-col justify-center items-center">
                      <h1 className=" w-min font-roboto bg-white text-red-600 text-5xl font-bold ml-4">
                        <span className="text-white bg-red-600 p-1">Tube</span>
                        Lite
                      </h1>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold"></h4>
                    </div>

                    <form onSubmit={handleChange}>
                      <p className="mb-4">Register Yourself</p>
                      {/* Username input */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="name"
                          className="text-white text-sm font-semibold"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          className="w-full py-2 px-3 mt-1 shadow-inner rounded-md bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-500"
                          placeholder="Abdul Mohiz"
                          id="name"
                          value={user.name}
                          onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          }
                        />
                      </div>

                      {/* email input */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="email"
                          className="text-white text-sm font-semibold"
                        >
                          Email:
                        </label>
                        <input
                          type="text"
                          className="w-full py-2 px-3 mt-1 shadow-inner rounded-md bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-500"
                          placeholder="abdulmohiz@gmail.com"
                          id="email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                        />
                      </div>

                      {/* password input */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="password"
                          className="text-white text-sm font-semibold"
                        >
                          Password:
                        </label>
                        <input
                          type="password"
                          className="w-full py-2 px-3 mt-1 shadow-inner rounded-md bg-[#4c4c4c] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-500"
                          id="password"
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
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
                    {/* Register button */}
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">{`Already have an account?`}</p>
                      <button
                        type="button"
                        className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white focus:outline-none transition duration-300 ease-in-out"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
