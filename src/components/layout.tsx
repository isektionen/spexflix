import Header from './header';
import Footer from './footer';
import type { ProductionSeries } from '../../schema/productionSeries';

import css from './layout.module.scss';

export interface LayoutProps {
  title: string;
  copyrightFromYear: string | number;
  publisher: string;
  productionSeries: ProductionSeries[];
  children: React.ReactNode;
}

const Layout = ({
  title = 'YouFlix',
  copyrightFromYear,
  publisher,
  productionSeries,
  children,
}: LayoutProps): JSX.Element => (
  <div className={css.layout}>
    <Header title={title} productionSeries={productionSeries} />

    <div className="container">
      <main>{children}</main>
    </div>

    <Footer
      title={title}
      copyrightFromYear={copyrightFromYear}
      publisher={publisher}
    />
  </div>
);

export default Layout;
