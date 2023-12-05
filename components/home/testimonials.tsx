import { TESTIMONIALS } from "@/constants/home";
import CustomSwiperSlide from "../swiper/custom-swiper-slide";
import Image from "next/image";
import CustomSwiper from "../swiper/custom-swiper";

export default function Testimonials() {
  return (
    <div className="max-w-[1440px] w-full m-auto px-4 lg:pl-[100px] lg:pr-0 testimonials pt-20 md:pt-32 sm:pb-20 md:pb-[188px]">
      <CustomSwiper view={{desktop:1.5,laptop:1.5,md:1,mobile:1}}  space={48}>
        {TESTIMONIALS.map(({ autor, txt, companyLogo }, idx) => (
          <CustomSwiperSlide key={idx} styles={{ paddingTop: "80px" }}>
            <div className="max-w-[986px] w-full relative flex justify-center">
              <div className="bg-purple w-28 h-28 md:w-40 md:h-40 flex items-center justify-center absolute top-[-80px] z-10 px-4 md:px-0">
                <Image
                  src={companyLogo.src}
                  alt="company logo"
                  width={114}
                  height={82}
                />
              </div>
              <div className="item text-purple bg-blue min-h-[543px] h-full flex flex-col px-4 lg:px-[83px] w-full text-center gap-6 justify-center">
                <span className="italic text-xl lg:text-3xl">{txt}</span>
                <span className="text-xl lg:text-3xl">{autor}</span>
              </div>
            </div>
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
}
