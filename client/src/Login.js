import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section class="h-full gradient-form bg-gray-200 md:h-screen">
        <div class="container py-12 px-6 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="xl:w-10/12">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="lg:flex lg:flex-wrap g-0">
                            <div class="lg:w-6/12 px-4 md:px-0">
                                <div class="md:p-12 md:mx-6">
                                    <div class="text-center">
                                        <img
                                            class="mx-auto w-48"
                                            src="https://www.creativefabrica.com/wp-content/uploads/2021/01/15/two-theatre-mask-face-logo-isolated-Graphics-7791379-1-1-580x387.jpg"
                                            alt="logo"
                                        />
                                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Welcome</h4>
                                    </div>
                                    
                                    {showLogin ? (
                                        <>
                                        <LoginForm onLogin={onLogin} />
                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2"> Don't have an account? </p>
                                                <button 
                                                    onClick={() => setShowLogin(false)}
                                                    type="button"
                                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                >
                                                Sign Up
                                                </button>
                                        </div>
                                        </>
                                    ) : (
                                        <>
                                        <SignUpForm onLogin={onLogin} />
                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2"> Already have an account? </p>
                                                <button 
                                                    onClick={() => setShowLogin(true)}
                                                    class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                    >
                                                Log In
                                                </button>
                                        </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-black">
                                <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                    <h4 class="text-xl font-semibold mb-6">Our Motto</h4>
                                    <p class="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}


export default Login;