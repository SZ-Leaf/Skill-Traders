import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <div className="w-full h-full items-center flex flex-col gap-3 justify-center">
        <h1 className="font-extrabold text-gray-800 ">Skill Traders</h1>
        <p className="text-lg text-gray-600 mb-5">Trade skills, not money.</p>

        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
