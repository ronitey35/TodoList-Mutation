import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["deletetodo", id],
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deletetodo"] });
      navigate("/");
    },
  });
};

const deleteTodo = async (id: string) => {
  const { data } = await axios.delete(
    `https://todo-crud-beta.vercel.app/api/todo/${id}`
  );
  return data.todo;
};
