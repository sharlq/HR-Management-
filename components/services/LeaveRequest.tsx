import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const LeaveRequest = () => {
  return (
    <div className="leaveRequest">
      <h3 className="leaveRequest-title">Leave Request</h3>
      <form className="leaveRequest-form">
        <TextField label="Employee Name" variant="outlined" />
        <TextField label="Department" variant="outlined" />
        <TextField label="Number Of Days" variant="outlined" />
        <TextField label="Leave Type" variant="outlined" />
        <div>
          <h4>Have you informed your manager?</h4>
          <ButtonGroup
            className='btnGroup'
            color="default"
            aria-label="outlined primary button group"
          >
            <Button color="primary" variant="contained">
              YES
            </Button>
            <Button>NO</Button>
          </ButtonGroup>
        </div>
        <TextField label="Reason Of leave" variant="outlined" />
        <Button className="btn" variant="contained" color="primary">
          Apply
        </Button>
      </form>
    </div>
  );
};

export default LeaveRequest;
