import style from './SearchBar.module.css';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={style['search-bar']}>
      <SearchOutlined className={style.icon} />
      <input
        type="text"
        className={style.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
