"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { getWorks } from "@/utils/data";
import CustomerPartner from "../customer_partner/customer_partner";
import { useLocale, useTranslations } from "next-intl";

const Works = () => {
    const t = useTranslations("Works");
    const locale = useLocale();
    const works = getWorks(t, locale);
    const isArabic = locale === 'ar';
  return (
    <section className="bg-works bg-right bg-contain bg-no-repeat" id="works">
        <div className="mx-5 lg:mx-10 xl:mx-20 pt-20 lg:pt-32 pb-10">
            <h1 className="text-center text-3xl lg:text-7xl text-primary font-semibold">{t('title')}</h1>
            <p className="mt-6 text-xl lg:text-2xl text-center max-w-screen-md mx-auto text-gray-500 font-medium">
                {t('description')}
            </p>
            <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-2 items-center mt-2 lg:mt-20" data-aos="fade-up">
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
                        nextEl: ".custom-swiper-button-prev",
                        prevEl: ".custom-swiper-button-next",
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {works?.map((work) => (
                        <SwiperSlide key={work.id} className="bg-white p-5 rounded-md shadow-lg border border-success">
                            <a href={work.href} target={work.href !== "#works" ? '_blank' : ''}>
                               <div className="h-64 flex flex-col ">
                                    <div className="h-32 flex justify-center items-center">
                                        <Image src={work.image} alt="" width={100} height={20} />
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-lg text-gray-600 text-center">
                                            {work.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                    <div className="custom-swiper-navigation flex mt-3 justify-center">
                        <button className={`custom-swiper-button-prev py-2 rounded-lg text-info text-5xl`}>{isArabic ? '→' : '←'}</button>
                        <button className={`custom-swiper-button-next py-2 rounded-lg text-info text-5xl`}>{isArabic ? '←' : '→'}</button>
                    </div>
                </Swiper>
            </div>
        </div>
        <CustomerPartner />
    </section>
  )
}

export default Works