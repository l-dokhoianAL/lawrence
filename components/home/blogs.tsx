"use client";
import { BLOGS } from "@/constants/home";
import { useState } from "react";
import PrimaryBtn from "../buttons/primary-btn";
import Arrow from "@/assets/icons/arrow-top-right.svg";
import Link from "next/link";
import CustomSwiper from "../swiper/custom-swiper";
import CustomSwiperSlide from "../swiper/custom-swiper-slide";
import Image from "next/image";

export default function Blogs() {
  const [active, setActive] = useState("software");
  const handleChange = (type: string) => {
    setActive(type);
  };
  const activeContent = BLOGS.find((it) => it.type === active);

  return (
    <div className="max-w-[1440px] w-full m-auto pl-4 lg:pl-[100px]  pt-[98px] pb-[100px]">
      <p className="text-3xl md:text-[50px]/[60px] max-w-[840px] w-full pb-[30px]">
        Industry insights, trends, podcasts and more.
      </p>
      <div className="flex justify-between lg:items-center pb-[46px] lg:pr-[100px] flex-col gap-4 lg:gap-0 lg:flex-row">
        <div className="flex gap-[18px] flex-wrap">
          {BLOGS.map(({ tab, type }) => {
            return (
              <PrimaryBtn
                bgColor={active === type ? "white" : "purple"}
                color={active === type ? "purple" : "white"}
                className={`${
                  active === type ? "border-white flex items-center" : " "
                } py-2 px-4`}
                key={type}
                onClick={() => handleChange(type)}
              >
                {tab}
                {active === type && <Arrow className="w-6 h-5" />}
              </PrimaryBtn>
            );
          })}
        </div>
        <Link href="/blog" className="text-sm font-medium underline">
          View all blogs
        </Link>
      </div>
      <div>
        <CustomSwiper  view={{ desktop: 3.2, laptop:3.2, md: 1.1, mobile: 1.1 }} space={14}>
          {activeContent?.data.map(({ title, info, img }, idx) => {
            return (
              <CustomSwiperSlide key={idx}>
                <div className="max-w-[413px] w-full group/item cursor-pointer">
                  <div className="relative">
                    <div className="bg-pink h-12 w-12 hidden group-hover/item:flex items-center justify-center absolute right-0 bottom-0 p-[6px] z-10">
                      <Arrow/>
                    </div>
                    <Image src={img.src} alt="image" width={413} height={607} className="group-hover/item:opacity-60"/>
                    <div className="absolute text-purple text-base bg-grey-400 px-6 py-3 left-[21px] top-[18px]">
                      {activeContent.tab}
                    </div>
                  </div>
                  <div className="max-w-[413px] w-full pt-6 group-hover/item:text-white-light">
                    <p className="text-xl md:text-[30px] whitespace-pre-line">{title}</p>
                    <p className="text-base md:text-xl pt-[6px]">{info}</p>
                  </div>
                </div>
              </CustomSwiperSlide>
            );
          })}
        </CustomSwiper>
      </div>
    </div>
  );
}
