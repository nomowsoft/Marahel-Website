'use client';
import { useTranslations } from "next-intl";
import { getPrivacyPolicy } from '@/utils/data';

const PrivacyPolicy = () => {
  const t = useTranslations('MurshedPrivacyPolicy')
  const privacypolicy = getPrivacyPolicy(t);
  return (
    <section className="py-10 lg:py-20">
      <div className="mx-4 lg:max-w-screen-2xl lg:mx-auto">
        <h1 className="text-center text-3xl lg:text-5xl font-jf text-primary font-semibold">
          {t('title')}
        </h1>
        <p className="mt-6 text-xl lg:text-2xl leading-relaxed text-center justify-center text-gray-500 font-bold font-js">
          {t('description')}
        </p>
      </div>
      <div className="mx-4 lg:max-w-screen-2xl lg:mx-auto mt-10 lg:mt-20">
        {privacypolicy.map((item, index) => (
          <div key={item.id} className="mt-3">
            <h1 className="text-primary font-jf text-xl lg:text-2xl">
              {index + 1}. {item.title}
            </h1>
             <p className="whitespace-pre-line leading-loose lg:text-xl font-js font-bold text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
