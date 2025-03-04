"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { works } from "@/app/utils/data";
import module from "./work.module.css";
import CustomerPartner from "../customer_partner/customer_partner";

const Works = () => {
  return (
    <section className="bg-works bg-right bg-contain bg-no-repeat">
        <div className="mx-5 lg:mx-10 xl:mx-20 pt-20 lg:pt-24 pb-10">
            <h1 className="text-center text-4xl text-primary font-semibold">أعمالنا</h1>
            <p className="mt-6 text-2xl text-center max-w-screen-md mx-auto text-gray-500 font-medium">
            نقدم حلولًا تقنية متكاملة تشمل الاستشارات الرقمية، تطوير البرمجيات، تحسين البنية التحتية التقنية، وتوفير الموارد البشرية المتخصصة، لضمان نجاح مشاريع عملائنا وتحقيق أهدافهم.
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
                            slidesPerView: 4,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {works?.map((work) => (
                        <SwiperSlide key={work.id} className="bg-white p-5 rounded-md shadow-lg border border-success">
                            <div>
                                <div className="flex justify-center">
                                    <Image src="/works/unsplash_phIFdC6lA4E.png" alt="" width={500} height={20} />
                                </div>
                                <div className="mt-3 mb-3 flex justify-between items-center">
                                    <p className="mt-1 text-lg text-gray-600">
                                        {work.description}
                                    </p>
                                    <div className="flex justify-center items-center p-2 mt-12">
                                        <Image src={work.image} alt="" height={10} width={70} className={`${module.image_custom}`} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-swiper-navigation flex mt-3 justify-center">
                        <div className={`custom-swiper-button-prev py-2 rounded-lg text-info text-5xl`}>&#8594;</div>
                        <div className={`custom-swiper-button-next py-2 rounded-lg text-info text-5xl`}>&#8592;</div>
                    </div>
                </Swiper>
            </div>
        </div>
        <CustomerPartner />
    </section>
  )
}

export default Works