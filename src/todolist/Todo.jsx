const Todo = ({ text, isCompleted, isDeleted = false }) => {
  if (isDeleted) return null;

  //If Else
  //   if (isCompleted) {
  //     return (
  //       <div>
  //         <del>{text}</del>
  //       </div>
  //     );
  //   } else {
  //     return <div>{text}</div>;
  //   }

  //Ternary
  return (
    <li>
      {isCompleted ? (
        <del>
          {text}
          {isCompleted && "✅"} {/* Logical AND */}
        </del>
      ) : (
        text
      )}
    </li>
  );
};

export default Todo;
