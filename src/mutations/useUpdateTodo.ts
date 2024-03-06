import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateMutation = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateTodo", id],
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["todo", id] });
    },
  });
};

const updateTodo = async ({
  id,
  title,
  description,
  isCompleted,
}: {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}): Promise<Todo> => {
  const { data } = await axios.put(
    `https://todo-crud-beta.vercel.app/api/todo/${id}`,
    { title, description, isCompleted }
  );
  return data.todo;
};
