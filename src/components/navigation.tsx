import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductionSeries } from '../../schema/productionSeries';

import css from './navigation.module.scss';

export interface NavigationProps {
  productionSeries: ProductionSeries[];
}

const Navigation = ({ productionSeries }: NavigationProps) => {
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
            }
          >
            Hem
          </Link>
        </li>
        {productionSeries.map((c: ProductionSeries) => (
          <li className={css.navItem} key={c.slug.current}>
            <Link
              href={`/category/${c.slug.current}`}
              className={
                router.query?.slug === c.slug.current ? css.navLinkActive : null
              }
              onClick={() =>
                window.analytics.track('Top menu link pressed', {
                  href: `/category/${c.slug.current}`,
                })
              }
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
