import { Row, Col, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './AddTodoStyle.css';
import { useTodoContextValue } from '../../context/TodoContext';
import { useSelectedMenuValue } from '../../context/SelectedMenuContext';
import { IMPORTANT } from '../../constant';

const AddTodoComponent = () => {
  const { addToList } = useTodoContextValue();
  const { selectedMenu } = useSelectedMenuValue();
  const [task, setTask] = useState('');
  const added = (task) => {
    addToList({
      uid: Date.now(),
      task,
      isImportant: selectedMenu['title'] === IMPORTANT ? true : false,
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
          <PlusOutlined style={{ fontSize: '18px' }} />
        ) : (
          task && (
            <Radio
              style={{ margin: 0, padding: 0 }}
              onClick={() => added(task)}
            />
          )
        )}
      </Col>
      <Col className='addTaskInput'>
        <Input
          type='text'
          placeholder='Add a Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onPressEnter={() => added(task)}
          bordered={false}
        />
      </Col>
    </Row>
  );
};

export default AddTodoComponent;
