import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './navigation.module.scss';

export interface NavigationProps {
  categories: any[];
}

const Navigation = ({ categories }: NavigationProps) => {
  const router = useRouter();
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link
            href="/"
            className={router.pathname === '/' ? css.navLinkActive : null}
            onClick={() =>
              window.analytics.track('Top menu link pressed', {
                href: '/',
              })
            }>
            
              Hem
            
          </Link>
        </li>
        {categories.map((c) => (
          <li className={css.navItem} key={c.slug}>
            <Link
              href={`/category/${c.slug}`}
              className={
                router.query?.slug === c.slug ? css.navLinkActive : null
              }
              onClick={() =>
                window.analytics.track('Top menu link pressed', {
                  href: `/category/${c.slug}`,
                })
              }>

              {c.name}

            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
