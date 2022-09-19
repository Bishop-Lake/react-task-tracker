import { useState } from 'react';
import Header from './componets/Header';
import Tasks from './componets/Tasks';
import AddTask from './componets/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },{
    id: 2,
    text: 'Biology Exam',
    day: 'September 5th at 2:30pm',
    reminder: false,
  }
])


//Show Form
const toggleForm = () => {
  setShowAddTask(!showAddTask)
}

//Add Tast
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = { id, ...task } 

  setTasks([...tasks, newTask])
}

//Delete
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title='React Task Tracker' toggleForm={toggleForm} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder} 
        />
      : 'No Tasks To Display'}
    </div>
  );
}

export default App;
