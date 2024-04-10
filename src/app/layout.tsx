import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import '../styles/_app.scss';

const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Gorillax',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={questrial.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
