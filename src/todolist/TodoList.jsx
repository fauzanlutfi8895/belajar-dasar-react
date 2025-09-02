import Todo from "./Todo";

const TodoList = () => {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true,
      isDeleted: true,
    },
    {
      id: 2,
      text: "Learn Javascript",
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 3,
      text: "Learn React",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 4,
      text: "Learn React Router",
      isCompleted: false,
      isDeleted: false,
    },
  ];

  return (
    <ul>
      {data.map(todo => (
        <Todo key={todo.id} {...todo} /> //Di esLint akan error jika tidak menambahkan key
      ))}
    </ul>
  ); //kalo pakai kurung kurawal wajib return, biasanya pakai const baru return const tersebut
};

export default TodoList;
