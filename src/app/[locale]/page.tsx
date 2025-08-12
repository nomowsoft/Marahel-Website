import Hero from "@/components/home/hero/hero";
import Service from "@/components/home/service";
import Works from "@/components/home/works/works";
import { ContacUs } from "@/components/home/contact_us";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "الصفحة الرئسية | مراحل الرقمية"
    : "Home | Marahel Digital";

  const description = isArabic
    ? "شركة مراحل الرقمية تقدم حلول التحول الرقمي، الذكاء الاصطناعي، وتطوير البرمجيات."
    : "Marahel Digital provides digital transformation, AI, and software development solutions.";

  return {
    title,
    description,
    alternates: {
      canonical: `https://marahel.com.sa/${locale}`,
      languages: {
        ar: "https://marahel.com.sa/ar",
        en: "https://marahel.com.sa/en",
      },
    },
  };
}

export default function Home() {
  return (
    <section className="bg-gray-50">
      <Hero />
      <Service />
      <Works />
      <ContacUs />
    </section>
  );
}
