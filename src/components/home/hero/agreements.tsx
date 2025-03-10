import { useTranslations } from "next-intl";
import Link from "next/link";

const Agreements = () => {
    const t = useTranslations("Agreements")
    return (
        <div className="py-12">
            <h1 className="text-center text-3xl lg:text-5xl text-primary font-extrabold">{t('title')}</h1>
            <div className="bg-white pt-20 pb-16 rounded-xl mt-12">
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="font-extrabold text-2xl lg:text-4xl">
                            {t('title1')}
                        </h1>
                        <p className="mt-5 text-lg lg:text-xl">
                            {t('description')}
                        </p>
                        <p className="mt-5 text-lg lg:text-xl">
                            {t('description1')}
                        </p>
                        <div className="flex justify-center items-center mt-8">
                            <Link href="#" className="py-2 px-4 border border-primary rounded-md font-bold text-primary">{t('more')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agreements