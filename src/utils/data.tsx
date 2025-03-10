import { Values, Works, CustmerPartner, Service } from "./types";

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
        image: "/works/w1.png",
    },
    {
        id: 2,
        description: t('title2'),
        image: "/works/w2.png",
    },
    {
        id: 3,
        description: t('title3'),
        image: "/works/w4.png",
    },
    {
        id: 4,
        description: t('title4'),
        image: "/works/w3.png",
    },
    {
        id: 5,
        description: t('title5'),
        image: "/works/w1.png",
    },
    {
        id: 6,
        description: t('title6'),
        image: "/works/w2.png",
    },
    {
        id: 7,
        description: t('title7'),
        image: "/works/w4.png",
    },
]
export const cutomerpartner: CustmerPartner[] = [
    {
        id: 1,
        image: "/customer_partner/Group 843.png",
    },
    {
        id: 2,
        image: "/customer_partner/Group 844.png",
    },
    {
        id: 3,
        image: "/customer_partner/Group 843.png",
    },
    {
        id: 4,
        image: "/customer_partner/Group 844.png",
    },
    {
        id: 5,
        image: "/customer_partner/Group 843.png",
    },
    {
        id: 6,
        image: "/customer_partner/Group 844.png",
    },
    {
        id: 7,
        image: "/customer_partner/Group 843.png",
    },
    {
        id: 8,
        image: "/customer_partner/Group 844.png",
    },
]
