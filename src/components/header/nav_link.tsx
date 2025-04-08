import { useLocale } from "next-intl";
import Navitem from "./nav_item";

const menuItems = [
    { name: "الرئسية", nameen:"Home", href: "/", isActive: true },
    { name: "مرشد", nameen:"Murshed", href: "/murshed", isActive: false },
];
const Navlink = () => {
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <ul className="flex flex-col mt-4 lg:flex-row lg:mt-0 mx-5 lg:mx-6 xl:mx-6">
            {menuItems.map((item) => (
                <Navitem
                    name={isArabic ? item.name : item.nameen}
                    key={item.name}
                    href={`/${locale}${item.href}`}
                />
            ))}
        </ul>
    )
}

export default Navlink