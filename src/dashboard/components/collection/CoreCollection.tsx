import { RingsData } from "@/database/data";
import CollectionUI from './CollectionUI';

export default function CoreCollection() {
    return (
        <div className="flex flex-wrap justify-between space-y-3 md:space-y-5 m-3.5 md:m-5">
            {RingsData?.datasetSecond?.map((item, idx) => (
                <div
                    key={idx}
                    className="w-[calc(50%-7px)] lg:w-[calc(25%-15px)]"
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
