export const Card = props => {
  return (
    <div>
      <p class={props.suitColor}>{props.face}</p>
      <p class={props.suitColor}>{props.suit}</p>
    </div>
  );
};
