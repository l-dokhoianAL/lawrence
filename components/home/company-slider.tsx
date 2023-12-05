import CustomSwiperSlide from "../swiper/custom-swiper-slide";
import Image from "next/image";
import dynamic from "next/dynamic";
import { COMPANY } from "@/constants/home";
import Link from "next/link";
const CustomSwiper = dynamic(() => import("../swiper/custom-swiper"), {
  ssr: false,
});

export default function CompanySlide() {
  return (
    <div className="container w-full pt-20 sm:pt-[117px] pb-[93px] flex flex-col justify-center px-4 lg:px-0">
      <p className="md:text-[50px] text-center px-4">
        You’re in good company<span className="text-blue">.</span>
      </p>
      <div className="px-4 pt-[60px] sm:px-0">
        <div className="mb-[76px]">
          <CustomSwiper view={{desktop:5,laptop:3,md:2,mobile:1}} space={100}>
            {COMPANY.first.map(({ img, width, height }, idx) => (
              <CustomSwiperSlide
                key={idx}
                styles={{
                  height: "86px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={img.src}
                    alt="slide-item"
                    width={width}
                    height={height}
                  />
                </div>
              </CustomSwiperSlide>
            ))}
          </CustomSwiper>
        </div>
        <CustomSwiper view={{desktop:5,laptop:3,md:2,mobile:1}} space={100}>
          {COMPANY.second.map(({ img, width, height }, idx) => (
            <CustomSwiperSlide
              key={idx}
              styles={{
                height: "86px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="flex justify-center items-center">
                <Image
                  src={img.src}
                  alt="slide-item"
                  width={width}
                  height={height}
                />
              </div>
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </div>
      <Link href="/company" className="text-xl underline text-center pt-16">
        Learn more
      </Link>
      <div className="max-w-[814px] flex flex-col pt-20 md:pt-36">
        <span className="text-2xl/[45px] md:text-3xl/[45px]">
          We’ve been helping clients achieve the results they need for over 20
          years. In that time, we’ve refined our services to provide an arsenal
          of tools to fill those hard-to-fill positions, to a timeline that
          suits you.
        </span>
        <Link href="/company" className="text-xl underline">
          Learn more
        </Link>
      </div>
    </div>
  );
}
