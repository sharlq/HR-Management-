import React,{useRef,useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import {Alert} from '@material-ui/lab';
import Link from 'next/Link'

const Signup = () => {
  const userNameRef= useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const repPasswordRef = useRef<HTMLInputElement>()
  
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [repPassword,setRepPassword] = useState<string>("");

  const [signInError,setSignInError] = useState<boolean>(false)
  const [signInErrorMessage,setSignInErrorMessage] = useState<string>("")
  
  const handleSubmit = async()=>{
    
    if(passwordRef.current.value === repPasswordRef.current.value && emailRef.current.value && userNameRef.current.value ){
      setSignInError(false)
      setSignInErrorMessage("")
    
   let postAndCheck = await  axios.post('http://localhost:3000/api/signUp/users',{
      name:userNameRef.current.value,
      password:passwordRef.current.value,
      email:emailRef.current.value
      })
      
    if(postAndCheck.data==="this user name is already used" ||postAndCheck.data==="this email is already used"){
      setSignInError(true)
      setSignInErrorMessage(postAndCheck.data)
    }

  } else if(passwordRef.current.value !== repPasswordRef.current.value){
      setSignInError(true)
      setSignInErrorMessage("password do not match")
    } else if(!emailRef.current.value){
      setSignInError(true)
      setSignInErrorMessage("the Email is required")
    }else if(!userNameRef.current.value){
      setSignInError(true)
      setSignInErrorMessage("the user name is required")
    }
    
  }


  return (
    <div className="signup">

      <h3>Sign Up</h3>

      {signInError && <Alert className="alert" severity="error">{signInErrorMessage}</Alert>}
      
      <form className="signup-form" >

        <TextField
          inputRef={userNameRef}
          className="signup-input"
          label="Username"
          variant="outlined"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <TextField
         inputRef={emailRef}
         className="signup-input"
         label="Email"
         variant="outlined"
         value={email}
          onChange={e=>setEmail(e.target.value)}
           />
        <TextField
          inputRef={passwordRef}
          className="signup-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <TextField
          inputRef={repPasswordRef}
          className="signup-input"
          label="Repeate Password"
          type="password"
          variant="outlined"
          value={repPassword}
          onChange={e=>setRepPassword(e.target.value)}
        />

        <Link href="../">
        <Button onClick={()=>handleSubmit()}  className="signup-btn" variant="contained" color="primary">
          SIGN UP
        </Button>
        </Link>

      </form>
      
    </div>
  );
};

export default Signup;
