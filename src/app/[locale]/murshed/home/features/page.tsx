"use client";
import Image from "next/image";
import { getFeatures } from "@/utils/data";
import { useTranslations } from "next-intl";

const Features = () => {
    const t = useTranslations("FeaturesMurshed");
    const features = getFeatures(t);
    return (
        <section>
            <div className="lg:py-32 bg-transparent">
                <h1 className="text-center text-primary text-2xl md:text-3xl xl:text-4xl font-extrabold">
                    {t('title')}
                </h1>
                <p className="mt-4 text-lg lg:text-xl text-primary text-center font-extrabold">
                    {t('title0')}
                </p>
                <div className="grid grid-cols-12 mt-20 items-center max-w-screen-2xl xl:mx-auto mx-10">
                    <div className="grid md:grid-cols-2 gap-8 lg:col-span-7 col-span-12">
                         {features.map((item, index) => (
                            <div key={index} className="shadow-2xl bg-white p-6 rounded-2xl">
                                <div>
                                    <Image src={item.image} alt="..." width={50} height={20} />
                                </div>
                                <h1 className="text-primary text-lg md:text-xl mt-6 font-extrabold">
                                    {item.title}
                                </h1>
                                <p className="text-lg mt-4 text-gray-800">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-5 col-span-12">
                        <div className="flex justify-center lg:justify-end items-center">
                            <Image src="/murshed/Image.svg" alt="..." width={700} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features