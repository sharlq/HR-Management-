import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const NavBar = () => {
  const [isLogedInState, setIsLogInState] = useState(false);

  const router = useRouter();

  const isLogedin = async () => {
    let logedIn = await axios.get("/api/authorization/verify");
    if (logedIn.data.verified === true) {
      setIsLogInState(true);
    } else {
      setIsLogInState(false);
    }
  };

  const logOut = async () => {
    await axios.get("/api/authorization/logOut");
    router.push("/");
  };

  useEffect(() => {
    isLogedin();
  });

  return (
    <nav className="navBar">


      <div className="navBar-topSection">
        <div className="content">

          <h4>Company Name</h4>

          {isLogedInState ? (
            <p style={{ cursor: "pointer" }} onClick={() => logOut()}>
              Log Out
            </p>
          ) : (
            <Link href="/" replace={true}>
              <p style={{ cursor: "pointer" }}>Log In</p>
            </Link>
          )}

        </div>
      </div>


      <div className="navBar-bottomSection">
        <div className="content">
          <h4>HR Manager</h4>
          <ul className="navBar-bottomSection_rightSection">
            <Link href="/home" replace={true}>
              <li>Home</li>
            </Link>
            <Link href="/projects" replace={true}>
              <li>Projects</li>
            </Link>
            <Link href="/services" replace={true}>
              <li>Services</li>
            </Link>
            <Link href="/profile" replace={true}>
              <li>Profile</li>
            </Link>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
