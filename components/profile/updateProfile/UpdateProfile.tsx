import React,{useState} from 'react'
import {TextField,Button} from "@material-ui/core";
import {useSelector} from 'react-redux'
import {selectToken} from '../../../redux/features/tokenSlice'
import axios from 'axios'

type inputState = string

const UpdateProfile = () => {
const [designation,setDesignation]=useState<inputState>("")
const [department,setDepartment]=useState<inputState>("")
const [skills,setSkills]=useState<inputState>("")
const [reportingManager,setReportingManager]=useState<inputState>("")
const [aboutme,setAboutme]=useState<inputState>("")

const token = useSelector(selectToken)
const handleSubmit = (e) =>{
  e.preventDefault();
  let skillsArray
  if(skills===""){
    //@ts-ignore
    skillsArray = skills.split(',')
  }else{
    skillsArray = ""
  }
  axios.post('http://localhost:3000/api/updateProfile',{token:token,
  designation:designation,
  department:department,
  aboutme:aboutme,
  skills:skillsArray,
  reportingManager:reportingManager
})
console.log(token)
}
    return (
        <div className="updateProfile">
                  <h3>Udate Profile</h3>
      {/*signInError && <Alert className="alert" severity="error">{signInErrorMessage}</Alert>*/}
      <form className="signup-form" >
      
        <TextField
          value={designation}
          onChange={(e)=>setDesignation(e.target.value)}
          className="signup-input"
          label="Designation"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
         className="signup-input"
         label="Department"
         variant="outlined"
         InputLabelProps={{
          shrink: true,
        }}
           />
         
        <TextField
          value={skills}
          onChange={(e)=>setSkills(e.target.value)}
          className="signup-input"
          label="Skills"
          placeholder="Skill 1 ,Skill 2 ,Skill 3 ..."
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={reportingManager}
          onChange={(e)=>setReportingManager(e.target.value)}
          className="signup-input"
          label="Reporting manager"
          variant="outlined" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        value={aboutme}
        onChange={(e)=>setAboutme(e.target.value)}
          style={{gridColumn:"1/3"}}
          className="aboutMe-text"
          label="About Me"
          placeholder="tell us about yourself"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline={true}
          rows="7"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button onClick={(e)=>handleSubmit(e)}   className="signup-btn" variant="contained" color="primary">
          SIGN UP
        </Button>
      </form>
        </div>
    )
}

export default UpdateProfile
