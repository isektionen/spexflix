import { useState } from 'react'
import Item from './item'
import elementWidth from '../../helpers/elementWidth'
import Icon from '../icon'

import css from './playlistScroller.module.scss'

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

export interface PlaylistScrollerProps {
  playlist: YouTube.Playlist
  items: YouTube.PlaylistItem[]
}

const PlaylistScroller = ({ playlist, items }: PlaylistScrollerProps) => {
  const { width, ref } = elementWidth()

  const layout = {
    sidePadding: 55,
    itemSpacing: 10,
  }

  const padding = 2 * layout.sidePadding
  const visibleItems = Math.floor((width - padding) / 300)
  const spacing = (visibleItems - 1) * layout.itemSpacing
  const itemWidth = (width - padding - spacing) / visibleItems

  const [itemIndex, setItemIndex] = useState(0)
  const hasPrev = itemIndex > 0
  const hasNext = itemIndex + visibleItems < items.length

  const handlePrev = () => {
    const tryIndex = itemIndex - visibleItems
    const lower = 0
    setItemIndex(tryIndex >= lower ? tryIndex : lower)
  }
  const handleNext = () => {
    const newIndex = itemIndex + visibleItems
    const upper = items.length - visibleItems
    setItemIndex(newIndex <= upper ? newIndex : upper)
  }

  const offset = -itemIndex * (itemWidth + layout.itemSpacing)

  return (
    <div ref={ref} className={css.section}>
      <h2 className={css.header}>{playlist.snippet.title}</h2>
      <div className={css.wrapper}>
        <ul
          className={css.scroller}
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
        >
          {items.map((item) => (
            <Item key={item.id} item={item} width={itemWidth} />
          ))}
        </ul>
        <Control type="prev" handle={handlePrev} enabled={hasPrev} />
        <Control type="next" handle={handleNext} enabled={hasNext} />
      </div>
    </div>
  )
}

export default PlaylistScroller
