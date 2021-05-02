import {
  CalendarOutlined,
  CheckSquareOutlined,
  DribbbleOutlined,
  StarOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { ASSIGNTOYOU, IMPORTANT, MYDAY, PLANNED, TASKS } from '../../constant';
import './SideBarMenuStyle.css';

const SideBarMenuComponent = ({ name, list }) => {
  return (
    <div className='menu'>
      {name === IMPORTANT ? (
        <StarOutlined className='menu_icon' />
      ) : name === ASSIGNTOYOU ? (
        <UserOutlined className='menu_icon' />
      ) : name === TASKS ? (
        <CheckSquareOutlined className='menu_icon' />
      ) : name === PLANNED ? (
        <CalendarOutlined className='menu_icon' />
      ) : name === MYDAY ? (
        <DribbbleOutlined className='menu_icon' />
      ) : (
        <UnorderedListOutlined className='menu_icon' />
      )}
      <span className='menu_label'>{name}</span>
      <span className='task_count'>
        {list.length > 0 && <span>{list.length}</span>}
      </span>
    </div>
  );
};

export default SideBarMenuComponent;
