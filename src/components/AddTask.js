function AddTask(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.taskText.trim()) return;

    if (props.editId === null) {
      props.dispatch({
        type: "ADD_TASK",
        payload: {
          id: Date.now(),
          text: props.taskText,
          completed: false,
          date: new Date().toLocaleString()
        }
      });
    } else {
      props.dispatch({
        type: "EDIT_TASK",
        payload: {
          id: props.editId,
          text: props.taskText
        }
      });

      props.setEditId(null);
    }

    props.setTaskText("");
  };

  return (
    <section className="task-add">
      <form onSubmit={handleSubmit}>
        <input
          value={props.taskText}
          onChange={(e) => props.setTaskText(e.target.value)}
        />
        <button>
          {props.editId === null ? "Add Task" : "Update Task"}
        </button>
      </form>
    </section>
  );
}

export default AddTask;