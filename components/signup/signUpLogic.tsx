import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


export const signUpLogic = () =>  {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repPassword, setRepPassword] = useState<string>("");

  const [signInErrorMessage, setSignInErrorMessage] = useState<string[]|"">("");

  const router = useRouter();

  

  const handleSubmit = async () => {
    if (password === repPassword && email && name && password) {      
       
      if(signUp.isUserInfoVailed()){
        signUp.createNewAccount();
       }

    } else{ 
    if (password !== repPassword) {
      signUp.setMatchingPasswordErrorMessage();
    }  
    if (!email) {
      signUp.setEmailErrorMessage();
    }  
    if (!name) {
      signUp.setUserNameErrorMessage();
    }  
    if (!password) {
      signUp.setPasswordErrorMessage();}
    }
  };

  const signUp = {
    errorMessages:[],


    createNewAccount: async () => {
      signUp.resetErrorMasseges();

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
        signUp.setUsedAccountError();
      } else {
        router.push("../");
      }
    },


    setEmailErrorMessage: () => {
      signUp.errorMessages.push("The Email is required")
      setSignInErrorMessage(signUp.errorMessages);
    },
    setPasswordErrorMessage: () => {
      signUp.errorMessages.push("The Password is required")
      setSignInErrorMessage(signUp.errorMessages);
    },
    setUserNameErrorMessage: () => {
      signUp.errorMessages.push("The User Name is required")
      setSignInErrorMessage(signUp.errorMessages);
    },
    setMatchingPasswordErrorMessage: () => {
      signUp.errorMessages.push("Password do not match")
      setSignInErrorMessage(signUp.errorMessages);
    },
    setUsedAccountError:()=>{
      signUp.errorMessages.push("The User Name or the Email already used")
      setSignInErrorMessage(signUp.errorMessages);
    },

    resetErrorMasseges:()=>{
      signUp.errorMessages=[]
      setSignInErrorMessage("");
    },

    isUserInfoVailed:()=>{
      signUp.resetErrorMasseges();
       let validate = new validateEnteredData();
        if(!validate.isUserNameValid()){
          signUp.errorMessages.push('User Name should be at least 4 charachters')
        }
        if(!validate.isEmailValid()){
          signUp.errorMessages.push('Email should be in this form: example@email.com')
        }
        if(!validate.isPasswordValid()){
          signUp.errorMessages.push(...['Password should contain one capital letter','Password should contain one small letter','Password should contain one digit','Password minimum length is 6'])
        }
        console.log(signUp.errorMessages)
        if(signUp.errorMessages.length===0){
          return true;
        }else{
          setSignInErrorMessage(signUp.errorMessages);
          return false
        }
    }
  };


  function validateEnteredData(){
   
    const EMAIL_REGEX:RegExp = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/
    const NAME_REGEX:RegExp =/^(?=.{4,20}$)[a-zA-Z0-9._]/
    const PASSWORD_REGEX:RegExp =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/
    
    this.isEmailValid = function():boolean{ 
      return EMAIL_REGEX.test(email);
    }
    this.isUserNameValid = function():boolean{
      return NAME_REGEX.test(name);
    }
    this.isPasswordValid = function():boolean{
     return PASSWORD_REGEX.test(password);
    }

  }

  
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
