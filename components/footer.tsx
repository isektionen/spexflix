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
      <div>
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
      </div>
      <div>
        <a href={`https://vercel.com?utm_source=isektionen&utm_campaign=oss`}>
          <img src="/powered-by-vercel.svg" alt="Powered by Vercel" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
