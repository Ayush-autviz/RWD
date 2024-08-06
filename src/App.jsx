import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import LoginNP from "./pages/LoginNP";
import SignUpNP from "./pages/SignUpNP";
import VerificationScreen from "./components/VerificationScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryNP from "./pages/CategoryNP";
import CategoryDonor from "./pages/CategoryDonor";
import ProfilePageDonor from "./pages/ProfilePageDonor";
import Search from "./pages/Search";
import DashboardDonar from "./pages/DashboardDonar";
import { useAuth } from "./context/AuthContext";
import ForgetPassword from "./components/ForgetPassword";
import EmailPassword from "./components/EmailPassword";
import ConnectStripe from "./pages/ConnectStripe";
import Explore from "./pages/Explore";

const getRoleFromLocalStorage = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated || null;
};

const App = () => {
  const { role } = useAuth();



  // useEffect(() => {
  //   if (role) {
  //     navigate("/");
  //   }
  // }, [role, navigate]);

  console.log(role);

  return (
    <div className="bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={
                role === "donar" ? <DashboardDonar /> : <Dashboard />
              }
            />
          }
        />
        <Route
          path="/login"
          element={
            <div className="bg-gray-50">
              <Login />
            </div>
          }
        />
        <Route path="/npo" element={<Dashboard />} />
        <Route path="/donor" element={<DashboardDonar />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={
                role === "donar" ? <ProfilePageDonor /> : <ProfilePage />
              }
            />
          }
        />
        <Route path="/home" element={<Explore/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupNP" element={<SignUpNP />} />
        <Route path="/categoryNP" element={<CategoryNP />} />
        <Route path="/categoryDonor" element={<CategoryDonor />} />
        <Route path="/connectStripe" element={<ConnectStripe />} />
        <Route path="/email" element={<EmailPassword />} />
        <Route
          path="/verification"
          element={<VerificationScreen />}
        />
        <Route
          path="/forgotPassword"
          element={<ForgetPassword/>}
        />
        <Route
          path="/search"
          element={<ProtectedRoute element={<Search />} />}
        />
      </Routes>
    </div>
  );
};

export default App;
