import React, { useEffect, useState } from 'react';
import {
  BellOutlined,
  CalendarFilled,
  CheckCircleFilled,
  DeleteOutlined,
  DribbbleOutlined,
  PaperClipOutlined,
  PlusOutlined,
  RetweetOutlined,
  RightOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';
import { useTodoContextValue } from '../../context/TodoContext';
import './TodoEditDetailStyle.css';
import { useLayoutValue } from '../../context/LayoutContext';
import moment from 'moment';
import { Input, Radio } from 'antd';

const TodoEditDetailComponent = () => {
  const {
    selectedTodo,
    setSelectedTodo,
    deleteTodo,
    taskCompleted,
    toggleImportant,
    updateTodo,
  } = useTodoContextValue();

  const [steps, setSteps] = useState(selectedTodo ? selectedTodo.steps : []);
  const [stepText, setStepText] = useState('');

  const addStep = () => {
    const step = { id: Date.now(), stepText, isChecked: false };
    setSteps([step, ...steps]);
    setStepText('');
  };

  const getFormattedDate = (secs) => `${moment(secs).fromNow()}`;

  const { setHideSider } = useLayoutValue();

  const confirmDelete = () => {
    if (window.confirm(`"${selectedTodo.task}" will be deleted permanantly`)) {
      deleteTodo(selectedTodo.uid);
      setSelectedTodo(null);
      setHideSider(true);
    }
  };

  // useEffect(() => {
  //   if (selectedTodo) {
  //     selectedTodo.steps = steps;
  // updateTodo(selectedTodo);
  //   }
  //   return () => {
  //     setSteps([]);
  //   };
  // }, [selectedTodo]);

  return (
    <div className='editWrapper'>
      <div className='titleInputWrapper'>
        {selectedTodo?.isChecked ? (
          <CheckCircleFilled
            style={{ fontSize: '18px' }}
            onClick={() => taskCompleted(selectedTodo?.uid)}
          />
        ) : (
          <Radio onClick={() => taskCompleted(selectedTodo?.uid)} />
        )}
        <Input type='text' bordered={false} value={selectedTodo?.task} />
        {selectedTodo?.isImportant ? (
          <StarFilled onClick={() => toggleImportant(selectedTodo?.uid)} />
        ) : (
          <StarOutlined onClick={() => toggleImportant(selectedTodo?.uid)} />
        )}
      </div>
      <div className='editMain'>
        {/* {selectedTodo?.steps.length > 0 &&
          selectedTodo.steps.map((step) => <li>{step.stepText}</li>)} */}
        {steps.length > 0 &&
          steps.map((step) => <li key={step.id}>{step.stepText}</li>)}
        <div className='stepInput'>
          <Input
            type='text'
            value={stepText}
            onChange={(e) => setStepText(e.target.value)}
            name='stepInput'
            bordered={false}
            placeholder='Add Step'
            onPressEnter={addStep}
            prefix={
              <PlusOutlined
                style={{ marginRight: '5px', color: 'blue' }}
                onClick={addStep}
              />
            }
          />
        </div>
        <hr />
        <div className='editMenu'>
          <DribbbleOutlined />
          <span>Add to My Day</span>
        </div>
        <hr />
        <div className='editMenu'>
          <BellOutlined />
          <span>Remind Me</span>
        </div>
        <div className='editMenu'>
          <CalendarFilled />
          <span>Add Due Date</span>
        </div>
        <div className='editMenu'>
          <RetweetOutlined />
          <span>Repeat</span>
        </div>
        <hr />
        <div className='editMenu'>
          <PaperClipOutlined />
          <span>Add File</span>
        </div>
        <hr />

        <Input.TextArea
          className='addNote'
          placeholder='Add Note'
          bordered={false}
          autoSize={true}
        />

        <hr />
      </div>
      <div className='editFooter'>
        <RightOutlined
          className='footIcon'
          onClick={() => {
            setSelectedTodo(null);
            setHideSider(true);
          }}
        />
        <p className='info'>
          {selectedTodo?.isChecked
            ? `Completed ${getFormattedDate(selectedTodo.completedOn)}`
            : `Created ${getFormattedDate(selectedTodo?.createdOn)}`}
        </p>
        <DeleteOutlined className='footIcon' onClick={confirmDelete} />
      </div>
    </div>
  );
};

export default TodoEditDetailComponent;
