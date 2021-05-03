import React from 'react';
import { useLayoutValue } from '../../context/LayoutContext';
import { useTodoContextValue } from '../../context/TodoContext';
import TodoComponent from '../TodoComponent/TodoComponent';
import './TodoListStyle.css';

const TodoListComponent = ({ isCompletedList, searchList, list }) => {
  const { setHideSider } = useLayoutValue();
  const {
    getSearchedTodos,
    selectedTodo,
    setSelectedTodo,
  } = useTodoContextValue();
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
        displayList.map((td) => (
          <div
            key={td['uid']}
            onClick={() => {
              setSelectedTodo(td);
              setHideSider(false);
            }}
          >
            {selectedTodo?.uid === td.uid ? (
              <TodoComponent {...td} active />
            ) : (
              <TodoComponent {...td} />
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoListComponent;
