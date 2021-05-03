import React from 'react';
import { DeleteOutlined, RightOutlined } from '@ant-design/icons';
import { useTodoContextValue } from '../../context/TodoContext';
import './TodoEditDetailStyle.css';
import { useLayoutValue } from '../../context/LayoutContext';

const TodoEditDetailComponent = () => {
  const { selectedTodo, setSelectedTodo, deleteTodo } = useTodoContextValue();
  const { setHideSider } = useLayoutValue();
  const confirmDelete = () => {
    if (window.confirm(`"${selectedTodo.task}" will be deleted permanantly`)) {
      deleteTodo(selectedTodo.uid);
      setSelectedTodo(null);
      setHideSider(true);
    }
  };
  return (
    <div className='editWrapper'>
      <div className='editMain'>sdfsd</div>
      <div className='editFooter'>
        <RightOutlined
          className='footIcon'
          onClick={() => {
            setSelectedTodo(null);
            setHideSider(true);
          }}
        />
        <p className='info'>Completed Sat, May 1</p>
        <DeleteOutlined className='footIcon' onClick={confirmDelete} />
      </div>
    </div>
  );
};

export default TodoEditDetailComponent;
