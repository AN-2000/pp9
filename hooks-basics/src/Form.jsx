let Form = (props) => {
  return (
    <div className="form">
      <button className="theme-button"
        onClick={() => {
          if (props.theme === "light") props.handleTheme("dark");
          else props.handleTheme("light");
        }}
      >
        Theme - {props.theme}
      </button>
      <div className="all-input">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            props.handleName(e.currentTarget.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            props.handleEmail(e.currentTarget.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="Number"
          onChange={(e) => {
            props.handlePhone(e.currentTarget.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Form;
