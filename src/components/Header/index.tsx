import React from "react";
import Image from "next/image";
import MenuItem from "../parts/MenuLinks";
import MenuMobile from  "../parts/MenuMobile";
import menuItems from "../../data/menu-links.json";

const Header = () => {
    return (
        <div className="fixed top-0 left-auto w-full shadow-md z-10">
            <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
                <div className="main-menu lg:w-2/3 w-full px-2 flex justify-between lg:justify-around items-center rounded-lg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
                    <div className="logo">
                        <a href="/">
                            <Image src="/logosvg.svg" width={175} height={30} alt="logo"/>
                        </a>
                    </div>
                    <div className="menu-desktop hidden lg:block">
                        <ul className="flex flex-row p-4">
                            {menuItems.menuItemsLinks.map((item) => (
                                <MenuItem key={item.title} title={item.title} link={item.link} />
                            ))}
                        </ul>
                    </div>
                    <MenuMobile menuItems={menuItems.menuItemsLinks} />
                </div>
            </nav>
        </div>
    )
}

export default Header