import { Figtree, Poppins } from 'next/font/google';
import './sass/index.scss';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'CallADoc | Your Trusted Digital Health Partner in the UAE',
    template: 'Access virtual medical consultations, lifestyle management, and at-home care anytime, anywhere.',
  },
  description: 'Access virtual medical consultations, lifestyle management, and at-home care anytime, anywhere.',
  openGraph: {
    title: 'CallADoc | Your Trusted Digital Health Partner in the UAE',
    description: 'Access virtual medical consultations, lifestyle management, and at-home care anytime, anywhere.',
    images: ['/openGraphImage.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${figtree.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
