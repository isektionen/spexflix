import css from './footer.module.scss'

export interface FooterProps {
  publisher: string
  copyrightFromYear: number
}

const Footer = ({ publisher, copyrightFromYear }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  const copyrightYears =
    currentYear === copyrightFromYear
      ? copyrightFromYear
      : copyrightFromYear + '-' + currentYear

  return (
    <footer className={css.footer}>
      <p>
        YouFlix is made just for fun and is open sourced at{' '}
        <a
          href="https://github.com/vmorsell/react-youflix"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        &copy; {copyrightYears} {publisher}.
      </p>
    </footer>
  )
}

export default Footer
