import React from 'react';
import { useTodoContextValue } from '../TodoContext';
import TodoComponet from './TodoComponet';
import './ComponentStyle.css';

const CompletedTodosComponent = ({ isCompletedList }) => {
  const { todoList, taskCompleted, toggleImportant } = useTodoContextValue();
  return (
    <div>
      {todoList.length > 1 && (
        <h5 className='completedBadge'>
          <span>Completed</span>
        </h5>
      )}
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

export default CompletedTodosComponent;
