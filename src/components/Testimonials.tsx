/* eslint-disable @next/next/no-img-element */

"use client";

import { HallmarkingData, TestimonialsData } from "@/database/data";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

export default function Testimonials() {
    return (
        <div className="bg-[#f4f4f4] py-[80px] px-[16px] w-full text-center">
            <div className="relative max-w-2xl mx-auto px-4">
                <button
                    className="absolute left-0 top-1/2 cursor-pointer text-gray-300 text-4xl"
                >
                    <HiChevronLeft />
                </button>

                <div className="text-center px-[30px]">
                    <p className="text-[clamp(19px,2.5vw,24px)] font-[NeueHaas] italic leading-7 max-w-[400px] mx-auto">
                        &quot;{TestimonialsData[0].desc}&quot;
                    </p>
                    <p className="mt-2 text-[12px]">{TestimonialsData[0].title}</p>
                </div>

                <button
                    className="absolute right-0 top-1/2 cursor-pointer text-gray-300 text-4xl"
                >
                    <HiChevronRight />
                </button>
            </div>

            <div className="relative mt-12 w-full overflow-hidden flex justify-center items-center">
                <div className="flex gap-[100px] min-w-max">
                    {TestimonialsData.map((item, i) => (
                        <img
                            loading="lazy"
                            key={i}
                            src={item.logo}
                            alt={item.title}
                            className={`h-4 md:h-8 transition duration-300 ${i === 2 ? "grayscale-0 opacity-100" : "grayscale opacity-50"
                                }`}
                            style={{ flexShrink: 0 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function HallmarkMarks() {
    return (
        <div className="relative bg-white py-[60px] px-0 sm:px-[60px] overflow-hidden">
            <div className="absolute left-5 sm:left-15 top-0 bottom-0 w-0 sm:w-30 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

            <div className="absolute right-5 sm:right-15 top-0 bottom-0 w-0 sm:w-30 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

            <div className="flex gap-18 overflow-x-auto cursor-grab select-none scrollbar-hidden px-10">
                {HallmarkingData.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 p-4 flex items-start gap-4"
                    >
                        <img loading="lazy"
                            src={item.logo}
                            alt={item.title}
                            className="w-12 h-12 object-contain"
                        />
                        <div className="min-w-auto">
                            <h3 className="text-[13px] font-bold text-black uppercase">{item.title}</h3>
                            <p className="text-[13px] font-semibold text-gray-800">{item.desc}</p>
                            <a
                                href="#"
                                className="text-[13px] underline inline-block"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

