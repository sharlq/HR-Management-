import React,{useRef,useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Signup = () => {
  const userNameRef= useRef<any>()
  const emailRef = useRef()
  const passwordRef = useRef()
  const repPasswordRef = useRef()
  
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [repPassword,setRepPassword] = useState<string>("");
  const handleSubmit = (e)=>{
    e.preventDefault
    console.log(userNameRef.current.value,e.target.value)
  }


  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <form className="signup-form" >
        <TextField
          ref={userNameRef}
          className="signup-input"
          label="Username"
          variant="outlined"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <TextField
         ref={emailRef}
         className="signup-input"
         label="Email"
         variant="outlined"
         value={email}
          onChange={e=>setEmail(e.target.value)}
           />
         
        <TextField
          ref={passwordRef}
          className="signup-input"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <TextField
          ref={repPasswordRef}
          className="signup-input"
          label="Repeate Password"
          type="password"
          variant="outlined"
          value={repPassword}
          onChange={e=>setRepPassword(e.target.value)}
        />
        <Button onClick={(e)=>handleSubmit(e)}  className="signup-btn" variant="contained" color="primary">
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default Signup;
