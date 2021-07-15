import React,{useRef,useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import {Alert} from '@material-ui/lab';
import {useRouter} from 'next/router'

const Signup = () => {
  
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [repPassword,setRepPassword] = useState<string>("");

  const [signInError,setSignInError] = useState<boolean>(false)
  const [signInErrorMessage,setSignInErrorMessage] = useState<string>("")
  
  const router = useRouter();

  const handleSubmit = async()=>{
    
    if(password === repPassword && email && name && password ){
      setSignInError(false)
      setSignInErrorMessage("")
    
   let postAndCheck = await  axios.post('http://localhost:3000/api/signUp/users',{
      name:name,
      password:password,
      email:email
      })
      
    if(postAndCheck.data==="this user name is already used" ||postAndCheck.data==="this email is already used"){
      setSignInError(true)
      setSignInErrorMessage(postAndCheck.data)
    }else{
      router.push("../")
    }

  } else if(password !== repPassword){
      setSignInError(true)
      setSignInErrorMessage("password do not match")
    } else if(!email){
      setSignInError(true)
      setSignInErrorMessage("the Email is required")
    }else if(!name){
      setSignInError(true)
      setSignInErrorMessage("the user name is required")
    }else if(!password){
      setSignInError(true)
      setSignInErrorMessage("the password is required")
    }
    
  }


  return (
    <div className="signup">

      <h3>Sign Up</h3>

      {signInError && <Alert className="alert" severity="error">{signInErrorMessage}</Alert>}
      
      <form className="signup-form" >

        <TextField
          className="signup-input"
          label="Username"
          variant="outlined"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <TextField
         className="signup-input"
         label="Email"
         variant="outlined"
         value={email}
          onChange={e=>setEmail(e.target.value)}
           />
        <TextField
          className="signup-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <TextField
          className="signup-input"
          label="Repeate Password"
          type="password"
          variant="outlined"
          value={repPassword}
          onChange={e=>setRepPassword(e.target.value)}
        />

        
        <Button onClick={()=>handleSubmit()}  className="signup-btn" variant="contained" color="primary">
          SIGN UP
        </Button>
       

      </form>
      
    </div>
  );
};

export default Signup;
