import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Work = () => {
    const t = useTranslations("WorkMurshed");
    return (
        <section>
            <div className="py-16 bg-transparent">
                <div className="grid grid-cols-12 max-w-screen-2xl mx-auto ">
                    <div className="lg:col-span-5 col-span-12 max-w-screen-lg">
                        <div className="flex justify-center lg:justify-start items-center">
                            <Image src="/murshed/content.svg" alt="..." width={700} height={20} />
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12 max-w-screen-2xl xl:mx-auto mx-10">
                        <div className="">
                            <h1 className="text-center text-primary text-2xl md:text-3xl xl:text-4xl font-extrabold">
                                {t('title')}
                            </h1>
                            <p className="mt-8 md:text-xl xl:text-2xl text-center">
                                {t('description')}
                            </p>
                        </div>
                        <div className="mt-20">
                            <h1 className="text-center text-primary text-2xl md:text-3xl xl:text-4xl font-extrabold">
                                {t('title0')}
                            </h1>
                            <p className="mt-8 md:text-xl xl:text-2xl text-center">
                                {t('description1')}                           
                            </p>
                        </div>
                        <div className="mt-20">
                            <h1 className="text-center text-primary text-2xl md:text-3xl xl:text-4xl font-extrabold">
                                {t('title1')}
                            </h1>
                            <div className="bg-white mt-2 py-6 xl:px-10
                             shadow-lg lg:flex justify-between items-center rounded-2xl">
                                <div className="px-5">
                                    <p className="md:text-xl xl:text-2xl text-gray-500">
                                        {t('description2')}                          
                                    </p>
                                </div>
                                <div className="px-5 xl:px-14 mt-6 lg:mt-0">
                                    <Link href="#">
                                        <div className="flex justify-between items-center border border-primary bg-primary text-white py-1 px-4 lg:px-6 rounded-2xl md:text-xl lg:text-2xl text-center"> 
                                            <div>
                                                <p>
                                                    {t('textbutton')}
                                                </p>
                                            </div>
                                            <Image src="/murshed/contact_us_image.png" alt="" width={30} height={20} className="mt-2" /> 
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work