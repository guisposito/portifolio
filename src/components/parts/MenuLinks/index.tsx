import React from "react";
import Link from "next/link";

interface MenuItemProps {
    title: string;
    link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, link }) => {
    return (
        <li className="mx-3 ">
            <Link className="text-white hover:opacity-75 transition-all delay-75" href={link}>{title}</Link>
        </li>
    );
};

export default MenuItem;