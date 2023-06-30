
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./compenents/navbar/Navbar";
import Footer from "./compenents/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Service from "./pages/service/Service";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyServices from "./pages/myServices/MyServices";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import Profile from "./pages/profile/Profile";
import "./app.scss"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/my-services",
          element: <MyServices />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/service/:id",
          element: <Service />,
        },
        {
          path: "/myServices",
          element: <MyServices />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
