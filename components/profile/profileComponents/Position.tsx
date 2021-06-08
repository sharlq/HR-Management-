import React from 'react'
import TextField from "@material-ui/core/TextField";
const Position = () => {
    return (
        <div className="position">
        <h3 className="title">Position</h3>
        <TextField
          className="position-text"
          id="outlined-basic"
          label="Designation"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className="position-text"
          id="outlined-basic"
          label="Department"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    )
}

export default Position
