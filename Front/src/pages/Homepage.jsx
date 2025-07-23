import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <div className="w-full h-full items-center flex flex-col gap-3 justify-center">
        <h1 className="main-title">Skill Traders</h1>
        <p className="text-lg text-gray-600 mb-5">Trade skills, not money.</p>

        <div className="flex justify-center gap-4">
          <Link to="/login" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-4 py-2 rounded-lg shadow">Login</Link>
          <Link to="/signup" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-4 py-2 rounded-lg shadow">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;