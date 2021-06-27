import React from 'react'
import TextField from '@material-ui/core/TextField';

const RequestForm:React.FC<{name:string,department:string,days:string,leaveType:string,reasonOfLeave:string,informedManager:boolean}>  = ({name,department,days,leaveType,reasonOfLeave,informedManager}) => {
    return (
        <div className="leaveCard">
                <h3>Leave Request</h3>
                <TextField id="outlined-basic" value={name} label="Name" variant="outlined" />
                <TextField id="outlined-basic" value={department} label="department" variant="outlined" />
                <TextField id="outlined-basic" value={days} label="Number Of Days" variant="outlined" />
                <TextField id="outlined-basic" value={leaveType} label="Leave Type" variant="outlined" />
                <h5>Informed the Manager</h5>
                <TextField id="outlined-basic" value={reasonOfLeave} label="Reason Of Leave" variant="outlined" />
            </div>  
    )
}

export default RequestForm
