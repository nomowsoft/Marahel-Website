import Image from "next/image"
import { getService } from "@/utils/data";
import { useTranslations, useLocale } from "next-intl";


const Service = () => {
    const t = useTranslations('OurService');
    const services = getService(t);
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <>
            <div className="bg-white">
                <div className="relative w-full">
                    <svg
                        className="absolute top-0 left-0 w-full"
                        viewBox="0 0 1400 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#F9FAFB"
                            d="M0,0 C700,40 600,40 1440,0 L1440,0 L0,0 Z"
                        />
                    </svg>
                    <div className="bg-primary text-white px-8 pt-10">
                        {/* <Image className={`absolute top-16 opacity-30 hidden sm:block ${isArabic ? "right-10" : "left-10"}`} src="/service/odoo.png" alt="..." width={200} height={20} /> */}
                        <Image className={`absolute top-16 opacity-30 hidden sm:block ${isArabic ? "right-10" : "left-10"}`} src="/service/odoo.png" alt="..." width={200} height={20} />
                        <Image className={`absolute top-96 hidden sm:block ${isArabic ? "right-2" : "left-2"}`} src="/service/react.png" alt="..." width={200} height={20} />
                        <Image className={`absolute top-60 opacity-30 hidden sm:block ${isArabic ? "lg:right-60 xl:right-48 2xl:right-80" : "lg:left-60 xl:left-48 2xl:left-80"}`} src="/service/bootstrap.png" alt="..." width={250} height={20} />
                        <Image className={`absolute top-20 opacity-30 hidden sm:block ${isArabic ? "left-96" : "right-96"}`} src="/service/AI.png" alt="..." width={100} height={20} />
                        <Image className={`absolute top-32 opacity-30 hidden sm:block ${isArabic ? "left-52" : "right-52"}`} src="/service/python.png" alt="..." width={100} height={20} />
                        <Image className={`absolute top-24 hidden sm:block ${isArabic ? "left-2" : "right-2"}`} src="/service/Group 7.png" alt="..." width={120} height={20} />
                        <Image className={`absolute hidden sm:block ${isArabic ? "lg:right-10 xl:mt-10 xl:right-10 2xl:right-44 top-[42rem] lg:top-[45rem] xl:top-[42rem]" : "lg:left-10 xl:mt-10 xl:left-10 2xl:left-44 top-[42rem] lg:top-[45rem] xl:top-[45rem]"}`} src="/service/Group 8.png" alt="..." width={300} height={20} />
                        <Image className={`absolute opacity-30 hidden sm:block ${isArabic ? "lg:right-[21rem] 2xl:right-[30rem] top-[42rem] xl:top-[44rem] lg:top-[45rem]" : "lg:left-[21rem] 2xl:left-[30rem] top-[42rem] xl:top-[48rem] lg:top-[45rem]"}`} src="/service/javascript.png" alt="..." width={100} height={20} />
                        <div className="max-w-screen-2xl mx-auto">
                            <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold pt-16 sm:pt-20">
                                {t('title')}
                            </h1>
                            <div className="flex flex-wrap justify-center items-center">
                                <div className="w-full lg:w-2/4 md:pt-0">
                                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold">{t('title0')}</h1>
                                    <p className={`mt-4 sm:mt-6 text-lg font-extrabold sm:text-xl lg:text-2xl text-justify pb-5 lg:pb-0 ${isArabic ? "md:ml-10" : "md:mr-10"}`}>
                                        {t('description')}
                                    </p>
                                </div>
                                <div className="w-full lg:w-2/4 lg:pt-16 xl:pt-20">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                                        {services.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className={`bg-white rounded-md shadow-2xl p-4 text-black ${index === 0 ? "lg:mb-16" : index === 1 ? "lg:mt-16" : index === 2 ? "lg:-mt-16 lg:mb-16" : "mt-0"}`}
                                                >
                                                <div className="flex justify-between">
                                                    <div className="flex justify-center items-center mt-2">
                                                        <Image src={item.image} alt="..." height={10} width={60} />
                                                    </div>
                                                </div>
                                                <div className="mt-4 font-extrabold text-lg">
                                                    <h1>{item.id}. {item.title}</h1>
                                                </div>
                                                <div className="mt-4 lg:text-sm xl:text-lg font-semibold">
                                                    <p className="text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg
                        className="absolute bottom-0 left-0 w-full md:-mb-1"
                        viewBox="0 0 1440 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#F9FAFB"
                            d="M0,95 C800,70 800,70 1500,100 L1500,100 L0,100 Z"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Service