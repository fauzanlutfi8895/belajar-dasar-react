// let counter = 0; //tidak pure component karena akan memiliki side-effect

const Row = ({ id, text }) => {
//   counter++; 
  return (
    <div>
      {/* <td>{counter}</td> */}
      <td>{id}</td>
      <td>{text}</td>
    </div>
  );
};

export default Row;
