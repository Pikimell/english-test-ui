import style from './ProgressBar.module.css';
import clsx from 'clsx';
const ProgressBar = ({ max, current }) => {
  const elements = new Array(max).fill(0);

  return (
    <div className={style['progress-bar']}>
      {elements.map((el, i) => {
        const classes = clsx(style['progress-item'], {
          [style.fill]: i <= current,
        });
        return <li key={i} className={classes}></li>;
      })}
    </div>
  );
};

export default ProgressBar;
