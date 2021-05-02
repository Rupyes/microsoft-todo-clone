import React from 'react';
import { useTodoContextValue } from '../context/TodoContext';
import TodoComponet from './TodoComponet';
import './ComponentStyle.css';

const TodosComponent = ({ isCompletedList, searchList, list }) => {
  const { getSearchedTodos, getTaskCompletedList } = useTodoContextValue();
  let displayList = list;
  if (searchList) {
    displayList = getSearchedTodos();
  }

  return (
    <div>
      {isCompletedList && displayList.length > 0 && (
        <h5 className='completedBadge'>
          <span>Completed</span>
        </h5>
      )}
      {displayList &&
        displayList.map((td) => <TodoComponet key={td['uid']} {...td} />)}
    </div>
  );
};

export default TodosComponent;
