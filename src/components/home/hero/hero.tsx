import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Agreements from "./agreements";

const Hero = () => {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const isArabic = locale === 'ar'
  return (
    <section className="bg-hero bg-cover bg-no-repeat pt-2">
        <div className="py-12 mx-5 md:mx-20">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-7 flex justify-center items-center">
                    <div>
                        <h1 className="text-primary text-3xl lg:text-5xl 2xl:text-6xl font-extrabold font-jf">{t('title')}</h1>
                        <p className={`text-xl lg:text-2xl 2npxl:text-3xl font-black mt-10 lg:text-right font-js ${isArabic ? 'xl:ml-56' : ''}`} dir={isArabic ? "rtl" : "ltr"}>
                        {t('description')}
                        </p>
                        <div className="mt-10">
                            <a href="#works" className="mx-2 bg-primary border border-primary py-3 px-4 rounded-md flex justify-center items-center lg:w-1/2">
                                <span className="mx-2 text-lg lg:text-xl 2xl:text-xl font-extrabold text-white">
                                {t('title_button')}
                                </span>
                                <Image height={20} width={25} src={`${ isArabic ? "/hero/Paper.png" : "/hero/Vector.png"}`} alt="phone" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5 flex justify-center items-center">
                    <Image src="/hero/OBJECTS.svg" alt="..." width={1000} height={10} />
                </div>
            </div>
            <Agreements />
            {/* TO DOO OUR VALUES  */}
        </div>
    </section>
  )
}

export default Hero