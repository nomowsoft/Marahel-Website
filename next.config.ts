import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: "https://support.marahel.sa",
    },
    // images: {
    // domains: ["example.com"],
    // },
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "marahel.com.sa",
            },
        ],
    },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);