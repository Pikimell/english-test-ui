import style from './QuestionItem.module.css';
const QuestionItem = ({ phrase = {} }) => {
  return <div className={style['swiper-slide']}>{phrase.eng}</div>;
};

export default QuestionItem;
