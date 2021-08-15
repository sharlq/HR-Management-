import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import { signUpLogic } from "./signUpLogic";

const Signup = () => {
  
  const {
    name,
    email,
    password,
    repPassword,
    signInErrorMessage,
    handleSubmit,
  } = signUpLogic()

  const testid = {
    username:{
    "data-testid":"username"
    },
    email:{
      "data-testid":"email"
    },
    password:{
      "data-testid":"password"
    },
    repPassword:{
      "data-testid":"repPassword"
    }

  }

  return (
    <div className="signup">
      <h3>Sign Up</h3>

      {signInErrorMessage && (
        <Alert className="alert" severity="error" >
          <div data-testid="alert">
          {signInErrorMessage.map((i)=><p key={i}>{i}</p>)}
          </div>
        </Alert>
      )}

      <form className="signup-form">
        <TextField
          inputProps={testid.username}
          className="signup-input"
          label="Username"
          variant="outlined"
          value={name.name}
          onChange={(e) => name.setName(e.target.value)}
        />
        <TextField
          inputProps={testid.email}
          className="signup-input"
          label="Email"
          variant="outlined"
          value={email.email}
          onChange={(e) => email.setEmail(e.target.value)}
        />
        <TextField
        inputProps={testid.password}
          className="signup-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password.password}
          onChange={(e) => password.setPassword(e.target.value)}
        />
        <TextField
        inputProps={testid.repPassword}
          className="signup-input"
          label="Repeate Password"
          type="password"
          variant="outlined"
          value={repPassword.repPassword}
          onChange={(e) => repPassword.setRepPassword(e.target.value)}
        />

        <Button
          onClick={() => handleSubmit()}
          className="signup-btn"
          variant="contained"
          color="primary"
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default Signup;
