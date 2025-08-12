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
    "مرشد",
    "بوت دردشة",
    "دردشة ذكية",
    "روبوت محادثة",
    "روبوت دردشة ذكي",
    "مساعد افتراضي",
    "دعم اللهجات المحلية",
    "دردشة عربية",
    "شات بوت عربي",
    "ذكاء اصطناعي للدردشة",
    "Morshed",
    "Chatbot",
    "Smart Chatbot",
    "AI Chatbot",
    "Virtual Assistant",
    "Arabic Chatbot",
    "Local Dialect Chatbot",
    "Arabic Conversation Bot",
    "AI Conversation Assistant",
    "Intelligent Chatbot"
  ]

  return {
    metadataBase: new URL(`https://marahel.com.sa/${locale}/morshed`),
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://marahel.com.sa/${locale}/morshed`,
      languages: {
        ar: "https://marahel.com.sa/ar/morshed",
        en: "https://marahel.com.sa/en/morshed",
      },
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
