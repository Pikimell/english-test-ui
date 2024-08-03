import style from './CategoryItem.module.css';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPhrases } from '../../../redux/phrase/operations.js';

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { _id, title } = category;
  const categoryId = searchParams.get('category');

  const classes = clsx(style.item, {
    [style.active]: categoryId === _id,
  });

  const handleClick = () => {
    setSearchParams({ category: _id });
    dispatch(fetchPhrases(_id));
  };
  return (
    <li className={classes} onClick={handleClick}>
      <p className={style.title}>{title}</p>
    </li>
  );
};

export default CategoryItem;
