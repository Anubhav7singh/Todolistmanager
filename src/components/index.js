import { useContext, createContext } from "react";
import Todoform from "./Todoform";
import Todoitem from "./Todoitem";
export const Todocontext = createContext({
  todos: [
    {
      todo: "my message",
      id: 1,
      coomplete: false,
    },
  ],
  updatetodo: (id, todo) => {},
  deletetodo: (id) => {},
  toggletodo: (id) => {},
  addtodo: (todo) => {},
});
export const Usetodo = () => {
  return useContext(Todocontext);
};
export const Todoprovider = Todocontext.Provider;
export { Todoform, Todoitem };
