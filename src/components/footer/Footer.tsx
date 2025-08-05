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
        <section className={
                [`/${locale}/morshed`, `/${locale}/morshed/contact_us`, `/${locale}/morshed/privacy&policy`].includes(new_path)
                ? 'hidden'
                : ''
            }
        >
            <footer className="bg-primary lg:bg-transparent lg:bg-footer bg-cover bg-no-repeat min-h-screen lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[800px]  bg-center w-full lg:pt-48 xl:pt-32 2xl:pt-52 px-5 lg:px-20">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-12 xl:mt-24">
                        <div className="col-span-12 lg:col-span-4 xl:col-span-6">
                            <Image src="/footer/logo1.svg" alt="..." width={250} height={10} className="mt-5" />
                            <div className="flex justify-between items-center mt-3 w-64">
                                <div>
                                    <hr className="border h-1.5 bg-info rounded-2xl border-info w-48 mt-2" />
                                </div>
                                <div>
                                    <hr className="border h-1.5 bg-info rounded-2xl border-info w-14 mt-2" />
                                </div>
                            </div>
                            <p className={`text-white mt-5 text-justify 2xl:text-2xl font-extrabold font-js ${isArabic ? "lg:ml-16" : "lg:mr-16"}`}>
                                {t('description')}
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-3 lg:mx-20 pt-10 lg:pt-0">
                            <h1 className="text-2xl 2xl:text-4xl text-white font-extrabold">{t('links')}</h1>
                            <div className="flex justify-between items-center mt-3 w-16 2xl:w-28">
                                <div>
                                    <hr className="border h-1.5 bg-info rounded-2xl border-info w-10 2xl:w-16 mt-2" />
                                </div>
                                <div>
                                    <hr className="border h-1.5 bg-info rounded-2xl border-info w-4 2xl:w-10 mt-2" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link href="/" className="text-white text-2xl 2xl:text-3xl font-js font-semibold">{t('home')}</Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 x:col-span-3 pt-10 lg:pt-0">
                            <h1 className="text-2xl 2xl:text-4xl text-white font-extrabold">{t('contactus')}</h1>
                            <div className="flex justify-between items-center mt-3 w-28 2xl:w-44">
                                <div>
                                    <hr className="border h-1.5 bg-info rounded-2xl border-info w-20 2xl:w-32 mt-2" />
                                </div>
                                <div>
                                    <hr className="border h-1.5 bg-info rounded-2xl border-info w-6 2xl:w-10 mt-2" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex items-center pb-2 xl:px-5">
                                    <div className="flex justify-center items-start min-w-[32px]">
                                        <Image
                                        src="/footer/Button.svg"
                                        alt="..."
                                        width={32}
                                        height={20}
                                        className="w-8 h-auto"
                                        />
                                    </div>
                                    <div className="mx-2 text-white font-js">
                                        <h1 className="lg:text-lg 2xl:text-xl font-extrabold">{t('location')}</h1>
                                        <p className="text-sm font-extrabold">
                                        8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-5">
                                    <div className="flex justify-center items-start min-w-[32px]">
                                        <Image src="/footer/Button (1).svg" alt="..." className="w-8 h-auto" width={32} height={20} />
                                    </div>
                                    <div className="mx-2 text-white font-js">
                                        <h1 className="font-extrabold">{t('email')}</h1>
                                        <p className="font-extrabold">
                                            info@marahel.com.sa
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-5">
                                    <div className="flex justify-center items-start min-w-[32px]">
                                        <Image src="/footer/Button (2).svg" alt="..." className="h-auto" width={32} height={20} />
                                    </div>
                                    <div className="mx-2 text-white font-js">
                                        <h1 className="font-extrabold">{t('phone')}</h1>
                                        <p className="font-extrabold" dir="rtl">
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
