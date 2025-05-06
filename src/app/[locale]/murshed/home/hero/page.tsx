"use client";
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { useEffect } from 'react';

declare global {
    interface Window {
        chatwootSDK: {
            run: (config: {
                websiteToken: string;
                baseUrl: string;
                containerId: string;
                type: string;
                launcherTitle?: string;
            }) => void;
        };
    }
}

const Hero = () => {
    const t = useTranslations("HeroMurshed");
    useEffect(() => {
        (function (d, t) {
            const BASE_URL = "https://murshed.marahel.innovalcon.com";
            const g = d.createElement(t) as HTMLScriptElement;
            const s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode?.insertBefore(g, s);
            g.onload = function () {
                window.chatwootSDK.run({
                    websiteToken: 'YXMg7m1bPppGcYfipZKeqkLN',
                    baseUrl: BASE_URL,
                    containerId: 'chat-container',
                    type: 'expanded_bubble',
                    launcherTitle: 'ChatGPT Assistant',
                });
            };
        })(document, "script");
    }, []);
    return (
        <section className="bg-murshed_hero bg-contain bg-no-repeat bg-right lg:p-10">
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-16">
                <div className="grid grid-cols-12 items-center">
                    <div className="lg:col-span-7 col-span-12 lg:pr-10 text-center lg:text-start">
                        <h1 className="text-2xl md:text-3xl xl:text-5xl font-extrabold text-primary leading-tight">
                            {t('title')}
                        </h1>
                        <h2 className="text-xl md:text-2xl xl:text-3xl font-extrabold text-primary mt-6">
                            {t('title1')}
                        </h2>
                        <p className="text-lg xl:text-2xl text-gray-600 mt-4 leading-relaxed">
                            {t('description1')}
                        </p>
                        <div className="mt-10 rounded-2xl bg-info text-white py-6 px-6 text-center">
                            <p className="text-primary text-lg xl:text-2xl font-extrabold">
                                {t('description2')}
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5 col-span-12 flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <Image src="/murshed/murshed.svg" alt="..." width={700} height={20} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;