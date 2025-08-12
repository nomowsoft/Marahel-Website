import Contactus from "@/components/contactus/contacus";
import { Metadata } from "next";


export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "تواصل معنا"
    : "Contact Us";

   const description = isArabic
    ? "مُرشد هو بوت دردشة ذكي مطوّر لفهم اللغة العربية واللهجات المحلية، يوفر تفاعلاً سلساً مع العملاء، ويقدم ردوداً دقيقة بالاعتماد على الذكاء الاصطناعي."
    : "Morshed is a smart chatbot designed to understand Arabic and local dialects, offering seamless customer interactions and accurate AI-powered responses.";

  return {
    metadataBase: new URL(`https://marahel.com.sa/${locale}/morshed/contact_us`),
    title,
    description,
    alternates: {
      canonical: `https://marahel.com.sa/${locale}/morshed/contact_us`,
      languages: {
        ar: "https://marahel.com.sa/ar/morshed/contact_us",
        en: "https://marahel.com.sa/en/morshed/contact_us",
      },
    },
  };
}



export default function ContactUs() {
  return (
    <section>
      <Contactus />
    </section>
  );
}
