import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Media from "./pages/Media/Media";
import Message from "./pages/Message/Message";
import MainLayout from "./components/Layout/MainLayout";
import PostDetails from "./pages/PostDetails/PostDetails";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";

function App() {
  const authCheck = useAuthCheck();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/messages",
          element: <Message />,
        },
        {
          path: "/posts/:id",
          element: (
            <PrivateRoute>
              <PostDetails />
            </PrivateRoute>
          ),
        },
        {
          path: "/log-in",
          element: (
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          ),
        },
        {
          path: "/sign-up",
          element: (
            <PublicRoute>
              {" "}
              <SignUp />
            </PublicRoute>
          ),
        },
      ],
    },
  ]);

  return authCheck && <RouterProvider router={router} />;
}

export default App;
