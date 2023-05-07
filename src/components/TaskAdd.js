import React, { useState } from 'react'
import {v4} from 'uuid';

function TaskAdd({onAdd}) {
  const[text,setText] = useState('');
  const[day,setDay] = useState('');
  const[reminder,setReminder] = useState(false);

  const create = (ev) => {
    ev.preventDefault()
    if(!text){
      alert("Please add Text")
      return
    }
    const id = v4();
    const task = {id,text,day,reminder}
    onAdd(task)
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={ create }>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={ev => setText(ev.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={ev => setDay(ev.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} onChange={ev => setReminder(ev.target.checked)}/>
      </div>
      <input type='submit' className='btn btn-block'/>
    </form>
  )
}

export default TaskAdd