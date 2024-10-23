import { Allura, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});
export const allura = Allura({
  subsets: ['latin'],
  variable: '--font-allura',
  weight: '400',
});
