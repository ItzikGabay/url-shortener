import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <p className="footer">Developed by @itzikdevio</p>
    </div>
  );
}

export default MyApp;
