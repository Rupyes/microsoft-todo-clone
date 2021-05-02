import { CheckCircleFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import { Col, Radio, Row } from 'antd';
import React from 'react';

const TodoComponet = ({
  uid,
  task,
  isImportant,
  isChecked,
  taskCompleted,
  toggleImportant,
}) => {
  return (
    <Row
      style={{
        background: '#fff',
        borderRadius: '5px',
        color: '#000',
        paddingTop: '2px',
        paddingBottom: '2px',
        marginBottom: '1px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Col
        flex='none'
        style={{
          padding: '10px',
        }}
      >
        {!isChecked ? (
          <Radio
            onClick={() => taskCompleted(uid)}
            style={{ padding: 0, margin: 0 }}
          />
        ) : (
          <CheckCircleFilled
            onClick={() => taskCompleted(uid)}
            style={{ padding: 0, margin: 0, fontSize: '18px', color: 'green' }}
            checked
          />
        )}
      </Col>
      <Col flex='auto'>
        {!isChecked ? task : <strike style={{ color: 'gray' }}>{task}</strike>}
      </Col>
      <Col
        flex='none'
        style={{
          padding: '10px',
        }}
      >
        <span
          onClick={() => toggleImportant(uid)}
          style={{ cursor: 'pointer' }}
        >
          {isImportant ? (
            <StarFilled style={{ color: 'green', fontSize: '18px' }} />
          ) : (
            <StarOutlined style={{ fontSize: '18px' }} />
          )}
        </span>
      </Col>
    </Row>
  );
};

export default TodoComponet;
