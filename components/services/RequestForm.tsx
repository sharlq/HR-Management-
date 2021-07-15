import React from "react";
import TextField from "@material-ui/core/TextField";

const RequestForm: React.FC<{
  name: string;
  department: string;
  days: string;
  leaveType: string;
  reasonOfLeave: string;
  informedManager: boolean;
}> = ({
  name,
  department,
  days,
  leaveType,
  reasonOfLeave,
  informedManager,
}) => {

  return (
    <div className="leaveCard">

      <h3 className="leaveCard-title">Leave Request</h3>

      <div className="leaveCard-container">

        <TextField
          className="leaveCard-fild"
          id="outlined-basic"
          value={name}
          label="Name"
          variant="outlined"
        />
        <TextField
          className="leaveCard-fild"
          id="outlined-basic"
          value={department}
          label="department"
          variant="outlined"
        />
        <TextField
          className="leaveCard-fild"
          id="outlined-basic"
          value={days}
          label="Number Of Days"
          variant="outlined"
        />
        <TextField
          className="leaveCard-fild"
          id="outlined-basic"
          value={leaveType}
          label="Leave Type"
          variant="outlined"
        />
        <h3 className="leaveCard-fild">Informed the Manager: {informedManager? `True`:`False`}</h3>
        <TextField
          className="leaveCard-fild"
          id="outlined-basic"
          value={reasonOfLeave}
          label="Reason Of Leave"
          variant="outlined"
        />
      </div>
      
    </div>
  );
};

export default RequestForm;
