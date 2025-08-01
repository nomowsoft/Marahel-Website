'use client';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from "next-intl";
import Image from "next/image";

const Contactus = () => {
  const t = useTranslations('ContactUs')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const website = 'murshed';

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, phone, title, website }),
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
    <section className="py-10 lg:py-32">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-gray-200 shadow-2xl rounded-lg py-6 px-10">
          <h1 className="text-primary text-center text-4xl font-extrabold mb-4 lg:mb-10 font-jf">{t('title')}</h1>
          <form onSubmit={handleContactUs}>
            <div className="grid grid-cols-12 gap-4">
              <div className="py-2 col-span-12 lg:col-span-6">
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl 
                              placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-12 px-5 
                              focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                              hover:border-b-primary transition-all"
                  placeholder={t('name')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="py-2 col-span-12 lg:col-span-6">
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl 
                              placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-12 px-5 
                              focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                              hover:border-b-primary transition-all"
                  placeholder={t('email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-2 col-span-12 lg:col-span-6">
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl 
                              placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-12 px-5 
                              focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                              hover:border-b-primary transition-all"
                  placeholder={t('phone')}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="py-2 col-span-12 lg:col-span-6">
                <input
                  type="text"
                  className="border border-gray-500 rounded-xl 
                              placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-12 px-5 
                              focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                              hover:border-b-primary transition-all"
                  placeholder={t('address')}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="py-2 col-span-12 lg:col-span-122">
                <textarea
                  className="border border-gray-500 rounded-xl 
                            placeholder:text-gray-500 text-gray-500 text-xl font-bold font-js w-full h-32 px-5 py-3 
                            focus:outline-none focus:border-b-primary focus:placeholder:text-primary focus:text-primary
                            hover:border-b-primary transition-all resize-none"
                  placeholder={t('message')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="mx-2 bg-primary border border-primary py-2 px-2 w-32 rounded-md flex justify-center items-center"
              >
                <span className="mx-2 text-2xl font-jf text-white">
                  {t('send')}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
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
      )}

    </section>
  );
};

export default Contactus;
