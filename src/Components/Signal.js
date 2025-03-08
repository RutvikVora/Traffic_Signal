import "../../src/styles.css";

const Signal = ({ color, isActive }) => {
  return (
    <div
      className="Signal"
      style={{
        backgroundColor: `${color}`,
        opacity: isActive ? 1 : 0.3,
      }}
    />
  );
};

export default Signal;
