import React, { useEffect, useRef, useState } from 'react';
import {
  BellOutlined,
  CalendarFilled,
  CheckCircleFilled,
  CloseOutlined,
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
import SelectOptionComponent from '../SelectOptionComponent/SelectOptionComponent';

const TodoEditDetailComponent = () => {
  const {
    selectedTodo,
    setSelectedTodo,
    deleteTodo,
    taskCompleted,
    toggleImportant,
    updateTodo,
  } = useTodoContextValue();

  const [showRemindMeOption, setShowRemindMeOption] = useState(false);
  const [showAddDueOption, setShowAddDueOption] = useState(false);
  const [showRepeatOption, setShowRepeatOption] = useState(false);

  const [stepText, setStepText] = useState('');

  const addStep = () => {
    const step = { id: Date.now(), stepText, isChecked: false };
    selectedTodo.steps = [step, ...selectedTodo.steps];
    setSelectedTodo({ ...selectedTodo });
    updateTodo(selectedTodo);
    setStepText('');
  };

  const repeatOptionRef = useRef(null);
  const addDueOptionRef = useRef(null);
  const remindMeOptionRef = useRef(null);

  const getFormattedDate = (secs) => `${moment(secs).fromNow()}`;

  const { hideSider, setHideSider } = useLayoutValue();

  const confirmDelete = () => {
    if (window.confirm(`"${selectedTodo.task}" will be deleted permanantly`)) {
      deleteTodo(selectedTodo.uid);
      setSelectedTodo(null);
      setHideSider(true);
    }
  };

  const updateSelectedTodo = (option, valueObj) => {
    if (option === 'MYDAY') {
      if (selectedTodo.isMyDay) {
        const hours_diff = moment
          .duration(moment(new Date()).diff(moment(selectedTodo.isMyDay)))
          .asHours();
        if (Math.floor(hours_diff) < 24) {
          selectedTodo.isMyDay = null;
        } else {
          selectedTodo.isMyDay = Date.now();
        }
      } else {
        selectedTodo.isMyDay = Date.now();
      }
    } else if ('RENAME_TASK' === option) {
      selectedTodo.task = valueObj.new_task;
    } else if ('ADD_NOTE' === option) {
      selectedTodo.note = valueObj.note;
    }
    setSelectedTodo({ ...selectedTodo });
    updateTodo(selectedTodo);
  };

  const checkStep = (id) => {
    const new_steps = selectedTodo.steps.map((stp) => {
      if (stp.id === id) {
        stp.isChecked = !stp.isChecked;
      }
      return stp;
    });
    selectedTodo.steps = new_steps;
    setSelectedTodo({ ...selectedTodo });
    updateTodo(selectedTodo);
  };

  const deleteStep = (id) => {
    const new_steps = selectedTodo.steps.filter((stp) => stp.id !== id);
    selectedTodo.steps = new_steps;
    setSelectedTodo({ ...selectedTodo });
    updateTodo(selectedTodo);
  };

  const updateStepText = (id, text) => {
    const new_steps = selectedTodo.steps.map((stp) => {
      if (stp.id === id) {
        stp.stepText = text;
      }
      return stp;
    });
    selectedTodo.steps = new_steps;
    setSelectedTodo({ ...selectedTodo });
    updateTodo(selectedTodo);
  };
  const resetLocalState = () => {
    setShowAddDueOption(false);
    setShowRemindMeOption(false);
    setShowRepeatOption(false);
    setStepText('');
  };

  const handleClick = (e) => {
    if (
      showRepeatOption &&
      repeatOptionRef &&
      repeatOptionRef.current.contains(e.target)
    ) {
      console.log('clicked Inside 1');
    } else if (
      showRemindMeOption &&
      remindMeOptionRef &&
      remindMeOptionRef.current.contains(e.target)
    ) {
      console.log('clicked Inside 2');
    } else if (
      showAddDueOption &&
      addDueOptionRef &&
      addDueOptionRef.current.contains(e.target)
    ) {
      console.log('clicked Inside 3');
    } else {
      setShowRepeatOption(false);
      setShowAddDueOption(false);
      setShowRemindMeOption(false);
    }
  };

  useEffect(() => {
    if (showRepeatOption || showRemindMeOption || showAddDueOption) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [showRepeatOption, showRemindMeOption, showAddDueOption]);

  useEffect(() => {
    return () => {
      resetLocalState();
      document.removeEventListener('mousedown', handleClick);
    };
  }, [hideSider]);

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
        <Input
          type='text'
          bordered={false}
          value={selectedTodo?.task}
          onChange={(e) =>
            updateSelectedTodo('RENAME_TASK', { new_task: e.target.value })
          }
        />
        {selectedTodo?.isImportant ? (
          <StarFilled onClick={() => toggleImportant(selectedTodo?.uid)} />
        ) : (
          <StarOutlined onClick={() => toggleImportant(selectedTodo?.uid)} />
        )}
      </div>
      <div className='editMain'>
        {selectedTodo?.steps.length > 0 &&
          selectedTodo.steps.map((step) => (
            <Input
              key={step.id}
              value={step.stepText}
              className={step.isChecked ? 'strikeInput' : ''}
              bordered={false}
              onChange={(e) => updateStepText(step.id, e.target.value)}
              prefix={
                step.isChecked ? (
                  <CheckCircleFilled onClick={() => checkStep(step.id)} />
                ) : (
                  <Radio onClick={() => checkStep(step.id)} />
                )
              }
              suffix={<CloseOutlined onClick={() => deleteStep(step.id)} />}
            />
          ))}

        <div className='stepInput'>
          <Input
            type='text'
            value={stepText}
            onChange={(e) => setStepText(e.target.value)}
            name='stepInput'
            bordered={false}
            placeholder={
              selectedTodo?.steps.length > 0 ? 'Next Step' : 'Add Step'
            }
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
        <div
          className={
            selectedTodo?.isMyDay ? 'editMenu edit_active' : 'editMenu'
          }
          onClick={() => updateSelectedTodo('MYDAY')}
        >
          <DribbbleOutlined />
          <span>
            {selectedTodo?.isMyDay ? 'Added to My Day' : 'Add to My Day'}
          </span>
        </div>
        <hr />
        <div ref={remindMeOptionRef}>
          {showRemindMeOption && <SelectOptionComponent />}
        </div>
        <div
          className='editMenu'
          onClick={() => {
            setShowRemindMeOption(true);
          }}
        >
          <BellOutlined />
          <span>Remind Me</span>
        </div>
        <div ref={addDueOptionRef}>
          {showAddDueOption && <SelectOptionComponent />}
        </div>
        <div
          className='editMenu'
          onClick={() => {
            setShowAddDueOption(true);
          }}
        >
          <CalendarFilled />
          <span>Add Due Date</span>
        </div>
        <div ref={repeatOptionRef}>
          {showRepeatOption && <SelectOptionComponent />}
        </div>
        <div
          className='editMenu'
          onClick={() => {
            setShowRepeatOption(true);
          }}
        >
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
          value={selectedTodo?.note}
          onChange={(e) =>
            updateSelectedTodo('ADD_NOTE', { note: e.target.value })
          }
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
