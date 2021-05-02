import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './SearchTaskStyle.css';
import React from 'react';
import { useTodoContextValue } from '../../context/TodoContext';

const SearchTaskComponent = () => {
  const { searchText, setSearchText, setIsSearching } = useTodoContextValue();

  const searchTodosAndSetText = (e) => {
    setSearchText(e.target.value);
    if (e.target.value !== '') {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  return (
    <div className='searchRow'>
      <div className='inputIcon'>
        <SearchOutlined />
      </div>
      <div className='inputSearch'>
        <Input
          type='text'
          value={searchText}
          onChange={searchTodosAndSetText}
          placeholder='Search'
          bordered={false}
          allowClear={true}
        />
      </div>
    </div>
  );
};

export default SearchTaskComponent;
