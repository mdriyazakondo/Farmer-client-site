import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import LoadingSpinner from "../pages/Loading/Loading";
import Register from "../auth/Register";
import Login from "../auth/Login";
import AddCrop from "../pages/AddCrop/AddCrop";
import Forget from "../auth/Forget";
import CropAllProdcuts from "../pages/CropAllProdcuts/CropAllProdcuts";
import CropDetails from "../components/CropDetails";
import PriviteRoute from "./PriviteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <LoadingSpinner />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-products"),
      },
      {
        path: "/all-crop",
        element: <CropAllProdcuts />,
      },
      {
        path: "/crops/:id",
        element: (
          <PriviteRoute>
            <CropDetails />
          </PriviteRoute>
        ),
      },
      {
        path: "/addCrop",
        element: (
          <PriviteRoute>
            <AddCrop />
          </PriviteRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "forget",
        element: <Forget />,
      },
    ],
  },
]);
