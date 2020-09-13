import React from 'react'
import clsx from 'clsx'

import css from './button.module.scss'

export interface ButtonProps {
  type: 'primary' | 'secondary'
  icon?: React.ReactNode
  text: string
  action?(): any
}

const Button = ({ type, icon, text, action }: ButtonProps) => (
  <button
    className={clsx(
      css.button,
      type === 'primary' && css.primary,
      type === 'secondary' && css.secondary
    )}
    onClick={action}
  >
    {icon}
    {text}
  </button>
)

export default Button
