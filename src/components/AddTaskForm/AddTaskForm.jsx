import React from 'react'
import "./AddTaskForm.css"
const AddTaskForm = () => {
    return (
        <div className="AddTaskForm">
        <form>
          <input type="text" placeholder='alishamsian'/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
}

export default AddTaskForm;
