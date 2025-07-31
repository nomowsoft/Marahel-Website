import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Whatsapp from "@/components/home/whatsapp";

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
        <link rel="icon" href="/header/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </head>
      <body style={{ fontFamily: 'CustomFontName, sans-serif' }}>
        <main>
          <NextIntlClientProvider messages={messages}>
            <Header />
              {children}
              <ToastContainer />
            <Footer />
            <Whatsapp />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
