import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/Link";
import axios from "axios";
import {useDispatch} from "react-redux"
import {setToken} from '../../redux/features/tokenSlice'
import {useSelector} from 'react-redux'
import {selectToken} from '../../redux/features/tokenSlice'
const Login = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [userName,setUserName]=useState<string>("")
  const [password,setPassword]=useState<string>("")

  let dispatch = useDispatch()
  let toktok = useSelector(selectToken)
  const handleLogIn = async(e) => {
    e.preventDefault();
   let authToken = await axios.post('http://localhost:3000/api/login',{
      name:usernameRef.current.value,
      password:passwordRef.current.value
    })
    
    dispatch(
      setToken({
        token:authToken.data.authToken
      })
    )
    console.log(authToken,toktok)
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
