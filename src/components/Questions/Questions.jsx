import style from './Questions.module.css';
import { useSelector } from 'react-redux';
import { selectPhrases } from '../../redux/phrase/selectors.js';
import QuestionItem from './QuestionItem/QuestionItem.jsx';
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Button from '../CustomElements/Button/Button.jsx';

const Questions = () => {
  const phrases = useSelector(selectPhrases);
  const [index, setIndex] = useState(0);
  const elem = phrases[index];

  const isFirstElem = index === 0;
  const isLastElem = index === phrases.length - 1;

  const handleNextQuestion = () => {
    setIndex(index + 1);
  };
  const handlePreviousQuestion = () => {
    setIndex(index - 1);
  };

  return (
    <div className={style['question-container']}>
      <div></div>

      <QuestionItem phrase={elem} />

      <div className={style.buttons}>
        <Button disabled={isFirstElem} onClick={handlePreviousQuestion}>
          <ArrowLeftOutlined style={{ fontSize: '35px' }} />
        </Button>
        <Button primary>Check Answer</Button>
        <Button disabled={isLastElem} onClick={handleNextQuestion}>
          <ArrowRightOutlined style={{ fontSize: '35px' }} />
        </Button>
      </div>
    </div>
  );
};

export default Questions;
