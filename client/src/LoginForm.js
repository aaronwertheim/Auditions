import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <p class="mb-4">Please login to your account</p>
        <div class="mb-4">
            <input
            type="text"
            id="username"
            placeholder="Username"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div class="mb-4">
            <input
            type="password"
            id="password"
            placeholder="Password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div class="text-center pt-1 mb-12 pb-1">
            <button
            class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-black" 
            type="submit"
            >
            {isLoading ? "Loading..." : "Login"}
            </button>
            <a class="text-gray-500" href="#!">Forgot password?</a>
        </div>
        <div>
            {errors.map((err) => (
            <div key={err}>{err}</div>
            ))}
        </div>
    </form>
  );
}

export default LoginForm;
