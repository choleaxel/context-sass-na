import { Button } from '@mui/material';
import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export const AddTodoButton = () => {
  const { input, todoList, setTodoList, setInput } =
    useContext(TodoListContext);

  const onClick = () => {
    if (!input) {
      return;
    }
    const newList = [...todoList, input];
    setTodoList(newList);
    setInput('');
  };

  return (
    <div className='add-todo-button-container'>
      <Button color='primary' variant='contained' onClick={onClick}>
        Add TODO
      </Button>
    </div>
  );
};