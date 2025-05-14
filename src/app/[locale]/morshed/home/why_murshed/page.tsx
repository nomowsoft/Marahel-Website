import Image from "next/image"
import { useTranslations } from "next-intl";
import { getWhyMurshed } from "@/utils/data";

const WhyMurshed = () => {
    const t = useTranslations("WhyMurshed");
    const whymurshed = getWhyMurshed(t);
    return (
        <section className="bg-why_murshed bg-cover bg-center bg-no-repeat py-32">
            <div className="px-5 bg-why_murshed2 bg-no-repeat bg-contain bg-center">
                <div className="text-center mb-16 max-w-screen-2xl lg:mx-auto mx-20">
                    <h1 className="text-primary text-2xl md:text-3xl xl:text-5xl font-bold">
                        {t('title')}
                    </h1>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-8 max-w-screen-2xl lg:mx-auto md:mx-20">
                    {whymurshed.map((item, index) => (
                        <div key={index} className="shadow-xl bg-white p-6 rounded-lg md:h-72 lg:h-80 xl:h-64">
                            <div className="flex justify-center">
                                <Image src={item.image} alt="..." width={100} height={20} />
                            </div>
                            <h1 className="text-primary text-center text-xl lg:text-2xl mt-6 font-extrabold">
                                {item.title}
                            </h1>
                            <p className="text-center text-lg mt-4 text-gray-800">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyMurshed