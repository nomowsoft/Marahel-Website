'use client';
import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { toast } from 'react-toastify';

export const ContacUs = () => {
  const t = useTranslations('ContactUs')
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const website = 'marahel';
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) =>
    /^\d/.test(phone);

  const handleContactUs = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !title || !message) {
      toast.error(t('filerequired'));
      return;
    }
    if (!isValidEmail(email)) {
      toast.error(t('invalidEmail'));
      return;
    }

    if (!isValidPhone(phone)) {
      toast.error(t('invalidPhone'));
      return;
    }
    const res = await fetch('/api/contact_us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        phone,
        title,
        website
      }),
    });

    if (res.ok) {
      setShowModal(true);
      setName('');
      setEmail('');
      setPhone('');
      setTitle('');
      setMessage('');
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);
  return (
    <section className="lg:-mb-32 2xl:-mb-56 lg:relative">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white shadow-2xl rounded-lg py-6 px-10">
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
            <form onSubmit={handleContactUs}>
              <div className="py-2">
                <input
                  type="text"
                  className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                  placeholder={t('name')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                    <Image height={20} width={20} src={`${isArabic ? "/hero/Paper.png" : "/hero/Vector.png"}`} alt="phone" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      {
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
        <div className="relative bg-white rounded-2xl px-6 py-8 w-full max-w-sm text-center shadow-xl">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 left-4 text-primary text-2xl font-bold"
          >
            <Image src="/contact_us/X.svg" alt="..." width={30} height={20} />
          </button>
          <h2 className="text-xl font-bold text-primary mb-2 mt-7">{t('successTitle')}</h2>
          <p className="text-gray-700 mb-6">
            {t('success')}
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="bg-primary text-white px-6 py-2 rounded-xl transition"
          >
            {t('ok')}
          </button>
        </div>
      </div>
    )
  }
    </section >
  )
}
