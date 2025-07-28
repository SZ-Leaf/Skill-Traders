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

        <form onSubmit={handleLogin} className="form-style">
          <div className="label-div-container">
            <label htmlFor="username" className="label-style">
              Username:
            </label>
            <input type="text" name="username" id="username" className="input-style" />
          </div>
          <div className="label-div-container">
            <label htmlFor="password" className="label-style">
              Password:
            </label>
            <input type="password" name="password" id="password" className="input-style" />
          </div>
          <button className="login-btn self-center" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
