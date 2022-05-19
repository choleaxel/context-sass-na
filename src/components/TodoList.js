import { CheckCircle } from '@mui/icons-material';
import { IconButton, List, ListItem } from '@mui/material';
import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export const TodoList = () => {
  const { todoList, setTodoList } = useContext(TodoListContext);

  const removeItem = (index) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  return (
    <List>
      {todoList.map((item, i) => {
        return (
          <ListItem key={item}>
            {item}
            <IconButton onClick={() => removeItem(i)}>
              <CheckCircle />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};