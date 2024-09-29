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
    default: 'Call A Doc',
    template: 'Call Our Doctor for a Virtual Consultation No Waiting, Easy Access, and Affordable Rates!',
  },
  description: 'Call Our Doctor for a Virtual Consultation No Waiting, Easy Access, and Affordable Rates!',
  openGraph: {
    title: 'Call A Doc Human Care Digital Touch.',
    description: 'Call Our Doctor for a Virtual Consultation No Waiting, Easy Access, and Affordable Rates!',
    images: ['/openGraphImage.jpg'],
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
