const Todos = ({ todo }: any) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
};

export default Todos;
