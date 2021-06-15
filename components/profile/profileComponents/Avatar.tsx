import React from 'react'
import { Button } from "@material-ui/core";
import Link from 'next/Link'
const Avatar:React.FC<{avatar:string,name:string}> = ({avatar,name}) => {
    return (
          <div className="avatarSection">
        <div className="avatarSection-imgName">
        <div className="avatarSection-imageContainer">
          <img
            className="image"
            src={"https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg"||avatar}
          ></img>
        </div>
        <h1 className="employeeName">{name}</h1>
        </div>
        <div className ="avatarSection-controls">
        <div >
        <input id="uploadImage" type="file" hidden multiple/>
        <label htmlFor="uploadImage">
        <Button className="button" variant="contained" component="span" color="primary">
          Upload new picture
        </Button>
        </label>
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
