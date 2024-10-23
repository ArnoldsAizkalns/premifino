import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import Head from 'next/head'; // Добавлено для мета-тегов
import Navigation from 'components/Navigation';
import { allura, montserrat } from '../../../config/fonts';
import { ChakraProvider } from '@chakra-ui/react';
import PopUp from 'components/popUp';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'el'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
    description: t('LocaleLayout.description'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return (
    <html className="h-full" lang={locale}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t('LocaleLayout.description')} />
        <title>{t('LocaleLayout.title')}</title>
      </Head>
      <body
        className={clsx(
          'flex h-full flex-col font-mont antialiased',
          montserrat.variable,
          allura.variable,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChakraProvider>
            <PopUp />
            <Navigation />
            {children}
          </ChakraProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
