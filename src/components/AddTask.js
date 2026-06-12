function AddTask() {
  return (
    <section className="task-add">
      <form>
        <input type="text" placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default AddTask;