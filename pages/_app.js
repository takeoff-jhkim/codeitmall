import '@/styles/global.css';
import { Noto_Sans_KR } from 'next/font/google';
import { useEffect } from 'react';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
  variable: "--font-noto-sans-kr",
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add(notoSansKR.className)
  }, [])
  return <Component {...pageProps} />
}
