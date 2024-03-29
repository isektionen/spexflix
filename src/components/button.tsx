import React from 'react';
import clsx from 'clsx';

import css from './button.module.scss';

export interface ButtonProps {
  type: 'primary' | 'secondary';
  shape?: 'round';
  icon?: React.ReactNode;
  text?: string;
  action?(): any;
}

const Button = ({ type, shape, icon, text, action }: ButtonProps) => (
  <button
    className={clsx(
      css.button,
      type === 'primary' && css.primary,
      type === 'secondary' && css.secondary,
      shape === 'round' && css.round
    )}
    onClick={action}
  >
    {icon}
    {text}
  </button>
);

export default Button;
