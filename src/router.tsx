import { createBrowserRouter } from "react-router-dom";
import Index from "./routes/Index";
import Layout from "./components/common/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Index />,
      },
    ],
  },
]);
