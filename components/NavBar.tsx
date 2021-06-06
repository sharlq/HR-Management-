import React from "react";

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
              <li>
                  Home
              </li>
              <li>
                  Projects
              </li>
              <li>
                hiarachy
              </li>
              <li>
                  Profile
              </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
