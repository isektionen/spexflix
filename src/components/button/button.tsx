import React from 'react';

import styles from './button.module.scss';

export interface Props {
  grower?: boolean;
  text: string;
}

const Button = ({ grower = false, text }: Props) => {
  const className = grower ? styles.buttonGrower : styles.button;

  return <div className={className}>{text}</div>;
};

export default Button;
