import Login from "./features/user/Login";
import LoginDone from "./features/user/LoginDone";
import SignUp from "./features/user/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUpDone from "./features/user/signUpDone";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/loginDone",
      element: <LoginDone />,
    },
    {
      path: "/sugnInDone",
      element: <SignUpDone />,
    },
  ]);
  return <RouterProvider router={router} />;
}
