import style from './CategoryList.module.css';
import { useState } from 'react';
import { Flex } from 'antd';
import SearchBar from '../CustomElements/SearchBar/SearchBar.jsx';
import CategoryItem from './CategoryItem/CategoryItem.jsx';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/selectors.js';

const CategoryList = () => {
  const [filter, setFilter] = useState('');
  const items = useSelector(selectCategories);
  const filtered = items.filter(el =>
    el.title.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <Flex className={style.categories} vertical>
      <SearchBar value={filter} onChange={e => setFilter(e.target.value)} />
      <ul className={style.list}>
        {filtered.map(el => {
          return <CategoryItem key={el._id} category={el} />;
        })}
      </ul>
    </Flex>
  );
};

export default CategoryList;
