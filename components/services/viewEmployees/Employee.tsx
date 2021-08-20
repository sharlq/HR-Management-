import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const Employee:React.FC<{id?:string,name:string,department:string,designation:string,reportingManager:string}> = ({id,name,department,designation,reportingManager}) => {
  return (
    <div className="employee-card">
      <Avatar
        className="avatar"
        alt="Spong"
        src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F11%2Fspongebob-squarepants-spinoff-squidward-netflix-series-info-1-1.jpg"
      />
      <div className="employee-card_rightSection">
        <div>
          <h4>Name</h4>
          <p>{name}</p>
        </div>
        <div>
          <h4>Department</h4>
          <p>{department}</p>
        </div>
        <div>
          <h4>Designation</h4>
          <p>{designation}</p>
        </div>
        <div>
          <h4>Reporting Manager</h4>
          <p>{reportingManager}</p>
        </div>
        <Button className="btn" variant="contained" color="primary">
          view more
        </Button>
        <Button className="btn" variant="contained" color="primary" disabled={true}>
        Evaluate
        </Button>
      </div>
    </div>
  );
};

export default Employee;
