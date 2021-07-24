let Display = (props) => {
  return (
    <div className={`display ${props.theme}`}>
      <p>Name - {props.name}</p>
      <p>Email - {props.email}</p>
      <p>Phone - {props.phone}</p>
    </div>
  );
};

export default Display;
