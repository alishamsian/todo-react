import React from 'react'
import {TaskItem} from '../'
import "./TaskList.css"

const TaskList = ({ tasks, deleteTask }) => {
  return(
      <div className="TaskList">
        <ul>
          {tasks.map((task) => 
          <TaskItem 
          task={task}
          deleteTask={deleteTask}
          />)}
        </ul>
      </div>
      )
}

export default TaskList
