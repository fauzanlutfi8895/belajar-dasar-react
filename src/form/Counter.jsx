//Contoh salah
// let counter = 0;
// const Counter = () => {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           counter++;
//           console.log(counter);
//         }}
//       >
//         Increment
//       </button>
//       <h1>Counter: {counter}</h1>
//     </div>
//   );
// };

import { useState } from "react";

// export default Counter;

const Counter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          // setCounter(counter + 1);
          
          //tanpa closure hanya mengecek apakah ada perbuahan state, tidak langsung cetak
          // setCounter(counter + 1);
          // setCounter(counter + 1);
          // setCounter(counter + 1);

          //Dengan closure bisa update
          setCounter(c => c + 1);
          setCounter(c => c + 1);
          setCounter(c => c + 1);
        }}
      >
        Increment
      </button>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
