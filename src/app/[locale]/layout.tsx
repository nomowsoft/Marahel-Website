import "./globals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Link from "next/link";
import Image from "next/image";

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
        <main>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
            <div style={{
              position: "fixed",
              left: "2rem",
              bottom: "5rem",
              zIndex: 1000, // للتأكد من أنها تظهر فوق جميع العناصر الأخرى
            }}>
              <Link  href="https://wa.me/+9660546710242" target="_blank" className="block lg:hidden">
                <Image src="/footer/whatsapp.png" alt="..." width={60} height={20} />
              </Link>
              <Link  href="https://web.whatsapp.com/send?phone=+966 0546710242" target="_blank" className="hidden lg:block">
                <Image src="/footer/whatsapp.png" alt="..." width={60} height={20} />
              </Link>
            </div>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
