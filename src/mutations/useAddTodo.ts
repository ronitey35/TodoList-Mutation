import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTodo"],
    mutationFn: addTodo,
    onSuccess(data) {
      // const todos = queryClient.getQueryData<Todo[]>(["todos"]);
      // if (!todos) return;
      // const updatedTodos = [...todos, data];
      // queryClient.setQueryData<Todo[]>(["todos"], updatedTodos);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

const addTodo = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}): Promise<Todo> => {
  const { data } = await axios.post(
    "https://todo-crud-beta.vercel.app/api/todo",
    {
      title,
      description,
    }
  );
  console.log(data);
  return data.todo;
};
