import { useLocale } from 'next-intl';
import SocialMedia from './social_media';
import Link from 'next/link';

export default function FooterMurshed() {
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <section>
            <footer className="bg-white px-5 lg:px-20">
                <div className='bg-primary px-5 lg:px-20 pt-8'>
                    <div className="lg:flex justify-between">
                        <div className="text-center">
                            <h1 className="text-white text-3xl font-extrabold">Morshed</h1>
                        </div>
                        <div className="text-center mt-10 lg:mt-0 flex justify-between items-center">
                            <Link href="/" className="mx-4">
                                <h1 className="text-white text-2xl font-extrabold">
                                {isArabic ? "الرئيسية" : "Home"}
                                </h1>
                            </Link>
                            <Link href="/morshed/privacy&policy" className="text-white text-xl font-extrabold">
                                {isArabic ? "الخصوصية والأمان" : "Privacy Policy"}
                            </Link>
                        </div>
                    </div>
                    <hr className='mt-8'/>
                    <div className='lg:flex justify-between items-center mt-5'>
                        <div>
                            <SocialMedia />
                        </div>
                        <div className='mt-5 lg:mt-0'>
                            <p className="text-center text-xl pb-5 text-white">
                                {isArabic ? "© 2025 جميع الحقوق محفوظة لشركة مراحل." : "© 2025 All rights reserved Marahel."}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
