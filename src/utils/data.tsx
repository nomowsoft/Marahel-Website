import { Values, Works, CustmerPartner, Service, Features, WhyMurshed, Agreements } from "./types";

export const getValues = (t: (key: string) => string): Values[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        image: "/hero/Security.png",
        number_image: "/hero/01.png",
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        image: "/hero/Black.png",
        number_image: "/hero/02.png",
    },
    {
        id: 3,
        title: t('title3'),
        description: t('description3'),
        image: "/hero/Black (1).png",
        number_image: "/hero/03.png",
    },
    {
        id: 4,
        title: t('title4'),
        description: t('description4'),
        image: "/hero/Black (2).png",
        number_image: "/hero/04.png",
    },
]

export const getService = (t: (key: string) => string): Service[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        image: "/service/Frame 44 (3).png"
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        image: "/service/Frame 44.png"
    },
    {
        id: 3,
        title: t('title3'),
        description: t('description3'),
        image: "/service/Frame 44 (1).png"
    },
    {
        id: 4,
        title: t('title4'),
        description: t('description4'),
        image: "/service/Frame 44 (2).png"
    }
];

export const getWorks = (t: (key: string) => string): Works[] => [
    {
        id: 1,
        description: t('title1'),
        image: "/works/what.png",
    },
    {
        id: 2,
        description: t('title2'),
        image: "/works/fintax.png",
    },
    {
        id: 3,
        description: t('title3'),
        image: "/works/reeal_estate.png",
    },
    {
        id: 4,
        description: t('title4'),
        image: "/works/what.png",
    },
    {
        id: 5,
        description: t('title5'),
        image: "/works/murshed.png",
    },
    {
        id: 6,
        description: t('title6'),
        image: "/works/fintax.png",
    },
    {
        id: 7,
        description: t('title7'),
        image: "/works/reeal_estate.png",
    },
]

export const getAgreements = (t: (key: string) => string): Agreements[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        description1: t('description11')
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        description1: t('description22')
    },
]
export const cutomerpartner: CustmerPartner[] = [
    {
        id: 1,
        image: "/customer_partner/Deef2 1.png",
    },
    {
        id: 2,
        image: "/customer_partner/RSSD2 1.png",
    },
    {
        id: 3,
        image: "/customer_partner/The National Company for Sulfur Products 1.png",
    },
    {
        id: 4,
        image: "/customer_partner/Deef2 1.png",
    },
    {
        id: 5,
        image: "/customer_partner/RSSD2 1.png",
    },
    {
        id: 6,
        image: "/customer_partner/The National Company for Sulfur Products 1.png",
    },
    {
        id: 7,
        image: "/customer_partner/Deef2 1.png",
    },
    {
        id: 8,
        image: "/customer_partner/RSSD2 1.png",
    },
]
// data for murshed

export const getFeatures = (t: (key: string) => string): Features[] =>  [
    {
        id: 1,
        image: "/murshed/f1.png",
        title: t('title1'),
        description: t('description'),
    },
    {
        id: 2,
        image: "/murshed/f2.png",
        title: t('title2'),
        description: t('description1'),
    },
    {
        id: 3,
        image: "/murshed/f3.png",
        title: t('title3'),
        description: t('description2'),
    },
    {
        id: 4,
        image: "/murshed/f4.png",
        title: t('title4'),
        description: t('description3'),
    },
]
export const getWhyMurshed = (t: (key: string) => string): WhyMurshed[] =>  [
    {
        id: 1,
        image: "/murshed/01.png",
        title: t('title1'),
        description: t('description1'),
    },
    {
        id: 2,
        image: "/murshed/02.png",
        title: t('title2'),
        description: t('description2'),
    },
    {
        id: 3,
        image: "/murshed/03.png",
        title: t('title3'),
        description: t('description3'),
    },
    {
        id: 4,
        image: "/murshed/04.png",
        title: t('title4'),
        description: t('description4'),
    },
    {
        id: 5,
        image: "/murshed/05.png",
        title: t('title5'),
        description: t('description5'),
    },
    {
        id: 6,
        image: "/murshed/06.png",
        title: t('title6'),
        description: t('description6'),
    },
]
