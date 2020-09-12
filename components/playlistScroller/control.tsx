import Icon from '../icon'

import css from './control.module.scss'

export interface PlaylistScrollerControl {
  type: 'next' | 'prev'
  enabled: boolean
  handle(): void
}

const Control = ({ type, enabled, handle }: PlaylistScrollerControl) => {
  const direction = type === 'prev' ? 'left' : 'right'
  const classes = [
    css.control,
    type === 'next' ? css.next : css.prev,
    enabled ? css.enabled : css.disabled,
  ].join(' ')

  return (
    <div className={classes} onClick={handle}>
      <div className={css.chevron}>
        <Icon.Chevron direction={direction} fill="#fff" size={48} />
      </div>
    </div>
  )
}

export default Control
