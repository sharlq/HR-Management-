import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Signup = () => {
  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <form className="signup-form">
        <TextField
          className="signup-input"
          label="Username"
          variant="outlined"
        />
        <TextField className="signup-input" label="Email" variant="outlined" />
        <TextField
          className="signup-input"
          label="Password"
          type="password"
          variant="outlined"
        />
        <TextField
          className="signup-input"
          label="Repeate Password"
          type="password"
          variant="outlined"
        />
        <Button className="signup-btn" variant="contained" color="primary">
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default Signup;
