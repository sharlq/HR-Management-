import React from 'react'
import TextField from "@material-ui/core/TextField";

const AboutMe:React.FC<{aboutme:string}> = ({aboutme}) => {
    return (
        <div className="aboutMe">
        <h3 className="title">About Me</h3>
        <TextField
          className="aboutMe-text"
          label="About Me"
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline={true}
          value={aboutme}
          rows="7"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    )
}

export default AboutMe
