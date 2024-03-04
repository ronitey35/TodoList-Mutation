import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get(
    "https://todo-crud-beta.vercel.app/api/todos",
    {
      withCredentials: true,
    }
  );
  return data.todos;
};
