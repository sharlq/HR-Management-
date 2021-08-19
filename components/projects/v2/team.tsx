import React, { useState, useEffect } from "react";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import {useDispatch} from 'react-redux';

type NamesArray = [
  {
    _id: string;
    name: string;
  }
];

const Team:React.FC<{project:any}> = ({project}) => {
  const [employees, setEmployees] = useState<NamesArray>();
  const [addEmployee, setAddEmployee] = useState<string>("");
 

  const dispatch = useDispatch();

  useEffect(() => {
    fetcheEmployees();
  }, []);


  const addToTeam = async () => {
    if(addEmployee){
    await axios.put(`/api/projects/team?projectId=${project._id}&name=${addEmployee}`);
    await dispatch({type: "UPDATE_TASKS"})
    setAddEmployee(()=>'')
  }
  };

  const fetcheEmployees = async () => {
    const response = await axios.get("/api/users/users?require=name");
    setEmployees(() => response.data);
  };


  return (
    <div className="projects-team">
      <div className="projects-team_header">
        <h4>Project Team</h4>
        <div className="projects-team_addToTeam">
          <input
            type="text"
            className="addMember"
            placeholder="add membet to the team"
            value={addEmployee}
            onChange={(e) => setAddEmployee(() => e.target.value)}
          />
          <AddIcon onClick={addToTeam} className="addIcon" />
        </div>
        {addEmployee && (
          <ul className="employeesList">
            {employees
              .filter((i) => i.name.includes(addEmployee))
              .slice(0, 3)
              .map((i) => (
                <li className="employeeName" onClick={()=>setAddEmployee(()=>i.name)}>{i.name}</li>
              ))}
          </ul>
        )}
      </div>
      {
        project &&
      <div className="projects-team_members">{project.team.map((i)=><p> {i} ,</p>)}</div>}
    </div>
  );
};

export default Team;
