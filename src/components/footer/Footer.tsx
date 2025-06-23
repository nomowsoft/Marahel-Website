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
        <section className={`${ new_path === `/${locale}/morshed` ? 'hidden' : ''}`}>
            <footer className="bg-primary lg:bg-transparent lg:bg-footer bg-cover bg-no-repeat h-screen bg-center w-full lg:pt-48 xl:pt-32 2xl:pt-52 px-5 lg:px-20">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-12 xl:mt-24">
                        <div className="col-span-12 lg:col-span-4 xl:col-span-6">
                            <Image src="/footer/marahel_logo.png" alt="..." width={250} height={10} className="mt-5" />
                            <Image src="/footer/line1.png" alt="..." width={250} height={10} className="mt-3" />
                            <p className={`text-white mt-5 text-justify 2xl:text-2xl font-extrabold ${isArabic ? "lg:ml-14" : "lg:mr-14"}`}>
                                {t('description')}
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-3 lg:mx-20 pt-10 lg:pt-0">
                            <h1 className="text-2xl 2xl:text-4xl text-white font-extrabold">{t('links')}</h1>
                            <Image src="/footer/line2.png" alt="..." width={100} height={10} className="mt-3" />
                            <div className="mt-5">
                                <Link href="/" className="text-white text-2xl 2xl:text-3xl">{t('home')}</Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 x:col-span-3 pt-10 lg:pt-0">
                            <h1 className="text-2xl 2xl:text-4xl text-white font-extrabold">{t('contactus')}</h1>
                            <Image src="/footer/line2.png" alt="..." width={100} height={10} className="mt-3" />
                            <div className="mt-5">
                                <div className="flex items-center pb-2 xl:px-5">
                                    <div className="flex justify-center items-start min-w-[32px]">
                                        <Image
                                        src="/footer/Button.png"
                                        alt="..."
                                        width={32}
                                        height={20}
                                        className="w-8 h-auto"
                                        />
                                    </div>
                                    <div className="mx-2 text-white">
                                        <h1 className="lg:text-lg 2xl:text-xl font-extrabold">{t('location')}</h1>
                                        <p className="text-sm font-extrabold">
                                        8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-5">
                                    <div className="flex justify-center items-start min-w-[32px]">
                                        <Image src="/footer/Button (1).png" alt="..." className="w-8 h-auto" width={32} height={20} />
                                    </div>
                                    <div className="mx-2 text-white">
                                        <h1 className="font-extrabold">{t('email')}</h1>
                                        <p className="font-extrabold">
                                            info@marahel.com.sa
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-5">
                                    <div className="flex justify-center items-start min-w-[32px]">
                                        <Image src="/footer/Button (2).png" alt="..." className="h-auto" width={32} height={20} />
                                    </div>
                                    <div className="mx-2 text-white">
                                        <h1 className="font-extrabold">{t('phone')}</h1>
                                        <p className="font-extrabold">
                                            947 377 548 966+
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
