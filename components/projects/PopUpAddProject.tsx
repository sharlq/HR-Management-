import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
const PopUpAddProject:React.FC<{trigger:boolean}> = ({trigger=true}) => {
    
    return (
        trigger?
           
           (  <div className="popUp">
            <div className="popUp-form">
            <h2>Create new Project</h2>
            <TextField className="popUp-form_input" id="outlined-basic" label="Project Name" variant="outlined" />
            <TextField className="popUp-form_input" id="outlined-basic" label="Project Department" variant="outlined" />
            <TextField className="popUp-form_input" id="outlined-basic" label="roject Manager" variant="outlined" />
            <TextField className="popUp-form_input" id="outlined-basic" label="Project Team" variant="outlined" />
            <Button variant="contained"color="primary" className="popUp-form_button" > Create </Button>
            </div>
        </div>)
        
        :
        (null)
        
    )
}

export default PopUpAddProject
