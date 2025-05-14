import "./../globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";


interface MurshedProps {
  children: React.ReactNode;
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
