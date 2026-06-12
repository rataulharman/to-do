import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id} className="task">
          <div>
            <h3>{task.text}</h3>
            <p>{task.date}</p>
          </div>

          <div className="icons">
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() =>
                props.dispatch({
                  type: "COMPLETE_TASK",
                  payload: task.id
                })
              }
            />

            <FontAwesomeIcon
              icon={faTrash}
              onClick={() =>
                props.dispatch({
                  type: "DELETE_TASK",
                  payload: task.id
                })
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;