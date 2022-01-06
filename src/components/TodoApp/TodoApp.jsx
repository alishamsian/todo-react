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

    const deleteTask =(taskId)=>{
    let newTaskList = tasks;
    delete newTaskList[tasks.findIndex((task)=> task.id === taskId)];
    newTaskList = newTaskList.filter((item)=> item);
    setTasks(newTaskList);
    }

    return (
        <div className='TodoApp'>
            <AddTaskForm AddTask={AddTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
            <FilterFooter />
        </div>
    )
}

export default TodoApp
