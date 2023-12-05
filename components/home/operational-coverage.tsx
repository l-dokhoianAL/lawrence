"use client";
import React, { useState } from "react";
import { COVEREGE } from "@/constants/home";
import PrimaryBtn from "../buttons/primary-btn";
import CustomSwiper from "../swiper/custom-swiper";
import CustomSwiperSlide from "../swiper/custom-swiper-slide";
import Image from "next/image";
import layerImg from "@/assets/homepage/layer-1.png";

export default function OperationelCoverage() {
  const [active, setActive] = useState(0);

  const handleChange = (id: number) => {
    setActive(id);
  };

  const activeCoverage = COVEREGE.find((it) => it.id === active);

  return (
    <div className="relative overflow-hidden">
      <div className="container flex flex-col pt-20 md:pt-[131px] px-4 lg:px-0">
        <span className="text-pink text-lg font-semibold">
          OPERATIONAL COVERAGE
        </span>
        <span className="text-xl md:text-3xl lg:text-[50px]/[60px] text-purple">
          Where does our work take us?
        </span>
        <div className="flex gap-7 border-b-[1px] border-purple pt-6 overflow-x-auto">
          {COVEREGE.map(({ tab, id }) => (
            <div
              key={id}
              className={`${
                active === id ? "text-purple font-medium" : "text-grey-300"
              } pb-3 text-xl/8 cursor-pointer`}
              onClick={() => handleChange(id)}
            >
              <span className="whitespace-nowrap">{tab}</span>
            </div>
          ))}
        </div>
        {activeCoverage && (
          <div className="flex justify-between pt-5 md:pt-[77px] pb-20 sm:pb-[106px] gap-4 flex-col lg:flex-row xl:gap-0">
            <div className="text-purple lg:max-w-[488px] w-full">
              <div>
                <p className="text-xl/8">{activeCoverage.content}</p>
                <div className="text-xl font-medium flex gap-4 items-center pt-5">
                  <span>{activeCoverage.city1}</span>
                  <div className="w-2 h-2 bg-purple"></div>
                  <span>{activeCoverage.city2}</span>
                </div>
              </div>
              <PrimaryBtn
                bgColor="purple"
                color="purple"
                className="py-2 px-4 mt-[51px] relative z-10"
              >
                Contact us
              </PrimaryBtn>
            </div>
            <div className="lg:max-w-lg xl:max-w-2xl w-full operation relative">
              <CustomSwiper
                view={{ desktop: 1.1, laptop: 1.1, md: 1.1, mobile: 1.1 }}
                space={19}
                navigate={true}
                navStyles={{
                  container:
                    "absolute flex items-center right-0 z-10 flex h-full w-full",
                  left: "hidden",
                  right: "bg-white absolute right-[22px] p-2 md:p-0",
                  arrowColor:'[&_path]:fill-purple'
                }}
              >
                {activeCoverage.images.map(({ img }, idx) => (
                  <CustomSwiperSlide key={idx}>
                    <div className="item">
                      <Image
                        src={img.src}
                        alt="city image"
                        width={612}
                        height={527}
                        className="w-full"
                      />
                    </div>
                  </CustomSwiperSlide>
                ))}
              </CustomSwiper>
            </div>
          </div>
        )}
      </div>
      <Image
        className="absolute top-[75%] right-0"
        src={layerImg.src}
        width={1660}
        height={780}
        alt="image-corer"
      />
    </div>
  );
}
