import Link from 'next/link'
import { useRouter } from 'next/router'

import css from './navigation.module.scss'

export interface NavigationProps {
  categories: string[]
}

const Navigation = ({ categories }: NavigationProps) => {
  const router = useRouter()
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link href="/">
            <a className={router.pathname === '/' ? css.navLinkActive : null}>
              Hem
            </a>
          </Link>
        </li>
        {categories.map((c) => (
          <li className={css.navItem} key={c}>
            <Link href={`/category/${c}`}>
              <a
                className={router.query?.name === c ? css.navLinkActive : null}
              >
                {readable(c)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navigation

function readable(v: string): string {
  v = v.replace('_', ' ')
  v = v.slice(0, 1).toUpperCase() + v.slice(1)
  return v
}
