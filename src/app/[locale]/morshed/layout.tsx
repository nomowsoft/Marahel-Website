import "./../globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Metadata } from "next";


interface MurshedProps {
  children: React.ReactNode;
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "مُرشد"
    : "Morshed";

  const description = isArabic
    ? "مُرشد هو بوت دردشة ذكي مطوّر لفهم اللغة العربية واللهجات المحلية، يوفر تفاعلاً سلساً مع العملاء، ويقدم ردوداً دقيقة بالاعتماد على الذكاء الاصطناعي."
    : "Morshed is a smart chatbot designed to understand Arabic and local dialects, offering seamless customer interactions and accurate AI-powered responses.";

  const keywords = [
    "مُرشد",
    "مُرشد بوت دردشة ذكي",
    "مُرشد الذكاء الاصطناعي",
    "مُرشد استضافة محلية",
    "مُرشد أمان بيانات",
    "مُرشد دعم العملاء 24/7",
    "مُرشد تكامل مع CRM",
    "مُرشد تواصل رقمي",
    "مُرشد واتساب",
    "مُرشد تطوير برمجيات سعودية",
    "مُرشد حلول رقمية",
    "مُرشد فهم اللهجات العربية",
    "مُرشد RAG",
    "مُرشد توليد معزز بالاسترجاع",
    "مُرشد شركة مراحل الرقمية",
    "ذكاء اصطناعي سعودي",
    "بوت دردشة عربي",
    "دعم العملاء الآلي في السعودية",
    "Morshed",
    "Morshed AI Chatbot",
    "Morshed Saudi Arabia",
    "Morshed Local Hosting",
    "Morshed Data Security",
    "Morshed 24/7 Customer Support",
    "Morshed CRM Integration",
    "Morshed WhatsApp Chatbot",
    "Morshed Arabic AI",
    "Morshed RAG Technology",
    "Morshed Retrieval Augmented Generation",
    "Morshed Customizable Chatbot",
    "Morshed Digital Transformation",
    "AI Chatbot for Arabic Language",
    "Arabic Dialect AI Chatbot",
    "Secure AI Chatbot KSA",
    "Saudi Digital Solutions",
    "Custom AI Chatbot Development",
    "Enterprise Chatbot Saudi",
    "AI Customer Service Saudi Arabia"
  ].join(", ");
  const baseUrl = "https://marahel.com.sa";
  const pathname = `/${locale}/morshed`;
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        ar: `${baseUrl}/ar/morshed`,
        en: `${baseUrl}/en/morshed`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${pathname}`,
      siteName: title,
      locale: isArabic ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function MurshedLayout({ children }: MurshedProps) {
  return (
    <div style={{ fontFamily: 'Somar, sans-serif' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
