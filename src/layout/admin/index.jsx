import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    console.log(localStorage.getItem('admin_token'))
    if (path === "/admin" && localStorage.getItem("admin_token")) {
      navigate("/admin/dashboard");
    } else if (path != "/admin" && !localStorage.getItem("admin_token")) {
      navigate("/admin/login");
    }
  }, [location]);
  return (
    <Box display="flex" columnGap="1rem">
      <SideBar />
      <Outlet />
    </Box>
  );
};

export default Admin;
