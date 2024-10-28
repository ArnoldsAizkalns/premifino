// Импорт библиотек и компонентов
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import Navigation from 'components/Navigation';
import PopUp from 'components/popUp';
import { allura, montserrat } from '../../../config/fonts';

// Экспорт метаданных
export const viewport = 'width=device-width, initial-scale=1.0';
export const charset = 'utf-8';

// Типизация пропсов компонента
type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Функция для получения переводов
async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

// Функция для генерации статических параметров
export async function generateStaticParams() {
  return ['en', 'el'].map((locale) => ({ locale }));
}

// Генерация метаданных страницы
export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
    description: t('LocaleLayout.description'),
  };
}

// Основной компонент разметки
export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return (
    <html lang={locale} className="h-full">
      <body className={clsx('flex h-full flex-col font-mont antialiased', montserrat.variable, allura.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PopUp />
          {children}
          <Navigation />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
