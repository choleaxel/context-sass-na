import { Input } from '@mui/material';
import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export const InputBox = () => {
  const { input, setInput } = useContext(TodoListContext);

  return (
    <Input
      placeholder='Add Your Next Task!'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
