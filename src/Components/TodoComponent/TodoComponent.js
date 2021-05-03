import { CheckCircleFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import React from 'react';
import { useTodoContextValue } from '../../context/TodoContext';
import './TodoStyle.css';

const TodoComponent = ({ uid, task, isImportant, isChecked }) => {
  const { taskCompleted, toggleImportant } = useTodoContextValue();
  return (
    <Row className='todoRow'>
      <Col className='checkCol'>
        {!isChecked ? (
          <Radio
            onClick={() => taskCompleted(uid)}
            style={{ padding: 0, margin: 0 }}
          />
        ) : (
          <CheckCircleFilled
            onClick={() => taskCompleted(uid)}
            className='checkIcon'
            color='green'
            checked
          />
        )}
      </Col>
      <Col flex='auto'>
        {!isChecked ? task : <strike style={{ color: 'gray' }}>{task}</strike>}
      </Col>
      <Col className='colImp'>
        <span
          onClick={() => toggleImportant(uid)}
          style={{ cursor: 'pointer' }}
        >
          {isImportant ? (
            <StarFilled className='starIcon' color='green' />
          ) : (
            <StarOutlined className='starIcon' />
          )}
        </span>
      </Col>
    </Row>
  );
};

export default TodoComponent;
