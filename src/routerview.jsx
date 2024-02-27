import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Pages Components
import DashboardAnalytics from "./pages/dashboard/db_analytics";
import DashboardCRM from "./pages/dashboard/db_CRM";
import DashboardEcommerce from "./pages/dashboard/db_ecommerce";
import Login from "./pages/account/login";
import Register from "./pages/account/register";
import FortgotPassword from "./pages/account/forgotPassword";

export default function Routerview() {
  const loginData = useSelector((state) => {
    return state.loginReducer.ifLogedin;
  });

  function Authorization({ children }) {
    return loginData ? children : <Navigate to="/login"></Navigate>;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/forgot-password" element={<FortgotPassword />}></Route>
      <Route path="/dashboards">
        <Route
          path="analytics"
          element={
            <Authorization>
              <DashboardAnalytics />
            </Authorization>
          }
        ></Route>
        <Route
          path="crm"
          element={
            <Authorization>
              <DashboardCRM />
            </Authorization>
          }
        ></Route>
        <Route
          path="ecommerce"
          element={
            <Authorization>
              <DashboardEcommerce />
            </Authorization>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
