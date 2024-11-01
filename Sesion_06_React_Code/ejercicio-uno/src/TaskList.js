import React from 'react';
import '../styles/TaskList.css';
 
const TaskList = ({ tasks, addTask }) => {
  return (
    <div className="task-list">
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - Prioridad: {task.priority}
          </li>
        ))}
      </ul>
      <button onClick={addTask}>Agregar Tarea</button>
    </div>
  );
};
 
export default TaskList;
