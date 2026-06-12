import { useReducer } from "react";
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

    default:
      return state;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, []);

  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <AddTask dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default App;