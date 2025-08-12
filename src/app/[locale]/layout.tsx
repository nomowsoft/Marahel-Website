import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
    ? "مراحل الرقمية - حلول التحول الرقمي والذكاء الاصطناعي في السعودية"
    : "Marahel Digital - Digital Transformation & AI Solutions in Saudi Arabia";

  const description = isArabic
    ? "شركة مراحل الرقمية تقدم حلول التحول الرقمي، الذكاء الاصطناعي، وتطوير البرمجيات للشركات في المملكة. نُطوّر حلولًا ذكية وآمنة مُخصصة لاحتياجاتك."
    : "Marahel Digital provides digital transformation, AI, and software development solutions for businesses in Saudi Arabia. We build smart, secure, and customized digital solutions.";

  const keywords = [
    "مراحل الرقمية",
    "شركة تقنية سعودية",
    "التحول الرقمي في السعودية",
    "الذكاء الاصطناعي في المملكة",
    "تطوير برمجيات مخصصة",
    "حلول رقمية للشركات",
    "أمن سيبراني سعودي",
    "استضافة محلية",
    "حلول تقنية متكاملة",
    "شركة تطوير رقمي",
    "أنظمة ذكاء اصطناعي",
    "حلول ERP و CRM",
    "التحول الرقمي للشركات",
    "خدمات تطوير برمجيات",
    "حلول رقمية آمنة",
    "دعم فني سعودي",
    "استشارات تقنية سعودية",
    "حلول رقمية للقطاع الحكومي",
    "حلول رقمية للقطاع الخاص",
    "Marahel Digital",
    "Saudi Technology Company",
    "Digital Transformation KSA",
    "AI Solutions Saudi Arabia",
    "Custom Software Development",
    "Secure Digital Solutions",
    "Local Hosting KSA",
    "Cybersecurity Saudi Arabia",
    "Enterprise IT Solutions",
    "ERP and CRM Integration",
    "AI Development Company",
    "Innovative Tech Solutions",
    "Saudi Digital Transformation",
    "Software Development Company KSA",
    "Digital Solutions for Enterprises",
    "AI and RAG Technology",
    "Saudi-Based Tech Firm",
    "End-to-End Digital Services",
    "Smart Customer Experience"
  ].join(", ");

  const baseUrl = "https://marahel.com.sa";
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${isArabic ? "مراحل الرقمية" : "Marahel Digital"}`
    },
    description,
    keywords,
    alternates: {
      canonical: baseUrl,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: isArabic ? "مراحل الرقمية" : "Marahel Digital",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: isArabic ? "شعار مراحل الرقمية" : "Marahel Digital Logo",
        },
      ],
      locale: isArabic ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/logo.png`],
    },
    verification: {
      google: "i4VQGTbQiBjuPpOvhZCDutFf7",
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
