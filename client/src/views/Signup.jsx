import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register, regiterWithGoogle } from "../Service/authApi";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import Loading from "../components/Loading";
import { Logo, GoogleButton, SignUpForm } from "../components/index";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerMutation = useMutation(register, {
    onSuccess: (data) => {
      dispatch(login(data));
      navigate("/"); // Redirect to the login page after registration.
    },
    onError: (error) => {
      // Handle registration error here, e.g., display an error message to the user.
      console.error("Registration error:", error);
    },
  });

  const registerWithGoogleMutation = useMutation(regiterWithGoogle, {
    onSuccess: (data) => {
      dispatch(login(data));
      navigate("/"); // Redirect to the login page after registration.
    },
  });

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        registerWithGoogleMutation.mutate(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
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
                    <Logo />
                    {/* Form */}
                    <SignUpForm
                      user={user}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                    {/* loading area */}
                    {(registerMutation.isLoading ||
                      registerWithGoogleMutation.isLoading) && (
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                        <div className="flex flex-col items-center gap-1">
                          <Loading />
                          <p className="text-white text-x">Loading...</p>
                        </div>
                      </div>
                    )}

                    {/* Divider text */}
                    <div className="flex items-center justify-between mb-6">
                      <hr className="flex-1 h-full bg-white" />
                      <p className="px-4 text-sm text-white font-semibold">
                        Or
                      </p>
                      <hr className="flex-1 h-full w-2 bg-white" />
                    </div>
                    <GoogleButton onClick={signInWithGoogle} />
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
