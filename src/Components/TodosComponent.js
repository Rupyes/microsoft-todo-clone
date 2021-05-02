import React from 'react';
import { useTodoContextValue } from '../TodoContext';
import TodoComponet from './TodoComponet';

const TodosComponent = ({ isCompletedList, searchList }) => {
  const {
    todoList,
    toggleImportant,
    taskCompleted,
    getSearchedTodos,
  } = useTodoContextValue();
  let displayList = todoList;
  if (searchList) {
    displayList = getSearchedTodos();
  }
  return (
    <div>
      {displayList &&
        displayList
          .filter((todo) => todo['isChecked'] === isCompletedList)
          .map((td) => (
            <TodoComponet
              key={td['uid']}
              {...td}
              taskCompleted={taskCompleted}
              toggleImportant={toggleImportant}
            />
          ))}
    </div>
  );
};

export default TodosComponent;
