import { useLocale } from "next-intl";
import Navitem from "./nav_item";

const menuItems = [
    { name: "الرئسية", nameen:"Home", href: "/", isActive: true },
];
const Navlink = () => {
    const locale = useLocale();
    const isArabic = locale === 'ar';
    return (
        <ul className="flex flex-col mt-4 lg:flex-row lg:mt-0 mx-5 lg:mx-10 xl:mx-14">
            {menuItems.map((item) => (
                <Navitem
                    name={isArabic ? item.name : item.nameen}
                    key={item.name}
                    href={item.href}
                />
            ))}
        </ul>
    )
}

export default Navlink