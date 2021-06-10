import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/Link";
import axios from "axios";
const Login = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [userName,setUserName]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const handleLogIn = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/login',{
      name:usernameRef.current.value,
      password:passwordRef.current.value
    })
  };

  return (
    <form className="login">
      {/*  */}
      <h3>Log In</h3>
      <TextField
        inputRef={usernameRef}
        className="login-input"
        label="Username"
        variant="outlined"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      <TextField
      inputRef={passwordRef}
        className="login-input"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
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
