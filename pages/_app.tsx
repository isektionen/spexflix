import { AppProps } from 'next/app'
import '../style.scss'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
