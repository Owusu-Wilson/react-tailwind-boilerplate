import React, { useEffect } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./AdminHeader.css";

import { switchPage } from "../redux/currentPageSlice";
import { Text } from "@tremor/react";

import Logo from "../assets/logo.png";

const AdminHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.navigation.currentPage);
  console.log("Header Component", currentPage);

  const handlePageChange = (newPage) => {
    if (newPage) {
      dispatch(switchPage(newPage));
      console.log(newPage);
      navigate(`/${newPage}`);
    }
  };

  return (
    <div className="customHeader ">
      <div className="flex flex-row justify-center items-center ">
        <img src={Logo} width={30} height={30} />
        <Text className="text-sm font-semibold ml-2 bg-slate-800 p-2 rounded-md text-white">
          Quality Assurance
        </Text>
      </div>
      <div className="flex">
        <Nav pills>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              active={currentPage === "home"}
              onClick={() => handlePageChange("home")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              active={currentPage === "analytics"}
              onClick={() => handlePageChange("analytics")}
            >
              Analytics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              active={currentPage === "trends"}
              onClick={() => handlePageChange("trends")}
            >
              Trends
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              active={currentPage === "help"}
              onClick={() => handlePageChange("help")}
            >
              Get Help
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              active={currentPage === "demo"}
              onClick={() => handlePageChange("demo")}
            >
              Demo
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              active={currentPage === "profile"}
              onClick={() => handlePageChange("profile")}
            >
              Profile
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default AdminHeader;
