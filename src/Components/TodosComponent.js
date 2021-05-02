import React from 'react';
import { useTodoContextValue } from '../TodoContext';
import TodoComponet from './TodoComponet';

const TodosComponent = ({ isCompletedList }) => {
  const { todoList, toggleImportant, taskCompleted } = useTodoContextValue();
  return (
    <div>
      {todoList &&
        todoList
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
