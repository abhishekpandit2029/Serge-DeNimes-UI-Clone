/* eslint-disable @next/next/no-img-element */

"use client"

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscMenu } from "react-icons/vsc";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY) {
                setScrollDir("down");
            } else {
                setScrollDir("up");
            }

            if (currentY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentY > 300) {
                setShowCategories(true);
            } else {
                setShowCategories(false);
            }

            lastScrollY = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-black text-white text-[10px] text-center py-1 font-semibold tracking-wide">
                AW25 MODERN RODEO - NOW LIVE
            </div>

            <div
                className={`transition-all duration-300 flex items-center justify-between p-4 ${scrolled ? "bg-white shadow" : "bg-transparent"
                    }`}
            >
                <div className={`w-1/4 text-2xl font-semibold ${scrolled ? "text-black" : "text-white"
                    }`}><VscMenu /></div>
                <div className="w-2/4 flex items-center justify-center">
                    <h1
                        className={`hidden md:block text-[22px] font-semibold ${scrolled ? "text-black" : "text-white"}`}
                    >
                        SERGE DENIMES
                    </h1>
                    <img loading="lazy"
                        src={scrolled ? "/snapshots/logo.svg" : "/snapshots/logoWhite.svg"}
                        alt="SERGE DENIMES"
                        className="block md:hidden w-[18px] text-white" // Adjust width as needed
                    />
                </div>
                <div className={`w-1/4 flex justify-end gap-4 text-xl ${scrolled ? " text-black" : "text-white"}`}>
                    <span><CiSearch /></span>
                    <span><HiOutlineShoppingBag /></span>
                </div>
            </div>

            {showCategories && scrollDir === "down" && (
                <div className="hidden md:block bg-white shadow-md text-center py-2 text-[12px] font-[400] tracking-wide">
                    <div className="flex items-center justify-center space-x-6 overflow-x-auto px-4">
                        <span>SHOP ALL</span>
                        <span>NEW IN</span>
                        <span>BEST SELLERS</span>
                        <span>SHOP GOLD</span>
                        <span>SHOP SILVER</span>
                        <span>PERLE</span>
                        <span>MODERN RODEO</span>
                    </div>
                </div>
            )}

        </header>
    );
};
