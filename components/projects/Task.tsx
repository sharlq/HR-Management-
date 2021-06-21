import React from 'react'

const Task:React.FC<{title:string,description:string,team:string}> = ({title,description,team}) => {
    return (
        <div className="task">
            <h4 className="task-title">{title}</h4>
            <p className="task-description">{description}</p>
            <div className="task-team">{team}</div>
        </div>
    )
}

export default Task
