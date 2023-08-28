import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Media from "./pages/Media/Media";
import Message from "./pages/Message/Message";
import MainLayout from "./components/Layout/MainLayout";

function App() {
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
