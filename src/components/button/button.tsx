import React from 'react';

import styles from './button.module.scss';

export interface Props {
  action: VoidFunction;
  grower?: boolean;
  text: string;
}

const Button = ({ action, grower = false, text }: Props) => {
  const className = grower ? styles.buttonGrower : styles.button;

  return (
    <div className={className} onClick={action}>
      {text}
    </div>
  );
};

export default Button;
