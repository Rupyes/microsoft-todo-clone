import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const [isSearching, setIsSearching] = useState(false);

  const addToList = (task) => {
    setTodoList([task, ...todoList]);
  };

  const taskCompleted = (uid) => {
    const new_todoList = todoList.map((todo) => {
      if (todo['uid'] === uid) {
        todo['isChecked'] = !todo['isChecked'];
      }
      return todo;
    });
    setTodoList([...new_todoList]);
  };

  const toggleImportant = (uid) => {
    const new_todoList = todoList.map((todo) => {
      if (todo['uid'] === uid) {
        todo['isImportant'] = !todo['isImportant'];
      }
      return todo;
    });
    setTodoList([...new_todoList]);
  };

  const todoImpList = todoList.filter(
    (td) => td.isImportant === true && td.isChecked === false
  );

  const todoTaskList = todoList.filter((td) => td.isChecked === false);

  const getSearchedTodos = () => {
    if (todoList.length > 0) {
      return todoList.filter((td) => td.task.includes(searchText));
    }
    return [];
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        todoTaskList,
        setTodoList,
        toggleImportant,
        taskCompleted,
        addToList,
        todoImpList,
        isSearching,
        setIsSearching,
        searchText,
        setSearchText,
        getSearchedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContextValue = () => useContext(TodoContext);
