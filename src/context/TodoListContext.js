import { createContext, useState } from 'react';

export const TodoListContext = createContext({});

export const TodoListContextProvider = ({ children }) => {
  const { Provider } = TodoListContext;
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const value = {
    input,
    setInput,
    todoList,
    setTodoList,
  };
  return <Provider value={value}>{children}</Provider>;
};