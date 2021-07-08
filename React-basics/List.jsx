function List(props) {
  return (
    <ul>
      {props.tasks.map((el) => {
        return <ListItem taskVal={el} />;
      })}
    </ul>
  );
}
