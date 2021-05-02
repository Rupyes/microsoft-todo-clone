import { Divider } from 'antd';
import React from 'react';
import { ASSIGNTOYOU, IMPORTANT, MYDAY, PLANNED, TASKS } from '../constant';
import { useTodoContextValue } from '../TodoContext';
import SideBarMenuComponent from './SideBarMenuComponent';

const SideBarMenuListComponent = () => {
  const { todoList, todoImpList } = useTodoContextValue();
  return (
    <div className='sidebarMenu'>
      <ul>
        <li>
          <SideBarMenuComponent name={MYDAY} list={todoImpList} />
        </li>
        <li>
          <SideBarMenuComponent name={IMPORTANT} list={todoImpList} />
        </li>
        <li>
          <SideBarMenuComponent name={PLANNED} list={todoImpList} />
        </li>
        <li>
          <SideBarMenuComponent name={ASSIGNTOYOU} list={todoImpList} />
        </li>
        <li>
          <SideBarMenuComponent name={TASKS} list={todoImpList} />
        </li>
      </ul>
      <Divider style={{ background: '#000' }} />
    </div>
  );
};

export default SideBarMenuListComponent;
