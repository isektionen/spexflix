import Link from 'next/link'

import css from './navigation.module.scss'

const Navigation = () => (
  <nav className={css.navigation}>
    <ul className={css.navList}>
      <li className={css.navItem}>
        <Link href="/">
          <a className={css.navLinkActive}>Home</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
