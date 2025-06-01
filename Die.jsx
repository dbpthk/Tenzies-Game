export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld && "#59E391",
  };
  return (
    <button
      style={styles}
      onClick={() => props.hold(props.id)}
      className="dieButton"
    >
      {props.value}
    </button>
  );
}
