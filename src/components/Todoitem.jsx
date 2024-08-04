import React from "react";
import { useState } from "react";
import { Usetodo } from ".";
function Todoitem({ todo }) {
  const { updatetodo, deletetodo, toggletodo } = Usetodo();
  const [todomsg, settodomsg] = useState(todo.todo);
  const [edit, setedit] = useState(false);
  const edittodo = () => {
    updatetodo(todo.id, { ...todo, todo: todomsg });
    setedit(false);
  };
  const togglecomplete = () => {
    toggletodo(todo.id);
  };
  const deltodo = () => {
    deletetodo(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
        onChange={togglecomplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          edit ? "border-black/10 px-2" : "border-transparent"
        } ${todo.complete ? "line-through" : ""}`}
        value={todomsg}
        onChange={(e) => settodomsg(e.target.value)}
        readOnly={!edit}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.complete) return;

          if (edit) {
            edittodo();
          } else setedit((prev) => !prev);
        }}
        disabled={todo.complete}
      >
        {edit ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={deltodo}
      >
        ❌
      </button>
    </div>
  );
}

export default Todoitem;
