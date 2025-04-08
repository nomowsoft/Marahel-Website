import "./globals.css";
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Image from "next/image";

type Locale = 'en' | 'ar';

export default async function RootLayout({ params }: { params: Promise<{ locale: string }>; }) {
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
          <div className="flex justify-center">
            <Image src="/hero/soon.png" alt="..." width={2000} height={20} className="" />
          </div>
        </main>
      </body>
    </html>
  );
}
