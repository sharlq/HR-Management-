import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import SideBar from "../SideBar";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchDesignation, setSearchDesignation] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
    let res = await axios.get("/api/users/users?required=profile");
    setEmployees(res.data);
    console.log(employees);
  };
  return (
    <>
      <div className="mainEmplyees">
        <SideBar />
        <div>
          <section className="controls">
            <h3>Search By:</h3>
            <div className="controls-searches">
              <TextField
                className="search"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={searchName}
                onChange={(e) => setSearchName(() => e.target.value)}
              />
              <TextField
                className="search"
                id="outlined-basic"
                label="Department"
                variant="outlined"
                value={searchDepartment}
                onChange={(e) => setSearchDepartment(() => e.target.value)}
              />
              <TextField
                className="search"
                id="outlined-basic"
                label="Designation"
                variant="outlined"
                value={searchDesignation}
                onChange={(e) => setSearchDesignation(() => e.target.value)}
              />
            </div>
          </section>
          <div className="employees">
            {employees &&
              employees
                .filter((i) => i.department?.includes(searchDepartment)||!i.department)
                .filter((i) => i.designation?.includes(searchDesignation)||!i.designation)
                .filter((i) => i.name.includes(searchName))
                .map((i) => (
                  <Employee
                    id={i._id}
                    name={i.name}
                    department={i.department}
                    designation={i.designation}
                    reportingManager={i.reportingManager}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
