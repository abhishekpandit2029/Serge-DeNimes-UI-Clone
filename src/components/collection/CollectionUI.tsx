/* eslint-disable @next/next/no-img-element */

import { ICollectionUIProps } from "@/utils/interface";

export default function CollectionUI({ image, alt, flipImage, title, price, isPerle = false }: ICollectionUIProps) {
    return (
        <div className="w-full group cursor-pointer">
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                {isPerle && <div className="absolute rounded-sm top-2 left-2 z-10 bg-black text-white text-[10px] font-semibold px-[5px] py-[2px] uppercase">
                    Perle
                </div>}
                <img loading="lazy"
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <img loading="lazy"
                    src={flipImage}
                    alt={`${alt} hover`}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
            </div>

            <div className="pt-2">
                <h1 className="text-[13px] font-semibold uppercase">{title}</h1>
                <p className="text-[13px] text-gray-600">{price}</p>
            </div>
        </div>
    );
}
