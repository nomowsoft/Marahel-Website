import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Agreements from "./agreements";
import OurValues from "./our_values";

const Hero = () => {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const isArabic = locale === 'ar'
  return (
    <section className="bg-hero bg-cover bg-no-repeat pt-32">
        <div className="py-12 mx-5 md:mx-20">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-7 flex justify-center items-center">
                    <div>
                        <h1 className="text-primary text-3xl lg:text-5xl xl:text-7xl font-extrabold">{t('title')}</h1>
                        <p className="text-xl lg:text-2xl xl:text-3xl mt-10 font-normal text-justify">
                        {t('description')}
                        </p>
                        <div className="mt-10">
                            <button className="mx-2 bg-primary border border-primary py-3 px-4 rounded-md flex justify-center items-center">
                                <span className="mx-2 text-lg text-white">
                                {t('title_button')}
                                </span>
                                <Image height={20} width={20} src={`${ isArabic ? "/hero/Paper.png" : "/hero/Vector.png"}`} alt="phone" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5 flex justify-center items-center">
                    <Image src="/hero/OBJECTS.png" alt="..." width={1000} height={10} />
                </div>
            </div>
            <Agreements />
            <OurValues />
        </div>
    </section>
  )
}

export default Hero