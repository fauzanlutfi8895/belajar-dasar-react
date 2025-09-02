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
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <h1>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
