import React from 'react'
import "./TaskItem.css"
const TaskItem = ({ task }) => {
    return(
        <li className="TaskItem" >
            <input id='task' type="checkbox" />
            <h2>{task.title}</h2>
            <button>Delete</button>
        </li>
    )
}

export default TaskItem
