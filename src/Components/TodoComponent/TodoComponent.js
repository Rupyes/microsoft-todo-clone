import { CheckCircleFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import React from 'react';
import { useLayoutValue } from '../../context/LayoutContext';
import { useTodoContextValue } from '../../context/TodoContext';
import './TodoStyle.css';

const TodoComponent = ({ todo, active }) => {
  const { setHideSider } = useLayoutValue();
  const {
    taskCompleted,
    toggleImportant,
    setSelectedTodo,
  } = useTodoContextValue();
  return (
    <Row className={active ? 'todoRow active' : 'todoRow'}>
      <Col className='checkCol'>
        {!todo.isChecked ? (
          <Radio
            onClick={() => taskCompleted(todo.uid)}
            style={{ padding: 0, margin: 0 }}
          />
        ) : (
          <CheckCircleFilled
            onClick={() => taskCompleted(todo.uid)}
            className='checkIcon'
            color='green'
            checked
          />
        )}
      </Col>
      <Col
        flex='auto'
        onClick={() => {
          setSelectedTodo(todo);
          setHideSider(false);
        }}
      >
        {!todo.isChecked ? (
          todo.task
        ) : (
          <strike style={{ color: 'gray' }}>{todo.task}</strike>
        )}
      </Col>
      <Col className='colImp'>
        <span
          onClick={() => toggleImportant(todo.uid)}
          style={{ cursor: 'pointer' }}
        >
          {todo.isImportant ? (
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
