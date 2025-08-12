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
import LoadingWrapper from "./loading-wrapper";
import { Metadata } from "next";

type Locale = 'en' | 'ar';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "مراحِل الرقمية - حلول تقنية مبتكرة"
    : "Marahel Digital - Innovative Tech Solutions";

  const description = isArabic
    ? "شركة مراحل الرقمية تقدم حلول التحول الرقمي، الذكاء الاصطناعي، وتطوير البرمجيات."
    : "Marahel Digital provides digital transformation, AI, and software development solutions.";

  const keywords =
    [
      "شركة مراحل الرقمية",
      "مراحل التحول الرقمي",
      "مراحل الذكاء الاصطناعي",
      "مراحل تطوير البرمجيات",
      "مراحل حلول تقنية مبتكرة",
      "مراحل خدمات تقنية متكاملة",
      "Marahel Digital",
      "Marahel Digital Transformation",
      "Marahel Artificial Intelligence",
      "Marahel Software Development",
      "Marahel Innovative Tech Solutions",
      "Marahel IT Services"
    ]

  return {
    metadataBase: new URL("https://marahel.com.sa"),
    title: {
      default: title,
      template: `%s | ${isArabic ? "مراحل الرقمية" : "Marahel Digital"}`
    },
    description,
    keywords,
    verification: {
      google: "i4VQGTbQiBjuPpOvhZCDutFf7",
    },
    openGraph: {
      title,
      description,
      url: `https://marahel.com.sa/${locale}`,
      siteName: isArabic ? "مراحل الرقمية" : "Marahel Digital",
      images: [
        {
          url: `https://marahel.com.sa/logo.png`,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: isArabic ? "ar_SA" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://marahel.com.sa/${locale}`,
      languages: {
        ar: "https://marahel.com.sa/ar",
        en: "https://marahel.com.sa/en",
      },
    },
  };
}


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
            <LoadingWrapper>
              <Header />
                {children}
                <ToastContainer />
              <Footer />
              <Whatsapp />
            </LoadingWrapper>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
