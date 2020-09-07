import { useRouter } from 'next/router'
import Link from 'next/link'
import Icon from '../components/icon'

import css from './player.module.scss'

export const Player = (): JSX.Element => {
  const router = useRouter()
  const id = router.query.id
  const src =
    'https://www.youtube.com/embed/' + id + '?autoplay=1&modestbranding=1&rel=0'

  return (
    <div className={css.wrapper}>
      <iframe
        width="100%"
        height="100%"
        allowFullScreen={true}
        src={src}
      ></iframe>
      <div className={css.overlay}>
        <Link href="/">
          <a className={css.backArrow}>
            <Icon.Arrow direction="left" fill="#fff" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Player
