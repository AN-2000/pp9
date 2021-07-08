function List(props) {
  return (
    <ul>
      {props.tasks.map((el,index) => {
        return <ListItem removeTask = {props.removeTaskHandler}  key={index}  taskVal={el} />;
      })}
    </ul>
  );
}
