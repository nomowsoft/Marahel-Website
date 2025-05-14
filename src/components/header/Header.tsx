"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navlink from "./nav_link";
import Link from "next/link";
import LocaleSwitcher from "./swich_locale";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
  const locale = useLocale();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathname = usePathname();
  const new_path = `${pathname}`
  return (
    <header className={`${ new_path === `/${locale}/morshed` ? 'hidden' : ''}`}>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 relative w-full">
        <div className="flex flex-wrap justify-between items-center mx-5 lg:mx-10 xl:mx-20 py-4 relative">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <Image
                height={20}
                width={300}
                src="/header/new.png"
                alt="Logo"
              />
            </Link>
            <div className="hidden lg:flex">
              <Navlink />
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <LocaleSwitcher />
            <Link
              href="#"
              className="mx-2 border border-secondary py-2 px-4 rounded-md flex justify-center items-center"
            >
              <span className="mx-2 text-xl text-primary font-extrabold" dir="rtl">
                242 710 546 996+
              </span>
              <div className="flex justify-center items-center">
                <Image
                  height={0} width={40} src="/header/phone.png"
                  alt="phone"
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center p-2 text-sm text-primary rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 border border-primary"
          >
            <span className="sr-only">فتح القائمة الرئيسية</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          {/* Mobile menu */}
          <div
            className={`absolute top-28 py-4 left-0 bg-white shadow-lg transition-all duration-300 ease-in-out text-center ${
              isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            } lg:hidden w-full`}
            id="mobile-menu"
          >
            <Navlink />
            <div className="mt-8">
              <Link
                href="#"
                className="mx-2 border border-secondary py-2 px-4 rounded-md flex justify-center items-center"
              >
                <span className="mx-2 text-xl text-primary font-extrabold">
                  242 710 546 996+
                </span>
                <div className="flex justify-center items-center">
                  <Image
                    height={0} width={40} src="/header/phone.png"
                    alt="phone"
                  />
                </div>
              </Link>
            </div>
            <div className="mt-4">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}