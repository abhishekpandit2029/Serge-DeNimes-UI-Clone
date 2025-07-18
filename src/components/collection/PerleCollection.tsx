import { RingsData } from "@/database/data";
import CollectionUI from './CollectionUI';

export default function PerleCollection() {
    return (
        <div className="lg:flex lg:flex-wrap overflow-x-auto lg:overflow-visible">
            <div className="flex lg:flex-wrap gap-y-3 gap-x-3 md:gap-y-5 md:gap-x-5 m-3.5 md:m-5 w-full">
                {RingsData?.datasetThird?.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[80%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] shrink-0 lg:shrink"
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
        </div>
    );
}
