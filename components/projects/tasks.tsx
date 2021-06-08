import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
const tasks:React.FC<{title:string,children?:any}>  = ({title,children}) => {
    return (
        <div className='tasksContainer'>
            <div className="tasksContainer-title">
            <h4>{title}</h4>
            <AddCircleIcon/>
            </div>
            {children}
        </div>
    )
}

export default tasks
