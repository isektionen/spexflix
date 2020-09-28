import Head from 'next/head'

import Logotype from './logotype'
import Navigation from './navigation'

import css from './header.module.scss'

export interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={css.header}>
      <Logotype text={title} />
      <Navigation />
    </header>
  </>
)

export default Header
