import { RingsData } from "@/database/data";
import CollectionUI from './CollectionUI';

export default function CoreCollection() {
    return (
        <div className="flex flex-wrap justify-between gap-y-3 gap-x-3 sm:gap-y-5 sm:gap-x-5 mb-10 mt-7 sm:mt-10 mx-3.5 sm:mx-5">
            {RingsData?.datasetSecond?.map((item, idx) => (
                <div
                    key={idx}
                    className="w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
                >
                    <CollectionUI
                        image={item.image}
                        flipImage={item.flip_image}
                        alt={item.title}
                        title={item.title}
                        price={item.price}
                    />
                </div>
            ))}
        </div>
    );
}
