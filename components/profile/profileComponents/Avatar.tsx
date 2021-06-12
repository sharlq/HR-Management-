import React from 'react'
import { Button } from "@material-ui/core";
import Link from 'next/Link'
const Avatar = () => {
    return (
          <div className="avatarSection">
        <div className="avatarSection-imageContainer">
          <img
            className="image"
            src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg"
          ></img>
        </div>
        <div className ="avatarSection-controls">
        <div >
        <Button className="button" variant="contained" color="primary">
          Upload new picture
        </Button>
        <Button className="button" variant="contained" color="secondary">
          Delete image
        </Button>
        </div>
        <Link href="/profile/update">
        <Button className="button" variant="contained" color="default">
          Update profile
        </Button>
        </Link>
        </div>
      </div>
    )
}

export default Avatar
