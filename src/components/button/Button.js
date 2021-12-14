import "./Button.css";
export const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.name}
    </button>
  );
};
