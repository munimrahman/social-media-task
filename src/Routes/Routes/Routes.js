import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Media from "../../pages/Media/Media";
import Message from "../../pages/Message/Message";

const router = createBrowserRouter([
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
    path: "/message",
    element: <Message />,
  },
]);

export { router };
