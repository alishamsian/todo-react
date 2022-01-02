import React from 'react'
import { 
    AddTaskForm,
    TaskList,
    FilterFooter,
  } from '../';
  import './TodoApp.css'


const TodoApp = () => {
    return (
        <div className='TodoApp'>
            <AddTaskForm />
            <TaskList />
            <FilterFooter />
        </div>
    )
}

export default TodoApp
