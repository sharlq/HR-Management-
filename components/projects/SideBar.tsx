import React from 'react'
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add';

const SideBar:React.FC<{handleTrigger:any}> = ({handleTrigger}) => {
    
    
    
    
    return (
        <aside className="projectsSide">
            <div className="projectsSide-title">
            <h2>Projects </h2> <AddIcon style={{cursor:'pointer'}} onClick={()=>handleTrigger()}/>
            </div>
            <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            </ul>
        </aside>
    )
}

export default SideBar
