import { useSelector } from 'react-redux';
import style from './QuestionItem.module.css';
import { selectPhrases } from '../../../redux/phrase/selectors.js';
import { getQuestion } from './questionHelper.js';
import { Radio } from 'antd';
import { useEffect, useState } from 'react';

const QuestionItem = ({ index, setAnswer, showAnswer }) => {
  const questions = useSelector(selectPhrases);
  const [question, setQuestion] = useState({});

  const loadData = () => {
    const question = getQuestion(index, questions);
    setQuestion(question);
  };

  const handleChangeAnswer = e => {
    setAnswer(e.target.value);
  };

  useEffect(loadData, [index, questions]);

  if (!question) return <></>;
  return (
    <div className={style['item']}>
      <h3 className={style['title']}>{question.eng}</h3>
      <Radio.Group
        className={style['radio-group']}
        onChange={handleChangeAnswer}
      >
        <div className={style['variant']}>
          <Radio className={style['option']} value={question.rus1}>
            {question.rus1}
          </Radio>
        </div>
        <div className={style['variant']}>
          <Radio className={style['option']} value={question.rus2}>
            {question.rus2}
          </Radio>
        </div>
        <div className={style['variant']}>
          <Radio className={style['option']} value={question.rus3}>
            {question.rus3}
          </Radio>
        </div>
      </Radio.Group>
    </div>
  );
};

export default QuestionItem;
