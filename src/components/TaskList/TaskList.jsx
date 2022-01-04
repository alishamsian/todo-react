import React from 'react'
import {TaskItem} from '../'
import "./TaskList.css"

const TaskList = ({ tasks }) => {
  return(
      <div className="TaskList">
        <ul>
          {tasks.map((task) => 
          <TaskItem 
          task={task}
          />)}
        </ul>
      </div>
      )
}

export default TaskList
