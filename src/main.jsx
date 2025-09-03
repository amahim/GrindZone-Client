import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Components/HomePage/Home.jsx";
import Error from "./Components/Shared/Error.jsx";
// import { path } from "framer-motion/client";
import AllEquipments from "./Components/HomePage/AllEquipments.jsx";
import AuthPage from "./Components/Users/AuthPage.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      
    ],
  },
  {
      path: "/all-equipments",
       element: <AllEquipments /> },
  {
      path: "/Authentication",
       element: <AuthPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
