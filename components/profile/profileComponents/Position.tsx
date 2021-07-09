import React from "react";
import TextField from "@material-ui/core/TextField";
const Position: React.FC<{ designation: string; department: string }> = ({
  designation,
  department,
}) => {

  return (
    <div className="position">

      <h3 className="title">Position</h3>

      <TextField
        className="position-text"
        id="outlined-basic"
        label="Designation"
        value={designation}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        className="position-text"
        id="outlined-basic"
        label="Department"
        value={department}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      
    </div>
  );
};

export default Position;
