import { Divider } from 'antd';
import React from 'react';
import { ASSIGNTOYOU, IMPORTANT, MYDAY, PLANNED, TASKS } from '../constant';
import { useTodoContextValue } from '../TodoContext';
import SearchTaskComponent from './SearchTaskComponent/SearchTaskComponent';
import SideBarMenuComponent from './SideBarMenuComponent/SideBarMenuComponent';

const SideBarMenuListComponent = () => {
  const { todoList, todoImpList, todoTaskList } = useTodoContextValue();
  return (
    <div className='sidebarMenu'>
      <SearchTaskComponent />
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
          <SideBarMenuComponent name={TASKS} list={todoTaskList} />
        </li>
      </ul>
      <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <Divider style={{ background: '#000' }} />
      </div>
    </div>
  );
};

export default SideBarMenuListComponent;
