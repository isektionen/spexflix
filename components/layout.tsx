import Header from './header'
import Footer from './footer'

import css from './layout.module.scss'

export interface LayoutProps {
  title: string
  copyrightFromYear: string | number
  publisher: string
  categories: any[] | undefined
  children: React.ReactNode
}

const Layout = ({
  title = 'YouFlix',
  copyrightFromYear,
  publisher,
  categories,
  children,
}: LayoutProps): JSX.Element => (
  <div className={css.layout}>
    <Header title={title} categories={categories} />

    <div className="container">
      <main>{children}</main>
    </div>

    <Footer copyrightFromYear={copyrightFromYear} publisher={publisher} />
  </div>
)

export default Layout
