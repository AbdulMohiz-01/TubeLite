const Signup = () => {
  return (
    <section className="gradient-form min-h-screen flex justify-center items-center">
      <div className="container h-full p-10">
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

                    <form>
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
                        />
                      </div>

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="w-full px-4 py-2 bg-red-600 text-white  hover:shadow-xl rounded-lg focus:outline-none transition duration-300 ease-in-out"
                          type="button"
                        >
                          Signup
                        </button>
                      </div>

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
                    </form>
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
