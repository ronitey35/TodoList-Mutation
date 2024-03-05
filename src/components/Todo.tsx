import React from "react";
import { useParams } from "react-router-dom";
import { useTodo } from "../queries/useTodo";
import { useDeleteTodo } from "../mutations/useDeleteTodo";

const Todo = () => {
  const { id }: { id: string } = useParams();
  const { data } = useTodo(id);
  //   const { mutate } = useDeleteTodo(id);

  //   const deleteTodo = (id) => {
  //     return mutate(id);
  //   };
  return (
    <div>
      <div className="flex flex-col">
        <h1>Title: {data?.title}</h1>
        <h2>Description: {data?.description}</h2>
      </div>
      <div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
