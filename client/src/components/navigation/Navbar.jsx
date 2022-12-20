import React from "react";
import "./Navbar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { TfiAnnouncement } from "react-icons/tfi";
import { BiMessageAlt } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="nav">
        <div className="nav-menu">
          <Link to="/" className="nav-menu-items">
            <AiOutlineHome className="nav-icon" />
            Home
          </Link>
          <Link to="/" className="nav-menu-items">
            <SlNotebook className="nav-icon" />
            PYQs
          </Link>
          <Link to="/" className="nav-menu-items">
            <TfiAnnouncement className="nav-icon" />
            Announcements
          </Link>
          <Link to="/" className="nav-menu-items">
            <BiMessageAlt className="nav-icon" />
            Messaging
          </Link>
          <Link to="/" className="nav-menu-items">
            <TbSchool className="nav-icon" />
            IIITDMJ
          </Link>
        </div>
        <Link to="/user" className="profile">
          Utkarsh Raj
          <CgProfile className="nav-icon" />
        </Link>
        <Link to="/login" className="nav-menu-items">
          Log Out
          <AiOutlineLogout className="nav-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
