import Image from "next/image";
import cornerAsset from "@/assets/job-page/green-corner.png";
import layerAssetFirst from "@/assets/job-page/layer-1.png";
import Link from "next/link";
import { SEARCH_FILTERS } from "@/constants/job";

export default function JobSearch() {
    return (
        <>
            <Image
                className="absolute right-0 top-0"
                src={cornerAsset.src}
                width={800}
                height={800}
                alt="image-corer"
            />
            <div className="max-w-[1444px] max-h-[1260px] relative mx-auto">
                <div className="container">
                    <div className="relative w-full flex flex-col items-center z-10">
                        <div className="py-5 xl:pt-[120px] xl:pb-[60px]">
                            <p className="text-xl/[27px] sm:text-[40px]/[47px] md:text-[60px]/[67px] lg:text-[80px]/[87px] xl:text-[100px]/[107px] text-center">
                                Your next role in
                                <br />
                                <span className="text-data bg-gradientGreen font-semibold italic pr-3"> Privacy </span>
                                <br />
                                is a few steps away
                            </p>
                        </div>
                        <div className="bg-jacarta flex flex-col gap-5 sm:gap-10 mt-3 sm:mt-10 xl:mt-[12.5rem] w-full max-w-[1268px] md:h-[200px] xl:h-[247px] p-5 lg:px-[47px] lg:py-[42px]">
                            <div className="flex justify-between items-center">
                                <input placeholder="Type a keyword..." type="text" className="bg-transparent border-0 w-3/5 lg:w-full max-w-[905px] border-b border-b-[#FFFFFF33] pb-2 placeholder:text-white placeholder:text-sm md:placeholder:text-xl sm:placeholder:text-lg text-base sm:text-lg md:text-xl lg:placeholder:text-[30px] focus:outline-none lg:text-[30px]" />
                                <Link href='#' className="text-philippine-silver text-sm md:text-base lg:text-xl">Reset filters</Link>
                            </div>
                            <div className="md:h-12 lg:h-[69px] flex flex-wrap md:flex-nowrap gap-5">
                                {SEARCH_FILTERS.map(elem => (
                                    <select
                                        key={elem.id}
                                        defaultValue={elem.id}
                                        className="mt-1 block w-full border-gray-300 bg-white h-full text-purple py-2 pl-3 pr-7 lg:pr-10 focus:bg-chlorophyll-green focus:outline-none focus:border-none focus:ring-0 text-sm md:text-base lg:text-xl"
                                    >
                                        <option value={elem.id} disabled label={elem.title}>{elem.title}</option>
                                        {elem.options.map((item, idx) => (
                                            <option key={idx} value={item.value}>{item.title}</option>
                                        ))}
                                    </select>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Image
                    className="absolute left-0 bottom-[-8px] w-full top-[200px]"
                    src={layerAssetFirst.src}
                    width={1250}
                    height={800}
                    alt="image-corer"
                />
        </>
    );
}
