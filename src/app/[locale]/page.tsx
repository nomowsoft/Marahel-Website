import Hero from "./murshed/home/hero/page";
import WhyMurshed from './murshed/home/why_murshed/page'
import Features from './murshed/home/features/page'
import Work from './murshed/home/work/page'

export default function Home() {
  return (
    <section className="bg-gray-50">
      <Hero /> 
      <WhyMurshed />
      <Features />
      <Work />
    </section>
  );
}
