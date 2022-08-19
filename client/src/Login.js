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
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqPyn7GGPgHZw_rjM52BSBt4vhgq_pzQaig&usqp=CAU"
                                            alt="logo"
                                        />
                                    </div>
                                    
                                    {showLogin ? (
                                        <>
                                        <LoginForm onLogin={onLogin} />
                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2"> Don't have an account? </p>
                                                <button onClick={() => setShowLogin(false)}
                                                        type="button"
                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                                        Sign Up
                                                </button>
                                        </div>
                                        </>
                                    ) : (
                                        <>
                                        <SignUpForm onLogin={onLogin} />
                                        <div class="flex items-center justify-between pb-6">
                                            <p class="mb-0 mr-2"> Already have an account? </p>
                                                <button onClick={() => setShowLogin(true)}
                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                                        Log In
                                                </button>
                                        </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-black">
                                <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                    <h4 class="text-xl font-semibold mb-6">Welcome to the Casting Database!</h4>
                                    <p class="text-sm italic"> Speak the speech, I pray you, as I pronounced it to you-trippingly on the tongue; but if you mouth it, as many of your players do, I had as lief the town-crier spoke my lines. Nor do not saw the air too much with your hand, thus, but use all gently; for in the very torrent, tempest, and as I may say, the whirlwind of your passion, you must acquire and beget a temperance that may give it smoothness.</p>
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