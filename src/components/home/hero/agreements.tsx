"use client";
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
                    <SwiperSlide key={agreement.id} className="bg-white lg:pt-20 pb-16 rounded-xl mt-12 border border-success">
                        <div className="bg-white rounded-xl mt-12">
                            <div className="flex justify-center items-center">
                                <div className="text-center">
                                    <h1 className="font-extrabold text-2xl lg:text-4xl">
                                        {agreement.title}
                                    </h1>
                                    <p className="mt-5 text-lg lg:text-2xl font-semibold">
                                        {agreement.description}
                                    </p>
                                    <p className="mt-5 text-lg lg:text-2xl font-semibold">
                                        {agreement.description1}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="custom-swiper-navigation flex mt-3 justify-center">
                    <button className={`custom-swiper-button-prev1 py-2 rounded-lg text-info text-5xl`}>{isArabic ? '→' : '←'}</button>
                    <button className={`custom-swiper-button-next1 py-2 rounded-lg text-info text-5xl`}>{isArabic ? '←' : '→'}</button>
                </div>
            </Swiper>
        </div>
    )
}

export default Agreements