import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const poppins = Poppins({
  style: 'normal',
  weight: ['100', '200', '300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
