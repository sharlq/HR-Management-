import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/Link";
const Login = () => {
  return (
    <form className="login">
      {/*  */}
      <h3>Log In</h3>
      <TextField className="login-input" label="Username" variant="outlined" />
      <TextField
        className="login-input"
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button className="login-btn" variant="contained" color="primary">
        LOG IN
      </Button>
      <p>
        Dont have account ? <Link href="/signup">Sign Up</Link>{" "}
      </p>
    </form>
  );
};

export default Login;
