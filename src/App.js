import { useReducer, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "COMPLETE_TASK":
      return state.map((task) =>
        task.id === action.payload ? {...task, completed: !task.completed} : task
      );

    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? {...task, text: action.payload.text, date: new Date().toLocaleString() } : task
      );
    default:
      return state;
  }
}

function App() {

 const [taskText, setTaskText] = useState("");
 const [editId, setEditId] = useState(null);

  const [tasks, dispatch] = useReducer(reducer, [], () => {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
  );

  useEffect(() => {localStorage.setItem("tasks",JSON.stringify(tasks)); 
  }, [tasks]);

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <AddTask 
        taskText={taskText}
        setTaskText={setTaskText}
        editId={editId}
        setEditId={setEditId}
        dispatch={dispatch}/>

      <div className="task-list">
        <TaskList
          tasks={tasks}
          dispatch={dispatch}
          setTaskText={setTaskText}
          setEditId={setEditId}
        />
      </div>
    </div>
  );
}

export default App;