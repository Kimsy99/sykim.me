import localFont from 'next/font/local';
import { Geist_Mono } from "next/font/google";
import './globals.css';

const customFont = localFont({
  src: [
    {
      path: '../public/font/ColfaxWebRegular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-custom'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${customFont.variable} ${geistMono.variable}`}>
      <body className="font-[family-name:var(--font-custom)] max-w-screen-sm mx-auto sm:px-0 px-8">
        <nav className="flex justify-between items-center font-[family-name:var(--font-geist-mono)] text-sm mt-8 mb-24 text-dimLight dark:text-dimDark">
          <div>
            <a>sykim</a>
          </div>
          <div className='flex gap-4'>
            <a>posts</a>
            <a>about</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
