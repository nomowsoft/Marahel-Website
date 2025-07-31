"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";


const Whatsapp = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const new_path = `${pathname}`
  return (
    <div className={`fixed bottom-10 ${locale === 'ar' ? 'left-10' : 'right-10'}`}>
      <Link href={[`/${locale}/morshed`, `/${locale}/morshed/contact_us`].includes(new_path) ? 'https://wa.me/+9660534551191' : 'https://wa.me/+9660548377947'} target="_blank" className="block lg:hidden">
        <Image src="/footer/whatsapp.png" alt="..." width={60} height={20} />
      </Link>
      <Link href={[`/${locale}/morshed`, `/${locale}/morshed/contact_us`].includes(new_path) ? 'https://web.whatsapp.com/send?phone=+966 0534551191' : 'https://web.whatsapp.com/send?phone=+966 0548377947'} target="_blank" className="hidden lg:block">
        <Image src="/footer/whatsapp.png" alt="..." width={60} height={20} />
      </Link>
    </div>
  )
}

export default Whatsapp
