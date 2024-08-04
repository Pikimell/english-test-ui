import style from './Questions.module.css';
import { useSelector } from 'react-redux';
import { selectPhrases } from '../../redux/phrase/selectors.js';
import QuestionItem from './QuestionItem/QuestionItem.jsx';
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Button from '../CustomElements/Button/Button.jsx';
import ProgressBar from '../CustomElements/ProgressBar/ProgressBar';
import { useEffect } from 'react';

const Questions = () => {
  const phrases = useSelector(selectPhrases);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const question = phrases[index];
  const isFirstElem = index === 0;
  const isLastElem = index === phrases.length - 1;

  const handleNextQuestion = () => {
    setAnswer('');
    setIndex(index + 1);
  };
  const handlePreviousQuestion = () => {
    setAnswer('');
    setIndex(index - 1);
  };

  const handleAnswer = () => {
    const isValid = question.rus === answer;
    setAnswer('');
  };

  useEffect(() => {
    setIndex(0);
  }, [phrases]);
  useEffect(() => {
    setShowAnswer(false);
  }, [index]);

  return (
    <div className={style['question-container']}>
      <ProgressBar max={phrases.length} current={index} />

      <QuestionItem
        index={index}
        setAnswer={setAnswer}
        showAnswer={showAnswer}
      />

      <div className={style.buttons}>
        <Button disabled={isFirstElem} onClick={handlePreviousQuestion}>
          <ArrowLeftOutlined style={{ fontSize: '35px' }} />
        </Button>
        <Button primary onClick={handleAnswer}>
          Answer
        </Button>
        <Button disabled={isLastElem} onClick={handleNextQuestion}>
          <ArrowRightOutlined style={{ fontSize: '35px' }} />
        </Button>
      </div>
    </div>
  );
};

export default Questions;
