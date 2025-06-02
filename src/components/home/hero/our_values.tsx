import Image from "next/image";
import { getValues } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";


const OurValues = () => {
    const t = useTranslations('OurValues');
    const values = getValues(t);
    const locale = useLocale();
    const heightClass = locale === 'ar' ? "h-80" : "h-96";
    return (
        <div className="py-12">
            <h1 className="text-center text-3xl lg:text-5xl 2xl:text-6xl text-primary font-extrabold">{t('title')}</h1>
            <p className="text-gray-500 text-center text-lg lg:text-2xl mt-5 lg:max-w-screen-md lg:mx-auto">
                {t('description')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                {values?.map((item) => (
                    <div className={`bg-gray-100 rounded-md w-full md:w-1/2 lg:w-1/5 p-4 ${heightClass}`} key={item.id}>
                        <div className="flex justify-between">
                            <div className="bg-white rounded-md flex justify-center items-center p-2 mt-2">
                                <Image src={item.image} alt="" height={10} width={50} />
                            </div>
                            <div className="flex justify-center items-center p-2 -mt-10">
                                <Image src={item.number_image} alt="" height={10} width={40} />
                            </div>
                        </div>
                        <div className="mt-4 font-extrabold text-xl lg:text-2xl">
                            <h1>
                                {item.title}
                            </h1>
                            <Image src="/hero/Group 21.png" alt="" height={10} width={100} className="mt-4" />
                        </div>
                        <div className="mt-4 font-extrabold text-lg text-justify">
                            <p className="text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurValues