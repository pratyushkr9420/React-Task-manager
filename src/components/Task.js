import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({task,onDelete,onToggle}) {

  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={()=> onToggle(task.id)}>
    <h3>{task.text}<FaTimes style={{color:'black',cursor:"pointer"}} onClick={(ev) => onDelete(task.id)}/></h3>
    </div>
  )
}

export default Task