const Todos = ({ todo }: { todo: Todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <a href={`/todo/${todo.id}`}>Click </a>
    </div>
  );
};

export default Todos;
