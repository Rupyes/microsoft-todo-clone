import React, { useState } from 'react';
import { Typography } from 'antd';
import AddTodoComponent from '../Components/AddTodoComponent';
import CompletedTodosComponent from '../Components/CompletedTodosComponent';
import TodosComponent from '../Components/TodosComponent';
import { useTodoContextValue } from '../TodoContext';

const { Title } = Typography;
const MidLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Title style={{ color: '#fff', fontWeight: 'bold' }} level={3}>
        Tasks
      </Title>
      <div
        style={{
          overflowY: 'auto',
          padding: '5px',
          flex: 1,
          marginBottom: '10px',
        }}
      >
        <TodosComponent isCompletedList={false} />
        <CompletedTodosComponent isCompletedList={true} />
      </div>
      <AddTodoComponent />
    </div>
  );
};

export default MidLayout;
