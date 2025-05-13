"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getAgreements } from "@/utils/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Agreements = () => {
    const t = useTranslations("Agreements")
    const agreements = getAgreements(t);
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <div className="pt-12 lg:pt-25 pb-10 mx-5 md:mx-20">
            <h1 className="text-center text-3xl lg:text-5xl 2xl:text-6xl text-primary font-extrabold">{t('title')}</h1>
             <div className="rounded-xl border border-success bg-white relative overflow-hidden mt-12">
                <Image
                    src="/agree/Group 1321314096.svg"
                    alt="..."
                    width={120}
                    height={20}
                    className="object-cover absolute top-1 right-1"
                />
                <Image
                    src="/agree/Group 1321314097.svg"
                    alt="..."
                    width={120}
                    height={20}
                    className="object-cover absolute bottom-1 left-1"
                />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".custom-swiper-button-prev1",
                        prevEl: ".custom-swiper-button-next1",
                    }}
                >
                    {agreements?.map((agreement) => (
                        <SwiperSlide
                            key={agreement.id}
                            className="lg:pt-10 pb-10 mt-12"
                        >
                            <div className="flex flex-col justify-center items-center px-4 py-10">
                                <div className="text-center">
                                <h1 className="font-extrabold text-2xl lg:text-4xl">{agreement.title}</h1>
                                <p className="mt-5 text-lg lg:text-2xl font-semibold font-js">{agreement.description}</p>
                                <p className="mt-5 text-lg lg:text-2xl font-semibold font-js">{agreement.description1}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-swiper-navigation flex justify-center mb-5">
                    <button className={`custom-swiper-button-prev1 rounded-lg text-info text-5xl`}>{isArabic ? '→' : '←'}</button>
                    <button className={`custom-swiper-button-next1 rounded-lg text-info text-5xl`}>{isArabic ? '←' : '→'}</button>
                </div>
            </div>
        </div>
    )
}

export default Agreements
