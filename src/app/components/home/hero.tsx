import Image from "next/image"
import Link from "next/link"
import { values } from "@/app/utils/data"

const Hero = () => {
  return (
    <section className="bg-hero bg-cover bg-no-repeat">
        <div className="py-12 mx-5 md:mx-20">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7 flex justify-center items-center">
                    <div className="">
                        <h1 className="text-primary text-3xl lg:text-5xl xl:text-7xl font-extrabold">مراحــــل الرقميــــــة</h1>
                        <p className="text-xl lg:text-xl xl:text-3xl mt-10 font-normal text-justify lg:ml-20">
                        شركة سعودية تقنية مقرها الرياض، وهي امتداد لخبرة مؤسسيها في مجال الاستشارات التقنية والتحول الرقمي.
                        </p>
                        <div className="mt-10">
                            <button className="mx-2 bg-primary border border-primary py-3 px-4 rounded-md flex justify-center items-center">
                                <span className="mx-2 text-lg text-white">
                                تعرف على مزيد من التفاصيل
                                </span> 
                                    <Image height={20} width={20}  src="/hero/Paper.png"
                                    alt="phone" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5 flex justify-center items-center">
                    <Image src="/hero/OBJECTS.png" alt="..." width={1000} height={10} />
                </div>
            </div>
            <div className="py-12">
                <h1 className="text-center text-5xl text-primary font-extrabold">الإتفاقيات</h1>
                <div className="bg-white pt-20 pb-16 rounded-xl mt-12">
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="font-extrabold text-4xl">
                                اتفاقيــة تنفيذ بوت الدردشــة
                            </h1>
                            <h1 className="font-extrabold  text-4xl">
                            (مُــرشد)
                            </h1>
                            <p className="mt-5 text-xl">
                            لعدد ٥٠ جمعية
                            </p>
                            <p className="mt-5 text-xl">
                            المبادرة بدعم ورعاية أوقاف نوره الملاحي
                            </p>
                            <div className="flex  justify-center items-center mt-8">
                                <Link href="#" className="py-2 px-4 border border-primary rounded-md font-bold text-primary">المزيد</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <h1 className="text-center text-3xl lg:text-5xl text-primary font-extrabold">قيمنا</h1>
                <p className="text-gray-500 text-center text-xl mt-5">
                نؤمن بأن نجاحنا يعتمد على التزامنا بمجموعة من القيم الأساسية التي تشكل جوهر عملنا وتوجه استراتيجياتنا:
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                    {values?.map((item) => (
                        <div className="bg-gray-100 rounded-md mx:w-1/2 lg:w-1/5 p-4 h-80" key={item.id}>
                            <div className="flex justify-between">
                                <div className="bg-white rounded-md flex justify-center items-center p-2 mt-2">
                                    <Image src={item.image} alt="" height={10} width={50} />
                                </div>
                                <div className="flex justify-center items-center p-2 -mt-10">
                                    <Image src={item.number_image} alt="" height={10} width={40} />
                                </div>
                            </div>
                            <div className="mt-4 font-extrabold text-2xl">
                                <h1>
                                    {item.title}
                                </h1>
                                <Image src="/hero/Group 21.png" alt="" height={10} width={100} className="mt-4" />
                            </div>
                            <div className="mt-4 font-extrabold text-lg text-justify">
                                <p className="text-gray-500 ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero