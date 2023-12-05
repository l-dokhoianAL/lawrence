import { MENU_ITEMS } from "@/constants/index";
import Background from "@/assets/menu/menu-image.png";
import LhiLogo from "@/assets/icons/LHI_logo.svg";
import Vector from "@/assets/icons/vector.svg";
import VectorLight from "@/assets/icons/vector-inactive.svg";
import LinkIcon from "@/assets/icons/link.svg";
import Link from "next/link";
import "@/assets/css/custom.css";
import Image from "next/image";

export default function Menu() {
  return (
    <div className="flex fixed w-screen h-screen z-[999] bg-white top-0 start-0">
      <div className="relative lg:max-w-[540px] w-full h-full">
        <Image
          src={Background.src}
          className="absolute top-0 start-0 w-full h-full object-cover"
          alt="menu background"
          width={540}
          priority
          height={1024}
        />
        <div className="absolute z-1 inset-x-0 bottom-0 text-white flex flex-col gap-4 px-5 xl:p-20 ">
          <span className="text-base lg:text-lg">FEATURED</span>
          <span className="text-xl lg:text-3xl">
            Above the Clouds: The Podcast | Season 1 Episode 3
          </span>
          <span className="text-lg lg:text-xl">
            We’ve been helping clients achieve the results they need for over
            20...
          </span>
          <button className="text-base bg-white flex items-center justify-center text-purple max-w-[210px] h-12">
            Software Engineering
          </button>
        </div>
        <LinkIcon className="absolute bottom-0 end-0" />
      </div>
      <div className="details-container absolute lg:relative text-2xl lg:text-[50px] text-purple font-normal mt-56 px-5 xl:pl-[74px]  mb-1 flex flex-col">
        <div className="flex flex-col lg:gap-10">
          {MENU_ITEMS.map((elem) => (
            <div className="details" key={elem.id}>
              <div className="summary flex items-center gap-3">
                <Link href={elem.link} className="text-white lg:text-purple">
                  {elem.title}
                </Link>
                <div className="flex active-vector">
                  {elem.subelements && !!elem.subelements.length && (
                    <Vector className="fill-white lg:fill-purple" />
                  )}
                </div>
                <div className="hidden inactive-vector">
                  {elem.subelements && !!elem.subelements.length && (
                    <VectorLight />
                  )}
                </div>
              </div>
              {elem.subelements && !!elem.subelements.length && (
                <div className="hidden flex-col text-2xl lg:text-3xl/[55px] mb-6 ml-6">
                  {elem.subelements.map((item) => (
                    <Link
                      href={item.link}
                      key={item.id}
                      className="summary-link"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center relative bottom-0 lg:absolute ">
          <div className="pr-4 border-purple border-r-[0.5px]">
            <LhiLogo />
          </div>
          <div className="ml-4 text-base lg:text-lg font-normal w-max text-white lg:text-charleston-green flex flex-col sm:flex-row">
            <span>Part of the LHi Group family. </span>
            <span className="underline">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
