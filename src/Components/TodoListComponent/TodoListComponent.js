import React from 'react';
import { useTodoContextValue } from '../../context/TodoContext';
import TodoComponent from '../TodoComponent/TodoComponent';
import './TodoListStyle.css';

const TodoListComponent = ({ isCompletedList, searchList, list }) => {
  const { getSearchedTodos } = useTodoContextValue();
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
        displayList.map((td) => <TodoComponent key={td['uid']} {...td} />)}
    </div>
  );
};

export default TodoListComponent;
