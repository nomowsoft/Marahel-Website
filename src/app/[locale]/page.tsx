import Hero from "@/components/home/hero/hero";
import Service from "@/components/home/service";
import Works from "@/components/home/works/works";
import { ContacUs } from "@/components/home/contact_us";

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
