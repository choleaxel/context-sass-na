import { TodoListContextProvider } from './context/TodoListContext';
import { InputBox } from './components/InputBox';
import { AddTodoButton } from './components/AddTodoButton';
import { TodoList } from './components/TodoList';
import {
  Button,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from '@mui/material';
import './scss/app.scss';

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#131924',
    },
    primary: {
      main: '#4d88ff',
    },
    secondary: {
      main: '#a9a9a9',
    },
  },
});

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TodoListContextProvider>
          <div className='input-container'>
            <InputBox />
            <AddTodoButton />
          </div>
          <TodoList />
        </TodoListContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

//still getting errors, is it bc Zach used yarn and i opted for npm?