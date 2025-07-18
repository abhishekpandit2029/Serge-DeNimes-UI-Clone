/* eslint-disable @next/next/no-img-element */

export default function ProcessOverview() {
    return (
        <div className="w-full">
            <div className="font-['NeueHaas'] text-center flex flex-col justify-center items-center space-y-4 my-24">
                <p className="text-[clamp(19px,2.5vw,29px)] max-w-[550px] text-black leading-snug mx-[20px]">
                    Every piece is made from 925 Sterling Silver,
                    designed in London and hallmarked at the
                    Goldsmith&apos;s Assay Office
                </p>
                <img loading="lazy" src="https://www.sergedenimes.com/cdn/shop/files/Hallmark_24.svg" alt="brand-logo" className="w-40" />
            </div>

            <div className="w-full mb-20">
                <video
                    className="w-full h-[20rem] object-cover"
                    src="/visuals/process.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

            <div className="mb-20 text-center flex flex-col justify-center items-center space-y-2">
                <h2 className="text-[1rem] font-semibold uppercase">
                    JOIN THE COMMUNITY
                </h2>
                <p className="text-[12px]">
                    SIGN UP TO OUR MAILING LIST FOR EXCLUSIVE ACCESS
                </p>
                <div className="flex justify-center space-x-0 bg-[#f3f3f3] max-w-[300px] px-4">
                    <div className="flex items-center gap-1 w-full max-w-[300px]">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-none border-gray-400 bg-[#f3f3f3] px-2 text-[14px] w-full focus:outline-none"
                        />
                        <button className="bg-[#f3f3f3] px-2 py-1 text-[1.5rem]">→</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
