import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <div className="w-full h-full items-center flex flex-col gap-3 justify-center">
        <h1 className="main-title">Skill Traders</h1>
        <p className="text-lg text-gray-700 mb-5">Trade skills, not money.</p>

        <div className="flex justify-center gap-4">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="sign-up-btn">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;