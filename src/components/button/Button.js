import "./Button.css";
export const Button = props => {
  return (
    <button className={`button ${props.color}`} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
