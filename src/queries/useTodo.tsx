import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export const useTodo = (id: string) => {
//   return useQuery({
//     queryKey: ["todo"],
//     queryFn: () => fetchTodo(id),
//   });
// };

// const fetchTodo = async (id: string): Promise<Todo> => {
//   const { data } = await axios.get(
//     `https://todo-crud-beta.vercel.app/api/todo/${id}`
//   );
//   return data.todo;
// };

export const useTodo = (id: string) => {
  return useQuery({
    queryKey: ["fetchTodo", id],
    queryFn: () => fetchTodo(id),
  });
};

const fetchTodo = async (id: string): Promise<Todo> => {
  const { data } = await axios.get(
    `https://todo-crud-beta.vercel.app/api/todo/${id}`
  );
  return data.todo;
};
