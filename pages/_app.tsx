import { AppProps } from 'next/app';
import Page from '../components/page';
import '../style.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default App;
