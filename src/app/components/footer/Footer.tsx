import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <section>
            <footer className="bg-primary lg:bg-transparent lg:bg-footer bg-cover lg:bg-cover bg-no-repeat lg:h-screen bg-center w-full py-8 lg:pt-56 px-5 lg:px-20">
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-12 xl:mt-20">
                        <div className="col-span-12 lg:col-span-6">
                            <Image src="/footer/marahel_logo.png" alt="..." width={250} height={10} />
                            <Image src="/footer/line1.png" alt="..." width={250} height={10} className="mt-3" />
                            <p className="text-white mt-5 text-justify lg:text-xl xl:text-2xl lg:ml-14">
                                بتسليط الضوء والتركيز بدقة على تقديم منتجات تقنية ورقمية تتسم بالإبداع والسلاسة مع توظيف فني وبديع للذكاء الاصطناعي (AI) مع المحافظة على مستوى عالٍ من الجودة لتقديم خدمات فريدة ومميزة لعملائنا.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-3 lg:mx-20 pt-10 lg:pt-0">
                            <h1 className="text-2xl xl:text-4xl text-white font-extrabold">الروابط</h1>
                            <Image src="/footer/line2.png" alt="..." width={100} height={10} className="mt-3" />
                            <div className="mt-5">
                                <Link href="/" className="text-white text-2xl xl:text-3xl">الرئيسية</Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 pt-10 lg:pt-0">
                            <h1 className="text-2xl xl:text-4xl text-white font-extrabold">تواصل معنا</h1>
                            <Image src="/footer/line2.png" alt="..." width={100} height={10} className="mt-3" />
                            <div className="mt-5">
                                <div className="flex items-center py-2 xl:px-6">
                                    <div className="flex justify-center ">
                                        <Image src="/footer/Button.png" className="" alt="..." width={32} height={20} />
                                    </div>
                                    <div className="mx-3 text-white">
                                        <h1 className="lg:text-lg xl:text-xl font-extrabold">الموقع</h1>
                                        <p className="text-sm">
                                            8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-6">
                                    <div className="flex justify-center items-center">
                                        <Image src="/footer/Button (1).png" alt="..." width={32} height={20} />
                                    </div>
                                    <div className="mx-3 text-white">
                                        <h1 className="font-extrabold lg:text-lg xl:text-xl">البريد الإلكتروني</h1>
                                        <p>
                                            info@marahel.com.sa
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center py-2 xl:px-6">
                                    <div className="flex justify-center items-center">
                                        <Image src="/footer/Button (2).png" alt="..." width={32} height={20} />
                                    </div>
                                    <div className="mx-3 text-white">
                                        <h1 className="lg:text-lg xl:text-xlfont-extrabold ">رقم الهاتف</h1>
                                        <p>
                                            242 710 546 966+
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <p className="text-center text-xl mx-10 pb-5 text-primary">
                2025 © جقوق الطبع محفوظة لشركة مراحل الرقمية
            </p>
        </section>
    )
}
