import style from './CategoryList.module.css';
import { useState } from 'react';
import { Flex } from 'antd';
import SearchBar from '../CustomElements/SearchBar/SearchBar.jsx';
import CategoryItem from './CategoryItem/CategoryItem.jsx';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/selectors.js';

const CategoryList = () => {
  const items = useSelector(selectCategories);
  return (
    <Flex className={style.categories} vertical>
      <SearchBar />
      <ul className={style.list}>
        {items.map(el => {
          return <CategoryItem key={el._id} category={el} />;
        })}
      </ul>
    </Flex>
  );
};

export default CategoryList;
