import { Montserrat, Allura } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
});
