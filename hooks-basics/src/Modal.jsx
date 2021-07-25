import "./Modal.css";

function Modal(props) {
  if (!props.data) {
    return <div>No data yet</div>;
  }

  return (
    <div className={`modal ${props.visible ? "" : "hide"}`}>
      <button
        onClick={() => {
          props.handleVisible(false);
        }}
      >
        x
      </button>
      <p>Cloud Cover - {props.data.cloudcover}</p>
      <p>Seeing - {props.data.seeing}</p>
      <p>Timepoint - {props.data.timepoint}</p>
      <p>Temperature - {props.data.temp2m}</p>
      <p>
        Wind - {props.data.wind10m.speed} {props.data.wind10m.direction}
      </p>
    </div>
  );
}

export default Modal;
