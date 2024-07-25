import { createBrowserRouter } from "react-router-dom";
import Index from "./routes/Index";
import Layout from "./components/common/Layout";
import ErrorElement from "./components/error/ErrorElement";
import ErrorPageNotFound from "./components/error/ErrorPageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "*",
        element: <ErrorPageNotFound />,
      }
    ],
  },
]);
