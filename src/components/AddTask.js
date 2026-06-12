import { useState } from "react";

function AddTask(props) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    props.dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        text,
        completed: false,
        date: new Date().toLocaleString()
      }
    });

    setText("");
  };

  return (
    <section className="task-add">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
        />
        <button>Add Task</button>
      </form>
    </section>
  );
}

export default AddTask;