import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loginDone");
    const obj = {
      email: email,
      password: password,
    };
    console.log(obj);
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <p className="font-bold text-3xl">Log in to your account</p>

      <div className="w-[420px] shadow-2xl rounded-sm mt-5 border border-gray-200 p-6 text-center">
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full text-left">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 h-10 px-3 rounded-sm"
            />
          </div>

          <div className="w-full text-left">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 h-10 px-3 rounded-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-sm py-2 text-white bg-blue-700 hover:bg-blue-800 transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-sm">
          <p>
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              <NavLink to="/signUp">Sign Up</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
