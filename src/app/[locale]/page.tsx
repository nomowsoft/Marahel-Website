// import { ContacUs } from "../../components/home/contact_us";
// import Hero from "../../components/home/hero/hero";
// import Service from "../../components/home/service";
// import Works from "../../components/home/works/works";

import Hero from "./murshed/home/hero/page";
import WhyMurshed from './murshed/home/why_murshed/page'
import Features from './murshed/home/features/page'
import Work from './murshed/home/work/page'

export default function Home() {
  return (
    <section className="bg-gray-50">
      {/* TO DOO */}
      {/* <Hero />
      <Service />
      <Works />
      <ContacUs /> */}
      <Hero /> 
      <WhyMurshed />
      <Features />
      <Work />
    </section>
  );
}
