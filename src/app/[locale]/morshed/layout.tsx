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
    "مُرشد دردشة ذكية",
    "مُرشد روبوت محادثة",
    "مُرشد روبوت دردشة ذكي",
    "مُرشد مساعد افتراضي",
    "مُرشد دعم اللهجات المحلية",
    "مُرشد دردشة عربية",
    "مُرشد شات بوت عربي",
    "مُرشد ذكاء اصطناعي للدردشة",
    "Morshed",
    "Morshed Chatbot",
    "Morshed Smart Chatbot",
    "Morshed AI Chatbot",
    "Morshed Virtual Assistant",
    "Morshed Arabic Chatbot",
    "Morshed Local Dialect Chatbot",
    "Morshed Arabic Conversation Bot",
    "Morshed AI Conversation Assistant",
    "Morshed Intelligent Chatbot"
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
