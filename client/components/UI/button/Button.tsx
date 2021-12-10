import React from 'react';
import css from './button.module.css';

export interface IPropsButton {
  text: string;
}

export const Button: React.FC<IPropsButton> = ({ text }) => {
  return (
    <button className={css['button-64']} role="button">
      <span className="text">{text}</span>
    </button>
  );
};

Button.defaultProps = {
  text: 'No data',
};

export default Button;
