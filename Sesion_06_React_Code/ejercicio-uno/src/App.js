import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import './index.css';
 
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Tarea 1', priority: 'Alta' },
    { id: 2, name: 'Tarea 2', priority: 'Media' },
    { id: 3, name: 'Tarea 3', priority: 'Baja' }
  ]);
 
  const addTask = () => {
    const newTask = { 
      id: tasks.length + 1, 
      name: `Tarea ${tasks.length + 1}`, 
      priority: tasks.length % 3 === 0 ? 'Alta' : tasks.length % 3 === 1 ? 'Media' : 'Baja' 
    };
    setTasks([...tasks, newTask]);
  };
 
  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} addTask={addTask} />
      <Footer />
    </div>
  );
}
 
export default App;

