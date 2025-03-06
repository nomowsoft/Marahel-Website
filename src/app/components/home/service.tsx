import Image from "next/image"

const services = [
    {
        id: 1,
        title: "​التقييم",
        description: "نقدم خدمات التقييم لتحديد نقاط القوة والضعف في الأنظمة التقنية، مع تقديم تقارير تفصيلية وتوصيات للتحسين وفقًا لأفضل الممارسات.",
        image: "/service/Frame 44 (3).png"
    },
    {
        id: 2,
        title: "استشارات التحول الرقمي",
        description: "نساعد المؤسسات في تبني التقنيات الحديثة لتحسين الأداء وزيادة الكفاءة، من خلال وضع استراتيجيات رقمية مخصصة تلائم احتياجاتها.",
        image: "/service/Frame 44.png"
    },
    {
        id: 3,
        title: "التطوير التقني والخدمات التقنية",
        description: "نوفر حلولًا تقنية متكاملة تشمل تطوير البرمجيات، تحسين البنية التحتية الرقمية، وتقديم الدعم الفني لضمان تشغيل سلس وآمن.",
        image: "/service/Frame 44 (1).png"
    },
    {
        id: 4,
        title: "خدمة توفير الموار البشرية التقنية (عن بُعد - في مقر العميل)",
        description: "نقدم محترفين تقنيين مؤهلين لدعم مشاريعك، سواء عن بُعد أو في مقر عملك، لضمان تنفيذ المهام بكفاءة عالية وبتكلفة مناسبة.",
        image: "/service/Frame 44 (2).png"
    }
];

const Service = () => {
    return (
        <section className="bg-primary lg:bg-transparent lg:bg-service bg-cover bg-no-repeat bg-center min-h-screen text-white">
            <div className="mx-2 md:mx-10 lg:mx-20">
                <h1 className="text-center text-3xl lg:text-5xl font-extrabold pt-20 xl:pt-32">خدماتنا</h1>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full lg:w-1/3 pt-10 md:pt-0">
                        <h1 className="text-2xl lg:text-4xl  font-extrabold">نسعى دائمًـــا..</h1>
                        <p className="mt-6 text-xl text-justify md:ml-10 pb-5 lg:pb-0">
                            بتسليط الضوء والتركيز بدقة على تقديم منتجات تقنية ورقمية تتسم بالإبداع والسلاسة مع توظيف فني وبديع للذكاء الاصطناعي (AI) مع المحافظة على مستوى عالٍ من الجودة لتقديم خدمات فريدة ومميزة لعملائنا.
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