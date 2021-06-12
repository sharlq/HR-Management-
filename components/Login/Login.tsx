import React, { useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/Link";
import axios from "axios";
import {useDispatch} from "react-redux"
import {setToken} from '../../redux/features/tokenSlice'
import {Alert} from '@material-ui/lab';
import { useRouter } from 'next/router'
const Login = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [userName,setUserName]=useState<string>("")
  const [password,setPassword]=useState<string>("")

  const [logInError,setLogInError] = useState<boolean>(false)
  const [logInErrorMessage,setLogInErrorMessage] = useState<string>("")

  const router = useRouter();

  let dispatch = useDispatch()
  
  const handleLogIn = async(e) => {
    e.preventDefault();
   let authToken = await axios.post('http://localhost:3000/api/login',{
      name:usernameRef.current.value,
      password:passwordRef.current.value
    })
  if(authToken.data.authToken){
    dispatch(
      setToken({
        token:authToken.data.authToken
      })
    )
    setLogInError(false)
    setLogInErrorMessage('')
    router.push('home')
  }else{
    setLogInError(true)
    setLogInErrorMessage('eather user name or password is wrong')
  }
    
  };

  return (
    <form className="login">
      
      <h3>Log In</h3>
      {logInError && <Alert className="alert" severity="error">{logInErrorMessage}</Alert>}
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
