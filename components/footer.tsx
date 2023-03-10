import css from './footer.module.scss';

export interface FooterProps {
  title: string;
  publisher: string;
  copyrightFromYear: string | number;
}

const Footer = ({ title, publisher, copyrightFromYear }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightYears =
    currentYear === copyrightFromYear
      ? copyrightFromYear
      : copyrightFromYear + '-' + currentYear;

  return (
    <footer className={css.footer}>
      <div>
        <p>
          {title} is made just for fun and open sourced on{' '}
          <a
            href="https://github.com/isektionen/spexflix"
            rel="noreferrer"
            target="_blank"
            onClick={() =>
              window.analytics.track('Footer link pressed', {
                href: 'https://github.com/isektionen/spexflix',
              })
            }
          >
            GitHub
          </a>
          . Feel free to contribute to the project.
          <br />
          Based on{' '}
          <a
            href="https://github.com/vmorsell/react-youflix"
            rel="noreferrer"
            target="_blank"
            onClick={() =>
              window.analytics.track('Footer link pressed', {
                href: 'https://github.com/vmorsell/react-youflix',
              })
            }
          >
            YouFlix
          </a>{' '}
          by{' '}
          <a
            href="https://github.com/vmorsell"
            rel="noreferrer"
            target="_blank"
            onClick={() =>
              window.analytics.track('Footer link pressed', {
                href: 'https://github.com/vmorsell',
              })
            }
          >
            @vmorsell
          </a>
          .
        </p>
        <p>
          &copy; {copyrightYears} {publisher}.
        </p>
      </div>
      <div>
        <a
          href={`https://vercel.com?utm_source=isektionen&utm_campaign=oss`}
          onClick={() =>
            window.analytics.track('Footer link pressed', {
              href: 'https://vercel.com?utm_source=isektionen&utm_campaign=oss',
            })
          }
        >
          <img src="/powered-by-vercel.svg" alt="Powered by Vercel" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
