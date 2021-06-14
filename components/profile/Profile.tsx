import React,{useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from './profileComponents/Avatar'
import Position from './profileComponents/Position'
import AboutMe from './profileComponents/AboutMe'
import Bottom from './profileComponents/Bottom'
import axios from 'axios'
import { useSelector } from "react-redux";
import { selectSkills } from "../../redux/features/skillsSlice";
const Profile = () => {
  const [userProfile,setUserProfile] = useState({});
  const reRenderSkills = useSelector(selectSkills)
  let text = "photographer designer";

  let fetchProfile = async() =>{
   let res = await axios.get('http://localhost:3000/api/fetchProfile')
   setUserProfile(res.data)
  }

  useEffect(()=>{
    fetchProfile()
    
  },[reRenderSkills])
  useEffect(()=>{
    console.log(userProfile)
  })
  return (
    <div className="profile">
      
    <Avatar //@ts-ignore
     avatar={userProfile.profileImg} name={userProfile.name}/>
    <Position //@ts-ignore 
    department={userProfile.department} designation={userProfile.designation}/> 
    <AboutMe //@ts-ignore
    aboutme={userProfile.aboutme} />
    <Bottom //@ts-ignore
    skills={userProfile.skills} reportingManager={userProfile.reportingManager} />   
    </div>
  );
};

export default Profile;
