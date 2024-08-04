import { useEffect, useState } from "react";
import "./App.css";
import { Todoform, Todoitem, Todoprovider } from "./components";
function App() {
  const [todos, settodos] = useState([]);
  const addtodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updatetodo = (id, todo) =>
    settodos((prev) => prev.map((p) => (p.id === id ? todo : p)));
  const deletetodo = (id) =>
    settodos((prev) => prev.filter((p) => p.id !== id));
  const toggletodo = (id) =>
    settodos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, complete: !p.complete } : p))
    );
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Todoprovider
      value={{ todos, updatetodo, toggletodo, addtodo, deletetodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((p) => (
              <div className="w-full" key={p.id}>
                <Todoitem todo={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
