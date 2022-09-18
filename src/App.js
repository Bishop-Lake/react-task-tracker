import { useState } from 'react';
import Header from './componets/Header';
import Tasks from './componets/Tasks';

function App() {

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
      <Header title='React Task Tracker'/>
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
