function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id} className="task">
          <h3>{task.text}</h3>
          <p>{task.date}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;