import style from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, onClick, primary, disabled }) => {
  const classes = clsx(style.button, {
    [style.primary]: primary,
    [style.disabled]: disabled,
  });
  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
