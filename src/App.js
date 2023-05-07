import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskAdd from "./components/TaskAdd";

function App() {
  const[visibleAddTask,setVisibleAddTask] = useState(false);
  const[tasks,setTasks] = useState([
    {
      id:1,
      text:"Get driving license",
      day:"May 11th 7pm",
      reminder:true
    },
    {
      id:2,
      text:"Buy Groceries",
      day:"May 15th 4pm",
      reminder:false
    },
    {
      id:3,
      text:"Apply for Grad School",
      day:"May 20th 4pm",
      reminder:false
    }]);

    useEffect(() => {
      setTasks(JSON.parse(window.localStorage.getItem('tasks')))
    },[])
    
    useEffect(() => {
      window.localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    const deleteTask = (id) => {
      const newTasks = tasks.filter(task => task.id !== id)
      setTasks(newTasks);
    }

    const toggleTask = (id) => {
      const newTasks = [...tasks]
      const task = newTasks.find(task => task.id === id);
      task.reminder = !task.reminder
      setTasks(newTasks)
    }

    const changeAddTask = () => {
      setVisibleAddTask(!visibleAddTask);
    }

    const createTask = (task) => {
      const newTasks = [...tasks,task]
      setTasks(newTasks);
    }
  return (
    <div className="container">
      <Header title="Task Tracker" showAdd={visibleAddTask} onClick={changeAddTask}/>
      {visibleAddTask ? <TaskAdd onAdd={createTask}/>:""}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>
    </div>
  );
}

export default App;
