import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export const ContacUs = () => {
  const t = useTranslations('ContactUs')
  const locale = useLocale();
  const isArabic = locale === 'ar';
  return (
    <section className="lg:-mb-72 xl:-mb-80 2xl:-mb-96 lg:relative">
      <div className="lg:max-w-screen-lg mb-3 mx-8 lg:mx-auto">
        <div className="bg-white shadow-2xl rounded-lg py-20 px-10">
          <h1 className="text-primary text-center text-4xl font-extrabold">{t('title')}</h1>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="py-10">
              <div className="flex items-center py-5 px-6 shadow-xl rounded-xl">
                <div className="flex justify-center items-center bg-primary p-2 rounded-md">
                  <Image src="/contact_us/location.svg" alt="..." width={35} height={20} />
                </div>
                <div className="mx-3 font-js">
                  <h1 className="text-xl font-extrabold">{t('location')}</h1>
                  <p>
                    8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA 
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5 px-6">
                <div className="flex justify-center items-center bg-secondary p-2 rounded-md">
                  <Image src="/contact_us/email.svg" alt="..." width={35} height={20} />
                </div>
                <div className="mx-3 font-js">
                  <h1 className="text-xl font-extrabold">{t('email')}</h1>
                  <p>
                    info@marahel.com.sa
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5 px-6">
                <div className="flex justify-center items-center bg-secondary p-2 rounded-md">
                  <Image src="/contact_us/phonef.svg" alt="..." width={35} height={20} />
                </div>
                <div className="mx-3 font-js">
                  <h1 className="text-xl font-extrabold">{t('phone')}</h1>
                  <p dir="rtl">
                    947 377 548 966+
                  </p>
                </div>
              </div>
            </div>
            <div className="py-10">
              <form>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('name')}
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('email')}
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('phone')}
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('address')}
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('message')}
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <button
                      type="submit"
                      className="mx-2 bg-primary border border-primary py-2 px-2 w-32 rounded-md flex justify-center items-center"
                      >
                      <span className="mx-2 text-lg text-white">
                          {t('send')}
                      </span> 
                      <div className="flex justify-center items-center">
                         <Image height={20} width={20} src={`${ isArabic ? "/hero/Paper.png" : "/hero/Vector.png"}`} alt="phone" />
                      </div> 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
