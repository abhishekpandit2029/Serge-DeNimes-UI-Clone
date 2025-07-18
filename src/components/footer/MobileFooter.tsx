/* eslint-disable @next/next/no-img-element */

"use client"

import { FooterData } from "@/database/data";
import { useState } from "react";

export default function MobileFooter() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const socialIcons = FooterData[5].subItems;

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#f3f3f3] text-black text-sm text-center">
            {FooterData.slice(0, 5).map((section, index) => (
                <div key={index} className="border-b border-b-gray-400">
                    <button
                        className="w-full text-[12px] font-[600] flex justify-between items-center px-5 py-4 uppercase"
                        onClick={() => toggleSection(index)}
                    >
                        <pre></pre>
                        {section.heading}
                        <span className="text-sm">{openIndex === index ? "-" : "+"}</span>
                    </button>

                    {openIndex === index && section.subItems.length > 0 && (
                        <div className="px-5 pb-4 space-y-2">
                            {section.subItems.map((link, i) => (
                                <div key={i} className="text-[13px] font-semibold text-black cursor-pointer">
                                    {link}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className="flex space-x-4 items-center justify-center mt-8 lg:mt-0">
                {socialIcons.map((icon, index) => (
                    <a key={index} href="#" aria-label={`Social ${index}`}>
                        <img loading="lazy" src={icon} alt={`social-${index}`} className="w-4 h-4" />
                    </a>
                ))}
            </div>

            <p className="text-center text-xs py-8 font-medium">
                ©2025 Serge DeNimes. All Rights Reserved.
            </p>
        </div>
    );
}