import React, { useRef, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import { useRouter } from "next/router";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [logInErrorMessage, setLogInErrorMessage] = useState<string>("");

  const router = useRouter();

  const isLogedin = async () => {
    let logedIn = await axios.get(`${process.env.VERCEL_URL}/api/authorization/verify`);
    if (logedIn.data.verified === true) {
      router.push("/home");
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    let authToken = await axios.post(`${process.env.VERCEL_URL}/api/authorization/login`, {
      name: userName,
      password: password,
    });
    if (authToken.data.authToken) {
      setLogInErrorMessage("");
      router.push("home");
    } else {
      setLogInErrorMessage("Eather user name or password is wrong");
    }
  };

  useEffect(() => {
    isLogedin();
  });

  return (
    <form className="login">
      <h3>Log In</h3>
      {logInErrorMessage && (
        <Alert className="alert" severity="error">
          {logInErrorMessage}
        </Alert>
      )}
      <TextField
        className="login-input"
        label="Username"
        variant="outlined"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        className="login-input"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={(e) => handleLogIn(e)}
        className="login-btn"
        variant="contained"
        color="primary"
      >
        LOG IN
      </Button>
      <p>
        Dont have account ? <Link href="/signup">Sign Up</Link>{" "}
      </p>
    </form>
  );
};

export default Login;
