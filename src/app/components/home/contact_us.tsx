import Image from "next/image";
import Link from "next/link";

export const ContacUs = () => {
  return (
    <section className="-mt-96 hidden lg:block">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white shadow-2xl rounded-lg py-6 px-10">
          <h1 className="text-primary text-center text-4xl font-extrabold">تواصل معنا</h1>
          <div className="flex justify-center gap-8">
            <div className="py-10 lg:w-1/2">
              <div className="flex items-center py-5 px-6 shadow-xl rounded-xl">
                <div className="flex justify-center items-center bg-primary p-2 rounded-md">
                  <Image src="/contact_us/location.png" alt="..." width={30} height={20} />
                </div>
                <div className="mx-3">
                  <h1 className="text-xl font-extrabold">الموقع</h1>
                  <p>
                    8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5 px-6">
                <div className="flex justify-center items-center bg-secondary p-2 rounded-md">
                  <Image src="/contact_us/Email.png" alt="..." width={30} height={20} />
                </div>
                <div className="mx-3">
                  <h1 className="text-xl font-extrabold">البريد الإلكتروني</h1>
                  <p>
                    info@marahel.com.sa
                  </p>
                </div>
              </div>
              <div className="flex items-center py-5 px-6">
                <div className="flex justify-center items-center bg-secondary p-2 rounded-md">
                  <Image src="/contact_us/Phone.png" alt="..." width={30} height={20} />
                </div>
                <div className="mx-3">
                  <h1 className="text-xl font-extrabold">رقم الهاتف</h1>
                  <p>
                    242 710 546 966+
                  </p>
                </div>
              </div>
            </div>
            <div className="py-10 w-1/1 lg:w-1/2">
              <form>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder="الاسم"
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder="البريد الإلكتروني"
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder="رقم الهاتف"
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder="العنوان"
                  />
                </div>
                <div className="py-2">    
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder="الرسالة"
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <Link
                      href="/contact_us"
                      className="mx-2 bg-primary border border-primary py-2 px-2 w-32 rounded-md flex justify-center items-center"
                      >
                      <span className="mx-2 text-lg text-white">
                          أرسال 
                      </span> 
                      <div className="flex justify-center items-center">
                          <Image
                          height={0} width={20}  src="/hero/Paper.png"
                          alt="phone" />
                      </div> 
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
