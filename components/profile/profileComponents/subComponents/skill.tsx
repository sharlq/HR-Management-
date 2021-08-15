import React from "react";
import { Clear } from "@material-ui/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSkills } from "../../../../redux/features/skillsSlice";

const Skill: React.FC<{
  skill: string;
  background: string;
  identifire:string
  theSkillsObject: {};
}> = ({ skill, background, identifire, theSkillsObject }) => {

  let dispatch = useDispatch();

  const handleDelete = async () => {
   await axios.patch("/api/profile/deleteSkill", { identifire });
   await dispatch(setSkills({ skills: Math.random() })); 
  };

  return (
    <div className="skill" style={{ background: background }}>
     <p className="skill-name">{skill}</p>
      <div className="skill-taile">
        <div className="divider" />
        <Clear className="delete" onClick={() => handleDelete()} />
      </div>
    </div>
  );
};

export default Skill;
