import React from 'react';
import { Typography } from 'antd';
import AddTodoComponent from '../Components/AddTodoComponent/AddTodoComponent';
import { useTodoContextValue } from '../context/TodoContext';
import { useSelectedMenuValue } from '../context/SelectedMenuContext';
import { TASKS } from '../constant';
import TodoListComponent from '../Components/TodoListComponent/TodoListComponent';

const { Title } = Typography;
const MidLayout = () => {
  const {
    isSearching,
    defaultMenuList,
    todoTaskCompletedList,
  } = useTodoContextValue();
  const { selectedMenu } = useSelectedMenuValue();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '15px',
        minWidth: '300px',
      }}
    >
      {isSearching ? (
        <TodoListComponent searchList={true} />
      ) : !Object.keys(selectedMenu).length ? (
        'Welcome'
      ) : (
        <>
          <Title style={{ color: '#fff', fontWeight: 'bold' }} level={3}>
            {selectedMenu.title}
          </Title>
          <div className='todoContainer'>
            {selectedMenu.title === TASKS ? (
              <>
                <TodoListComponent
                  isCompletedList={false}
                  list={defaultMenuList.todoTaskList}
                />
                <TodoListComponent
                  isCompletedList={true}
                  list={todoTaskCompletedList}
                />
              </>
            ) : (
              <TodoListComponent
                isCompletedList={false}
                list={defaultMenuList.todoImpList}
              />
            )}
          </div>
          <AddTodoComponent />
        </>
      )}
    </div>
  );
};

export default MidLayout;
