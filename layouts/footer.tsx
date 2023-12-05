import Image from "next/image";
import Link from "next/link";
import meduza from "@/assets/homepage/meduza.png";
import ArrowRightIcon from "@/assets/icons/arow-right-square.svg";
import { FOOTER_LINKS, FOOTER_LOGOS, FOOTER_WEBSITE } from "@/constants";

export default function Footer() {
    return (
        <footer className="bg-pink py-4 md:py-[60px] relative z-[100] px-5 xl:px-0">
            <div className="container flex flex-col">
                <div className="flex flex-col gap-5 md:gap-[72px]">
                    <div className="flex flex-col gap-[72px] col-span-1">
                        <div className="flex gap-4 md:gap-0 justify-between items-center sm:items-start flex-col sm:flex-row">
                            <div className="flex flex-col gap-3 items-center md:items-start">
                                <p className="text-xs lg:text-base text-purple w-max">You are viewing content optimise for:</p>
                                <div className="bg-purple-light w-max pl-3 pr-10">
                                    <span className="text-white text-xl">ENG (UK)</span>
                                </div>

                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <p className="text-xs lg:text-base/[30px] text-purple">Connect with us</p>
                                <div className="flex gap-3">
                                    {FOOTER_WEBSITE.map((Icon, idx) => (
                                        <div key={idx} className="flex items-center justify-center w-max">
                                            <Icon key={idx} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                        <div className="grid lg:max-w-[430px] gap-y-6 md:gap-x-20 grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 justify-center">
                            {Object.entries(FOOTER_LINKS).map(([key, val], idx) => {
                                return <div key={key} className={`flex flex-col gap-4 ${idx === 1 || idx === 3 ? "row-span-1" : "row-span-2"}`}>
                                    <h2 className="text-purple font-medium text-base md:text-xl/[38px]">{key}</h2>
                                    <div className="flex flex-col ">
                                        {val.map((elem, id) => (
                                            <Link key={id} href={elem.path} className="text-purple font-normal text-xs/[25px] md:text-base/[30px]">{elem.title}</Link>
                                        ))}
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="relative flex justify-center lg:-mt-24 w-full lg:w-[800px] lg:h-[586px]">
                            <Image src={meduza.src} alt="meduza" width={800} height={586} />
                            <div className="absolute lg:left-[49px] top-10 max-w-[420px] text-center lg:text-left">
                                <span className="relative  text-white text-base md:text-3xl lg:text-[40px]/[48px]">We’re always looking out for the planet. Learn about our impact <ArrowRightIcon className="inline" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:pt-12 flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:border-t md:border-t-purple">
                    <div className="max-w-[430px]">
                        <p className="text-xs md:text-base/[27px] font-semibold text-purple">Multi-industry talent solutions.</p>
                        <p className="text-xs md:text-base/[24px] text-purple mt-1">We’ve been helping clients achieve the results they need for over 20 years. In that time, we’ve refined ou.</p>
                    </div>
                    <div className="grid grid-cols-3 sm:flex items-end gap-10">
                        {FOOTER_LOGOS.map((elem) => (
                            <div key={elem.id} className={`${elem.id === 1 ? "md:border-r md:border-r-purple md:pr-10" : ""} flex flex-col justify-center items-center gap-2`}>
                                <Image src={elem.url} alt="" width={elem.width} height={elem.height} />
                                <p className="text-[6px]/[7.8px] text-purple text-center">{elem.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
