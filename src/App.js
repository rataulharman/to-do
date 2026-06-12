import { useReducer, useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "COMPLETE_TASK":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "EDIT_TASK":
      return state.map(task =>
        task.id === action.payload.id
          ? {
              ...task,
              text: action.payload.text,
              date: new Date().toLocaleString()
            }
          : task
      );

    default:
      return state;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [taskText, setTaskText] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <AddTask
        dispatch={dispatch}
        taskText={taskText}
        setTaskText={setTaskText}
        editId={editId}
        setEditId={setEditId}
      />

      <TaskList
        tasks={tasks}
        dispatch={dispatch}
        setTaskText={setTaskText}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;