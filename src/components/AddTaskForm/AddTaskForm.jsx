import React, { useState } from 'react'
import "./AddTaskForm.css"
const AddTaskForm = ({AddTask}) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      e.preventDefault();
      setValue(e.target.value)
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if (!value || value === ""){
       return 
      }
      AddTask(value);
    }
    return (
        <div className="AddTaskForm">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder='alishamsian'/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
}

export default AddTaskForm;
