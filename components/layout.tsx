import Header from './header'
import Footer from './footer'

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
  <>
    <Header title={title} categories={categories} />

    <div className="container">
      <main>{children}</main>
    </div>

    <Footer copyrightFromYear={copyrightFromYear} publisher={publisher} />
  </>
)

export default Layout
