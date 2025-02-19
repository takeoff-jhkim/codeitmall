import '@/styles/global.css';
import { Noto_Sans_KR } from 'next/font/google';

export default function App({ Component, pageProps }) {
  const notoSansKR = Noto_Sans_KR({
    weight: ['400', '700'],
    subsets: [],
  })

  return <Component {...pageProps} />
}
