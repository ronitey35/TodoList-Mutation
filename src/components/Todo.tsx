import { useParams } from "react-router-dom";
import { useDeleteTodo } from "../mutations/useDeleteTodo";
import { useTodo } from "../queries/useTodo";

type Params = Readonly<{ id: string }>;

const Todo = () => {
  const { id } = useParams<Params>();
  const { data } = useTodo(id!);
  const { mutate } = useDeleteTodo(id!);

  const deleteTodo = (id: string) => {
    return mutate(id);
  };

  return (
    <div>
      <div className="flex flex-col">
        <h1>Title: {data?.title}</h1>
        <h2>Description: {data?.description}</h2>
        <h3>isCompleted: {data?.isCompleted ? "True" : "False"}</h3>
      </div>
      <div>
        <button>Update</button>
        <button onClick={() => deleteTodo(id!)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
