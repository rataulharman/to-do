import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <h1>My To-Do List</h1>

      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;