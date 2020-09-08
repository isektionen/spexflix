import { useState, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'

import Icon from '../components/icon'
import css from './playlistScroller.module.scss'

export interface PlaylistScrollerProps {
  playlist: YouTube.Playlist
  items: YouTube.PlaylistItem[]
}

const PlaylistScroller = ({ playlist, items }: PlaylistScrollerProps) => {
  const [width, setWidth] = useState(0)
  const sectionRef = useRef(null)
  useLayoutEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setWidth(sectionRef.current.clientWidth)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [sectionRef.current])

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
    <div ref={sectionRef} className={css.section}>
      <h2 className={css.header}>{playlist.snippet.title}</h2>
      <div className={css.wrapper}>
        <ul
          className={css.scroller}
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
        >
          {items.map((item) => (
            <PlaylistScroller.Item
              key={item.id}
              item={item}
              width={itemWidth}
            />
          ))}
        </ul>
        <PlaylistScroller.Control
          type="prev"
          handle={handlePrev}
          enabled={hasPrev}
        />
        <PlaylistScroller.Control
          type="next"
          handle={handleNext}
          enabled={hasNext}
        />
      </div>
    </div>
  )
}

export interface PlaylistScrollerItemProps {
  item: YouTube.PlaylistItem
  width: number
}

PlaylistScroller.Item = ({ item, width }: PlaylistScrollerItemProps) => (
  <li className={css.item} style={{ width: width }}>
    <Link
      key={item.id}
      href={{
        pathname: '/player',
        query: {
          id: item.snippet.resourceId.videoId,
        },
      }}
    >
      <a>
        <div
          className={css.video}
          style={{
            backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
          }}
        />
        <div className={css.details} style={{ display: 'none' }}>
          <p className={css.title}>{item.snippet.title}</p>
        </div>
      </a>
    </Link>
  </li>
)

export interface PlaylistScrollerControl {
  type: 'next' | 'prev'
  enabled: boolean
  handle(): void
}

PlaylistScroller.Control = ({
  type,
  enabled,
  handle,
}: PlaylistScrollerControl) => {
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

export default PlaylistScroller
