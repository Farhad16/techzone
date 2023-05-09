import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Sidebar from "./components/Shared/Sidebar/Sidebar";
import CustomerOrder from "./components/CustomerDashboard/CustomerOrder/CustomerOrder";
import CustomerServiceList from "./components/CustomerDashboard/CustomerServiceList/CustomerServiceList";
import CustomerGivesReview from "./components/CustomerDashboard/CustomerGivesReview/CustomerGivesReview";
import AdminControlServices from "./components/AdminDashboard/AdminControlServices/AdminControlServices";
import AddService from "./components/AdminDashboard/AddService/AddService";
import MakeAdmin from "./components/AdminDashboard/MakeAdmin/MakeAdmin";
import AccessPurposeAdmin from "./components/AdminDashboard/AccessPurposeAdmin/AccessPurposeAdmin";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { UserContext } from "./App";
import Home from "./components/Home";

function AppRoutes() {
  const privateRoutes = [
    {
      path: "/dashboard",
      element: <Sidebar />,
    },
    {
      path: "/customer/order",
      element: <CustomerOrder />,
    },
    {
      path: "/customer/services",
      element: <CustomerServiceList />,
    },
    {
      path: "/customer/review",
      element: <CustomerGivesReview />,
    },
    {
      path: "/admin/controlService",
      element: <AdminControlServices />,
    },
    {
      path: "/admin/addService",
      element: <AddService />,
    },
    {
      path: "/admin/makeAdmin",
      element: <MakeAdmin />,
    },
    {
      path: "/accessAdmin",
      element: <AccessPurposeAdmin />,
    },
  ];
  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<PrivateRoute>{route.element}</PrivateRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
