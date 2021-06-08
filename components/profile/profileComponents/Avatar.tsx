import React from 'react'
import { Button } from "@material-ui/core";
const Avatar = () => {
    return (
          <div className="avatarSection">
        <div className="avatarSection-imageContainer">
          <img
            className="image"
            src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg"
          ></img>
        </div>
        <Button className="button" variant="contained" color="primary">
          Upload new picture
        </Button>
        <Button className="button" variant="contained" color="secondary">
          Delete image
        </Button>
      </div>
    )
}

export default Avatar
