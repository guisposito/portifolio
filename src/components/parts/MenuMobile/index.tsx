"use client";

import React, {useState} from "react";
import Link from "next/link";

interface MenuItemProps {
    menuItems: {title: string;
        link: string;
    }[];
}

const MenuMobile: React.FC<MenuItemProps> = ({menuItems}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="lg:hidden ">
            <button className="text-white text-xl p-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>{isOpen ? " ✕ " :  " ☰ "} </button>
            <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
                    } overflow-hidden
                    `}>
                {isOpen &&(
                    <ul className="absolute top-[60px] my-2 py-3 px-2 left-0 w-full rounded-lg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
                        {menuItems.map((item) => (
                            <li key={item.title} className="text-white px-2 py-2 text-sm">
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>   
                )}
            </div>
        </div>
    );
};

export default MenuMobile;