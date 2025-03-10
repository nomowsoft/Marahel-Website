import Image from "next/image"
import { getService } from "@/utils/data";
import { useTranslations, useLocale } from "next-intl";

const Service = () => {
    const t = useTranslations('OurService');
    const services = getService(t);
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <section className="bg-primary lg:bg-transparent lg:bg-service bg-cover bg-no-repeat bg-center min-h-screen text-white">
            <div className="mx-2 md:mx-10 lg:mx-20">
                <h1 className="text-center text-3xl lg:text-5xl font-extrabold pt-20 xl:pt-32">{t('title')}</h1>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full lg:w-1/3 pt-10 md:pt-0">
                        <h1 className="text-2xl lg:text-4xl  font-extrabold">{t('title0')}</h1>
                        <p className={`mt-6 text-xl text-justify pb-5 lg:pb-0 ${isArabic ? "md:ml-10" : "md:mr-10" }`}>
                            {t('description')}
                        </p>
                        <div className="pb-24 hidden lg:block">
                            <Image src="/service/Group 8.png" alt="..." height={10} width={250} />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 lg:pt-24 xl:pt-32">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {services.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`bg-white h-72 rounded-md shadow-2xl p-4 text-black ${index === 1 ? "lg:mt-16" : index === 2 ? "lg:-mt-16" : "mt-0"}`}
                                >
                                    <div className="flex justify-between">
                                        <div className="flex justify-center items-center mt-2">
                                            <Image src={item.image} alt="..." height={10} width={60} />
                                        </div>
                                    </div>
                                    <div className="mt-4 font-extrabold xl:text-2xl">
                                        <h1>{item.id}. {item.title}</h1>
                                    </div>
                                    <div className="mt-4 font-extrabold text-justify line-clamp-3">
                                        <p className="text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service