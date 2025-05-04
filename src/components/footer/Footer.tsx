"use client";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const isArabic = locale === 'ar';
    const pathname = usePathname();
    const new_path = `${pathname}`
    console.log(new_path);

    return (
        <section className={`${ new_path === `/${locale}/murshed` ? 'hidden' : ''}`}>
            <footer className="bg-primary lg:bg-transparent lg:bg-footer bg-cover lg:bg-cover bg-no-repeat lg:h-screen bg-center w-full py-8 lg:pt-56 px-5 lg:px-20">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-12 xl:mt-44">
                        <div className="col-span-12 lg:col-span-6">
                            <Image src="/footer/marahel_logo.png" alt="..." width={250} height={10} />
                            <Image src="/footer/line1.png" alt="..." width={250} height={10} className="mt-3" />
                            <p className={`text-white mt-5 text-justify lg:text-xl xl:text-3xl font-extrabold ${isArabic ? "lg:ml-14" : "lg:mr-14"}`}>
                                {t('description')}
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-3 lg:mx-20 pt-10 lg:pt-0">
                            <h1 className="text-2xl xl:text-4xl text-white font-extrabold">{t('links')}</h1>
                            <Image src="/footer/line2.png" alt="..." width={100} height={10} className="mt-3" />
                            <div className="mt-5">
                                <Link href="/" className="text-white text-2xl xl:text-3xl">{t('home')}</Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 pt-10 lg:pt-0">
                            <h1 className="text-2xl xl:text-4xl text-white font-extrabold">{t('contactus')}</h1>
                            <Image src="/footer/line2.png" alt="..." width={100} height={10} className="mt-3" />
                            <div className="mt-5">
                                <div className="flex items-center py-2 xl:px-6">
                                    <div className="flex justify-center ">
                                        <Image src="/footer/Button.png" className="" alt="..." width={32} height={20} />
                                    </div>
                                    <div className="mx-3 text-white">
                                        <h1 className="lg:text-lg xl:text-xl font-extrabold">{t('location')}</h1>
                                        <p className="text-sm font-extrabold">
                                            8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-6">
                                    <div className="flex justify-center items-center">
                                        <Image src="/footer/Button (1).png" alt="..." width={32} height={20} />
                                    </div>
                                    <div className="mx-3 text-white">
                                        <h1 className="font-extrabold lg:text-lg xl:text-xl">{t('email')}</h1>
                                        <p className="font-extrabold">
                                            info@marahel.com.sa
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-6">
                                    <div className="flex justify-center items-center">
                                        <Image src="/footer/Button (2).png" alt="..." width={32} height={20} />
                                    </div>
                                    <div className="mx-3 text-white">
                                        <h1 className="lg:text-lg xl:text-xl font-extrabold ">{t('phone')}</h1>
                                        <p className="font-extrabold">
                                            242 710 546 966+
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <p className="text-center text-xl mx-10 pb-5 text-primary">
                {t('copyright')}
            </p>
        </section>
    )
}
