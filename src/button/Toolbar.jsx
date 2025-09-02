//Ada props onClick
const Toolbar = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ backgroundColor: "yellow" }}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
};

export default Toolbar;
