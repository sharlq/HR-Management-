import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Alert } from "@material-ui/lab";
import { useRouter } from "next/router";
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

  /*
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repPassword, setRepPassword] = useState<string>("");

  const [signInErrorMessage, setSignInErrorMessage] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async () => {
    if (password === repPassword && email && name && password) {
      signUp.createNewAccount();
    } else if (password !== repPassword) {
     signUp.setMatchingPasswordErrorMessage();
    } else if (!email) {
      signUp.setEmailErrorMessage();
    } else if (!name) {
     signUp.setUserNameErrorMessage();
    } else if (!password) {
      signUp.setPasswordErrorMessage();
    }
  };
  

  const signUp = {
    createNewAccount: async () => {
      setSignInErrorMessage("");

      let postAndCheck = await axios.post(
        "http://localhost:3000/api/signUp/users",
        {
          name: name,
          password: password,
          email: email,
        }
      );

      if (
        postAndCheck.data === "this user name is already used" ||
        postAndCheck.data === "this email is already used"
      ) {
        setSignInErrorMessage(postAndCheck.data);
      } else {
        router.push("../");
      }
    },
    setEmailErrorMessage:()=>{
      setSignInErrorMessage("the Email is required");
    },
    setPasswordErrorMessage:()=>{
      setSignInErrorMessage("the password is required");
    },
    setUserNameErrorMessage:()=>{
      setSignInErrorMessage("the user name is required");
    },
    setMatchingPasswordErrorMessage:()=>{
      setSignInErrorMessage("password do not match");
    }
  };*/

  return (
    <div className="signup">
      <h3>Sign Up</h3>

      {signInErrorMessage && (
        <Alert className="alert" severity="error">
          {signInErrorMessage}
        </Alert>
      )}

      <form className="signup-form">
        <TextField
          className="signup-input"
          label="Username"
          variant="outlined"
          value={name.name}
          onChange={(e) => name.setName(e.target.value)}
        />
        <TextField
          className="signup-input"
          label="Email"
          variant="outlined"
          value={email.email}
          onChange={(e) => email.setEmail(e.target.value)}
        />
        <TextField
          className="signup-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password.password}
          onChange={(e) => password.setPassword(e.target.value)}
        />
        <TextField
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
