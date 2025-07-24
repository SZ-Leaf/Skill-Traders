import { useState } from "react";
import { useNavigate } from "react-router";

const Signin = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const userLogin = {
      username: username,
      password: password,
    };

    try {
      const userLoginRequest = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });
      const userLoginRequestData = await userLoginRequest.json();
      const token = userLoginRequestData.data;

      if (token) {
        localStorage.setItem("jwt", token);
        setMessage("Login Successful");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setMessage("Invalid Username or Password.");
      }
    } catch (error) {
      setMessage("An error has occured, please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full h-full items-center flex flex-col gap-5 justify-center">
        <h1 className="main-title">Skill Traders</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm w-full">
          <div className="flex flex-col text-center sm:flex-row items-center gap-4">
            <label htmlFor="username" className="text-gray-600 sm:text-right w-24">
              Username:
            </label>
            <input type="text" name="username" id="username" className="w-40 sm:w-auto px-3 py-1 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
          </div>
          <div className="flex flex-col text-center sm:flex-row items-center gap-4">
            <label htmlFor="password" className="text-gray-600 w-24 sm:text-right">
              Password:
            </label>
            <input type="password" name="password" id="password" className="w-40 sm:w-auto px-3 py-1 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
          </div>
          <button
            className="login-btn self-center"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
