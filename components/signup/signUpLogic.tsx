import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export const signUpLogic = () => {
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
    setEmailErrorMessage: () => {
      setSignInErrorMessage("the Email is required");
    },
    setPasswordErrorMessage: () => {
      setSignInErrorMessage("the password is required");
    },
    setUserNameErrorMessage: () => {
      setSignInErrorMessage("the user name is required");
    },
    setMatchingPasswordErrorMessage: () => {
      setSignInErrorMessage("password do not match");
    },
  };

  const returnValues = {
    name:{
        name,
        setName
    },
    email:{
        email,
        setEmail
    },
    password:{
        password,
        setPassword
    },
    repPassword:{
        repPassword,
        setRepPassword
    },
    signInErrorMessage,
    handleSubmit

  }
  return {...returnValues}
};
