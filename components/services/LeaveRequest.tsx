import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";

type groupBtn = "default" | "primary";

const LeaveRequest = () => {

  const [yesColor, setYesColor] = useState<groupBtn>("default");
  const [noColor, setNoColor] = useState<groupBtn>("primary");

  const [name, setName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [manager, setManager] = useState<boolean>(false);

  const handleYes = () => {
    setYesColor("primary");
    setNoColor("default");
    setManager(true);
  };

  const handleNo = () => {
    setYesColor("default");
    setNoColor("primary");
    setManager(false);
  };

  const handleSubmit = async () => {
    await axios.post("/api/services/leaveRequest", {
      name: name,
      department: department,
      numberOfDays: days,
      leaveType: type,
      reason: reason,
      informedManager: manager,
    });
  };

  return (
    <div className="leaveRequestForm">

      <h3 className="leaveRequestForm-title">Leave Request</h3>

      <form className="leaveRequestForm-form">

        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Employee Name"
          variant="outlined"
        />
        <TextField
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          label="Department"
          variant="outlined"
        />
        <TextField
          value={days}
          onChange={(e) => setDays(e.target.value)}
          label="Number Of Days"
          variant="outlined"
        />
        <TextField
          value={type}
          onChange={(e) => setType(e.target.value)}
          label="Leave Type"
          variant="outlined"
        />

        <div>
          <h4>Have you informed your manager?</h4>

          <ButtonGroup
            className="btnGroup"
            color="default"
            aria-label="outlined primary button group"
          >
            <Button
              color={yesColor}
              variant="contained"
              onClick={() => handleYes()}
            >
              YES
            </Button>
            <Button
              color={noColor}
              variant="contained"
              onClick={() => handleNo()}
            >
              NO
            </Button>
          </ButtonGroup>

        </div>

        <TextField
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          label="Reason Of leave"
          variant="outlined"
        />
        <Button
          onClick={() => handleSubmit()}
          className="btn"
          variant="contained"
          color="primary"
        >
          Apply
        </Button>

      </form>
      
    </div>
  );
};

export default LeaveRequest;
