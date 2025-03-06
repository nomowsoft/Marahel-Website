"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { cutomerpartner } from "@/app/utils/data";

const CustomerPartner = () => {
    return (
        <section className="pb-12 lg:pb-52">
            <div className="max-w-screen-2xl mx-auto">
                <h1 className="text-center text-3xl lg:text-4xl text-primary font-semibold">شركاؤنـــا و عملاؤنـــا​​​​​​​​</h1>
                <p className="mt-6 text-xl lg:text-2xl text-center max-w-screen-md mx-auto text-gray-500 font-medium">
                    نفخر بخدمة مجموعة واسعة من العملاء في مختلف القطاعات، ملتزمين بتقديم حلول تقنية مخصصة تلبي احتياجاتهم وتساعدهم على تحقيق التميز في أعمالهم.
                </p>
            </div>
            <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-2 items-center mt-2 lg:mt-16" data-aos="fade-up">
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
                    {cutomerpartner?.map((cp) => (
                        <SwiperSlide key={cp.id}>
                            <div className="flex justify-center">
                                <Image src={cp.image} alt="" width={500} height={20} />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-swiper-navigation flex justify-center mt-4">
                        <div className={`custom-swiper-button-prev py-2 rounded-lg text-info text-5xl`}>&#8594;</div>
                        <div className={`custom-swiper-button-next py-2 rounded-lg text-info text-5xl`}>&#8592;</div>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default CustomerPartner