function List(props) {
  return (
    <ul>
      {props.data.map((el, index) => (
        <li
          onClick={() => {
            props.handleVisible("true");
            props.handleFocus(index)
          }}
          key={index}
        >
          Timepoint - {el.timepoint}
        </li>
      ))}
    </ul>
  );
}

export default List;
