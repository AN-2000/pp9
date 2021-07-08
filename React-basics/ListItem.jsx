function ListItem(props) {
  return (
    <li>
      <span className="task">{props.taskVal}</span>
      <button
        onClick={() => {
          props.removeTask(props.taskVal);
        }}
      >
        X
      </button>
    </li>
  );
}
