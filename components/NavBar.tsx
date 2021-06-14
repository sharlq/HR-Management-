import React from "react";
import Link from "next/Link";
const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar-topSection">
        <div className="content">
          <h4>Company Name</h4>
          <p>Log in</p>
        </div>
      </div>
      <div className="navBar-bottomSection">
        <div className="content">
          <h4>HR Manager</h4>
          <ul className="navBar-bottomSection_rightSection">
            <Link href="/home">
              <li>Home</li>
            </Link>
            <Link href="./projects">
              <li>Projects</li>
            </Link>
            <Link href="./services">
            <li>Services</li>
            </Link>
            <Link href="./profile">
              <li>Profile</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
