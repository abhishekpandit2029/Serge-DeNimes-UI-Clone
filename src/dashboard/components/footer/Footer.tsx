/* eslint-disable @next/next/no-img-element */

import { FooterData } from "@/database/data";

export default function Footer() {
    const socialIcons = FooterData[5].subItems;
    return (
        <footer
            className="w-full min-h-[28rem] p-20 bg-[#f3f3f3] font-semibold border-1 border-t-gray-400"
        >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {FooterData.slice(0, 5).map((item, index) => (
                    <div key={index}>
                        <h3 className="text-[13px] font-semibold uppercase mb-2">{item.heading}</h3>
                        <ul className="space-y-1">
                            {item.subItems.map((subItem, subIndex) => (
                                <li
                                    key={subIndex}
                                    className="text-[12px] text-black cursor-pointer"
                                >
                                    {subItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Social Icons */}
                <div className="flex space-x-4 items-start mt-6 lg:mt-0">
                    {socialIcons.map((icon, index) => (
                        <a key={index} href="#" aria-label={`Social ${index}`}>
                            <img src={icon} alt={`social-${index}`} className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>


            <div className="mt-30 text-xs text-black">
                ©2025 Serge DeNimes. All Rights Reserved.
            </div>
        </footer>
    );
};
