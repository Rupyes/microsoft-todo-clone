import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const [selectedTodo, setSelectedTodo] = useState();

  const [isSearching, setIsSearching] = useState(false);

  const deleteTodo = (uid) => {
    const new_todolist = todoList.filter((td) => td.uid !== uid);
    setTodoList([...new_todolist]);
  };

  const addToList = (task) => {
    setTodoList([task, ...todoList]);
  };

  const taskCompleted = (uid) => {
    const new_todoList = todoList.map((todo) => {
      if (todo['uid'] === uid) {
        todo['isChecked'] = !todo['isChecked'];
        if (todo['isChecked']) {
          todo['completedOn'] = Date.now();
        } else {
          todo['completedOn'] = null;
        }
        setSelectedTodo({
          ...selectedTodo,
          isChecked: todo.isChecked,
          completedOn: todo.completedOn,
        });
      }
      return todo;
    });
    setTodoList([...new_todoList]);
  };

  const toggleImportant = (uid) => {
    const new_todoList = todoList.map((todo) => {
      if (todo['uid'] === uid) {
        todo['isImportant'] = !todo['isImportant'];
        setSelectedTodo({
          ...selectedTodo,
          isImportant: todo.isImportant,
        });
      }
      return todo;
    });
    setTodoList([...new_todoList]);
  };

  const updateTodo = (updatedTodo) => {
    const new_todoList = todoList.map((todo) => {
      if (todo.uid === updatedTodo.uid) {
        todo = { ...updatedTodo };
      }
      return todo;
    });
    setTodoList([...new_todoList]);
  };

  const getSearchedTodos = () => {
    if (todoList.length > 0) {
      return todoList.filter((td) => td.task.includes(searchText));
    }
    return [];
  };

  const todoImpList = todoList.filter((td) => td.isImportant && !td.isChecked);
  const todoTaskList = todoList.filter((td) => !td.isChecked);
  const todoTaskCompletedList = todoList.filter((td) => td.isChecked);
  const todoMyDayList = todoList.filter((td) => td.isMyDay && !td.isChecked);
  const todoPlannedList = [];
  const todoAssignedList = [];
  const defaultMenuList = {
    todoMyDayList,
    todoPlannedList,
    todoAssignedList,
    todoImpList,
    todoTaskList,
  };
  return (
    <TodoContext.Provider
      value={{
        defaultMenuList,
        todoList,
        updateTodo,
        setTodoList,
        toggleImportant,
        taskCompleted,
        addToList,
        isSearching,
        setIsSearching,
        searchText,
        setSearchText,
        getSearchedTodos,
        todoTaskCompletedList,
        selectedTodo,
        setSelectedTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContextValue = () => useContext(TodoContext);
