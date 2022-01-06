import "./Button.css";
export const Button = props => {
  let active;
  if (props.active) {
    active = "active";
  } else {
    active = "";
  }

  return (
    <button
      className={`button ${props.color} ${active}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
