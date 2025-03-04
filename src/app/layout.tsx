import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: 'CustomFontName, sans-serif' }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
