import { Divider } from 'antd';
import React from 'react';
import {
  DEFAULT_MENUS,
  IMPORTANT,
  MYDAY,
  PLANNED,
  TASKS,
} from '../../constant';
import { useTodoContextValue } from '../../context/TodoContext';
import { useSelectedMenuValue } from '../../context/SelectedMenuContext';
import SearchTaskComponent from '../SearchTaskComponent/SearchTaskComponent';
import SideBarMenuComponent from '../SideBarMenuComponent/SideBarMenuComponent';
import './SideBarMenuListStyle.css';

const SideBarMenuListComponent = () => {
  const { defaultMenuList } = useTodoContextValue();
  const { selectedMenu, setSelectedMenu } = useSelectedMenuValue();
  return (
    <div className='sidebarMenu'>
      <SearchTaskComponent />
      <ul>
        {DEFAULT_MENUS.map((menu) => (
          <li
            key={menu.id}
            onClick={() => setSelectedMenu(menu)}
            className={selectedMenu.id === menu.id ? 'menuSelected' : ''}
          >
            <SideBarMenuComponent
              name={menu.title}
              list={
                menu.title === IMPORTANT
                  ? defaultMenuList.todoImpList
                  : menu.title === TASKS
                  ? defaultMenuList.todoTaskList
                  : menu.title === MYDAY
                  ? defaultMenuList.todoMyDayList
                  : menu.title === PLANNED
                  ? defaultMenuList.todoPlannedList
                  : defaultMenuList.todoAssignedList
              }
            />
          </li>
        ))}
      </ul>
      <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <Divider style={{ background: '#000' }} />
      </div>
    </div>
  );
};

export default SideBarMenuListComponent;
