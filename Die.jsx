export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld && "#59E391",
  };
  return (
    <button
      style={styles}
      onClick={() => props.hold(props.id)}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${
        props.isHeld ? "held" : "not held"
      }`}
      className="dieButton"
    >
      {props.value}
    </button>
  );
}
