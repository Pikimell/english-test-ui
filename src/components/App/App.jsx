import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryList from '../CategoryList/CategoryList';
import Questions from '../Questions/Questions';
import style from './App.module.css';
import { fetchCategories } from '../../redux/categories/operations.js';

const App = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className={style.container}>
      <CategoryList />
      <Questions />
    </div>
  );
};

export default App;
