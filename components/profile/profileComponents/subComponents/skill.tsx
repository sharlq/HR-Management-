import React from "react";
import { Clear } from "@material-ui/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSkills } from "../../../../redux/features/skillsSlice";
const Skill: React.FC<{
  skill: string;
  background: string;
  index: number;
  array: string[];
}> = ({ skill, background, index, array }) => {
  let dispatch = useDispatch();
  const handleDelete = async () => {
    axios.patch("http://localhost:3000/api/deleteSkill", { index });

    dispatch(setSkills({ skills: Math.random() }));
    array.splice(index, 1);
  };

  return (
    <div className="skill" style={{ background: background }}>
      {skill}
      <div className="skill-taile">
        <div className="divider" />
        <Clear className="delete" onClick={() => handleDelete()} />
      </div>
    </div>
  );
};

export default Skill;
