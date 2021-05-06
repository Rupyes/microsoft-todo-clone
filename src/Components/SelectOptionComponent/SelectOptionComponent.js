import { CalendarOutlined, RedoOutlined } from '@ant-design/icons';
import React from 'react';
import './SelectOptionStyle.css';

const SelectOptionComponent = () => {
  return (
    <ul className='select_menu'>
      <li>
        <button>
          <RedoOutlined className='icon' />
          <span className='btn_main'>Later Today</span>
          <span className='btn_datetime'>Mon 9:00 PM</span>
        </button>
      </li>
      <li>
        <button>
          <RedoOutlined className='icon' />
          <span className='btn_main'>Tomorrow</span>
          <span className='btn_datetime'>Wed 9:00 PM</span>
        </button>
      </li>
      <li>
        <button>
          <RedoOutlined className='icon' />
          <span className='btn_main'>Next Week</span>
          <span className='btn_datetime'>Thu 9:00 PM</span>
        </button>
      </li>
      <hr />
      <li>
        <button>
          <CalendarOutlined className='icon' />
          <span className='btn_main'>Pick a Date &amp; Time</span>
        </button>
      </li>
    </ul>
  );
};

export default SelectOptionComponent;
