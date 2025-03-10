import "./globals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Locale = 'en' | 'ar';

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  const messages = await getMessages();
  if (!routing.locales.includes(locale as Locale) || !messages) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
       <head>
        <link rel="icon" href="/header/logo_marahel.png" />
      </head>
      <body style={{ fontFamily: 'CustomFontName, sans-serif' }}>
        <Header />
        <main>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
