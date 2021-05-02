import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
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
  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        toggleImportant,
        taskCompleted,
        addToList,
        todoImpList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContextValue = () => useContext(TodoContext);
