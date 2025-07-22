import { NavLink } from "react-router";

export default function LoginDone() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl px-8 py-10 max-w-md text-center animate-fade-in">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          You’ve successfully logged in.
        </p>
        <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all">
          <NavLink to="/">🚪 Log Out</NavLink>
        </button>
      </div>
    </div>
  );
}
