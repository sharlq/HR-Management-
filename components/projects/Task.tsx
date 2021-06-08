import React from 'react'

const Task:React.FC<{title:string,description:string,team:string}> = ({title,description,team}) => {
    return (
        <div className="task">
            <h5 className="task-title">{title}</h5>
            <p className="task-description">{description}</p>
            <div className="task-team">{team}</div>
        </div>
    )
}

export default Task
