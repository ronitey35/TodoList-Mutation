import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

interface Todo {
  title: string;
  description: string;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setTitle(e.target.value);
  };
  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setDesc(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { title: Title, description: desc }]);
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleTitleInput}
            type="text"
            placeholder="title"
            className="py-2 px-3 rounded-l border outline-none w-full"
            value={Title}
          />
          <input
            type="text"
            onChange={handleDescInput}
            placeholder="Description"
            className="py-2 px-3 rounded-l border outline-none w-full"
            value={desc}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {todos.map((todo, index) => (
          <Todos key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
