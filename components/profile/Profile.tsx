import React, { useState, useEffect } from "react";
import Avatar from "./profileComponents/Avatar";
import Position from "./profileComponents/Position";
import AboutMe from "./profileComponents/AboutMe";
import Bottom from "./profileComponents/Bottom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSkills } from "../../redux/features/skillsSlice";
import { useRouter } from "next/router";

type profile = {
  name: string;
  email: string;
  profileImg?: string;
  designation?: string;
  department?: string;
  aboutme?: string;
  skills?: string[];
  reportingManager?: string;
  getOut?: boolean;
};

const Profile = () => {
  
  const [userProfile, setUserProfile] = useState<profile>();

  const reRenderSkills = useSelector(selectSkills);

  const router = useRouter();

  let fetchProfile = async () => {
    let res = await axios.get("/api/profile/profile");
    setUserProfile(()=>res.data);
    console.log(userProfile)
    if (res.data.getOut) {
      router.push("/");
    }
  };

  useEffect(() => {
    fetchProfile();
    console.log("it should remove skills")
  }, [reRenderSkills]);

  return (
    <div className="profile">

      {userProfile && (

        <>
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

        </>

      )}

    </div>
  );
};

export default Profile;
