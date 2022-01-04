import React, {useEffect, useState} from 'react'

import { 
    AddTaskForm,
    TaskList,
    FilterFooter,
  } from '../';
  import './TodoApp.css';
  import { v4 as uuidv4 } from 'uuid';


const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    setTasks([
      {
        id: uuidv4(),
        title: "ali shamsian",
        status: true,
      },
      {
        id: uuidv4(),
        title: "ashkan heidary",
        status: false,
      },
    ])
  },[])

    const AddTask =(taskTitle)=>{
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          status: false,
        }
      ])
    }


    return (
        <div className='TodoApp'>
            <AddTaskForm AddTask={AddTask} />
            <TaskList tasks={tasks}/>
            <FilterFooter />
        </div>
    )
}

export default TodoApp
