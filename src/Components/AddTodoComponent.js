import { Row, Col, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { useTodoContextValue } from '../TodoContext';
import './ComponentStyle.css';

const AddTodoComponent = () => {
  const { addToList } = useTodoContextValue();
  const [task, setTask] = useState('');
  const added = (task) => {
    addToList({
      uid: Date.now(),
      task,
      isImportant: false,
      isChecked: false,
      createdOn: Date.now(),
      isDue: false,
      dueDate: null,
    });
    setTask('');
  };
  return (
    <Row className='addTaskRow'>
      <Col className='addTaskIconCol'>
        {!task ? (
          <PlusOutlined style={{ fontSize: '22px' }} />
        ) : (
          task && <Radio onClick={() => added(task)} />
        )}
      </Col>
      <Col className='addTaskInput'>
        <Input
          type='text'
          placeholder='Add a Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Col>
    </Row>
  );
};

export default AddTodoComponent;
