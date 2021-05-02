import React from 'react';
import { Typography } from 'antd';
import AddTodoComponent from '../Components/AddTodoComponent/AddTodoComponent';
import TodosComponent from '../Components/TodosComponent';
import { useTodoContextValue } from '../context/TodoContext';
import { useSelectedMenuValue } from '../context/SelectedMenuContext';
import { TASKS } from '../constant';

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
      }}
    >
      {isSearching ? (
        <TodosComponent searchList={true} />
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
                <TodosComponent
                  isCompletedList={false}
                  list={defaultMenuList.todoTaskList}
                />
                <TodosComponent
                  isCompletedList={true}
                  list={todoTaskCompletedList}
                />
              </>
            ) : (
              <TodosComponent
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
