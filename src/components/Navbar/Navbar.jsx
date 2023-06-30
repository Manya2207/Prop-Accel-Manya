import React, { useState } from "react";
import "./styles.css";

const navItems = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Review",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <div>
      <div style={{ zIndex: "10000" }} className="nav_container">
        <div className="nav_logo">
          <h5 href="/" className="logo">
            Logo
          </h5>
        </div>
        <div className="nav_bar">
          {navItems.map((navItem, index) => {
            return (
              <h5
                href={navItem.link}
                key={index}
                className="nav-link nav-link-ltr"
              >
                {navItem.name}
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
