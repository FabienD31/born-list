import React from "react";
import "./menu.css";
import logo from "../../assets/logo-born-list.png";
import { Link } from "react-router-dom";


const Menu = () => {
  return (
  <nav className="menu">
    <div className="left-menu">
      <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
    </div>
    <div className="right-menu">
      <ul className="navbar">
        <Link to="/showContributor"><li><i className="fa-solid fa-table-list"></i></li></Link>
        <Link to="/addCard"><li><i className="fa-regular fa-square-plus"></i></li></Link>
        <li><i className="fa-solid fa-user"></i></li>
      </ul>
    </div>
  </nav>
  );
}
export default Menu;