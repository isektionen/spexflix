import React from 'react';

import { Icon } from '../../components';

import styles from './button.module.scss';

export interface Props {
  action?: VoidFunction;
  grower?: boolean;
  text: string;
  icon?: string;
}

const Button = ({ action, grower = false, text, icon }: Props) => {
  const className = grower ? styles.buttonGrower : styles.button;

  const iconComponent = icon ? <Icon name={icon} size={20} /> : null;

  return (
    <div className={className} onClick={action}>
      {iconComponent}
      {text}
    </div>
  );
};

export default Button;
