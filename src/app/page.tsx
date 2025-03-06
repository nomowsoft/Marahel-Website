import { ContacUs } from "./components/home/contact_us";
import Hero from "./components/home/hero";
import Service from "./components/home/service";
import Works from "./components/home/works/works";

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
