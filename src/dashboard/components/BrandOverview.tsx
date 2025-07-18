import { IBrandOverviewProps } from "@/utils/interface";

export default function BrandOverview({ mobileImage, desktopImage, title, textColor, buttonTitle }: IBrandOverviewProps) {
    return (
        <div className="relative w-full h-[100vh] flex items-end justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center sm:hidden h-[100%] w-[100%]"
                style={{ backgroundImage: `url(${mobileImage})` }
                }
            ></div>
            <div
                className="absolute inset-0 bg-cover bg-center hidden sm:block"
                style={{ backgroundImage: `url(${desktopImage})` }}
            ></div>

            <div className={`relative text-center mb-10 text-${textColor} z-10`}>
                <h2 className="text-xl font-[NeueHaas] md:text-2xl mb-4">
                    {title}
                </h2>
                <button className={`border border-${textColor} px-5 py-[9px] text-[13px] font-semibold`}>
                    {buttonTitle || "SHOP NOW"}
                </button>
            </div>
        </div >
    );
};
