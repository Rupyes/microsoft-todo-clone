import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import './SearchTaskStyle.css';
import React, { useState } from 'react';
import { useTodoContextValue } from '../../TodoContext';

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
      <div class='inputIcon'>
        <SearchOutlined />
      </div>
      <div class='inputSearch'>
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
