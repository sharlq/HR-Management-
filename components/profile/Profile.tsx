import React, { useState, useEffect } from "react";
import Avatar from "./profileComponents/Avatar";
import Position from "./profileComponents/Position";
import AboutMe from "./profileComponents/AboutMe";
import Bottom from "./profileComponents/Bottom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSkills } from "../../redux/features/skillsSlice";

type profile = {
  name: string;
  email: string;
  profileImg?: string;
  designation?: string;
  department?: string;
  aboutme?: string;
  skills?: string[];
  reportingManager?: string;
};
const Profile = () => {
  const [userProfile, setUserProfile] = useState<profile>();
  const reRenderSkills = useSelector(selectSkills);

  let fetchProfile = async () => {
    let res = await axios.get("http://localhost:3000/api/fetchProfile");
    setUserProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
    console.log(reRenderSkills);
  }, [reRenderSkills]);
  return (
    <div className="profile">
      <Avatar avatar={userProfile.profileImg} name={userProfile.name} />
      <Position
        department={userProfile.department}
        designation={userProfile.designation}
      />
      <AboutMe aboutme={userProfile.aboutme} />
      <Bottom
        skills={userProfile.skills}
        reportingManager={userProfile.reportingManager}
      />
    </div>
  );
};

export default Profile;
