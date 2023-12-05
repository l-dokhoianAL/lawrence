import { FINDE_ROLE } from "@/constants/home";
import CustomSwiperSlide from "../swiper/custom-swiper-slide";
import ArrowIcon from "@/assets/icons/arrow-white.svg";
import Link from "next/link";
import CustomSwiper from "../swiper/custom-swiper";

export default function FindRole() {
  return (
    <div className="container pt-20 sm:pt-24 px-4 lg:px-0">
      <div className="flex flex-col">
        <p className="text-purple text-3xl md:text-[50px]/[60px] max-w-[700px]">
          Finding your perfect role in tech starts now
          <span className="text-green">.</span>
        </p>
        <Link
          href="/jobs"
          className="text-purple underline text-xl self-end pb-[51px]"
        >
          Search all jobs
        </Link>
      </div>
      <div className="relative">
        <CustomSwiper
          view={{ desktop: 1, laptop: 1, md: 1, mobile: 1 }}
          space={100}
          navigate={true}
          navStyles={{
            container:
              "navigation-swiper mb-4 lg:mb-0 m-auto lg:absolute right-0 h-max md:h-1/2 w-max md:w-[30%] flex items-center justify-center z-10 gap-4 bottom-0 lg:bottom-[50%]",
            left: "bg-purple w-16 h-16",
            right: "bg-purple  w-16 h-16",
          }}
        >
          {FINDE_ROLE.map((it, idx) => (
            <CustomSwiperSlide key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] w-full ">
                {it.map(({ txt }, idx) => {
                  if (idx === 2) {
                    return <div key={idx} className="hidden lg:flex"></div>;
                  }
                  return (
                    <div
                      key={idx}
                      className={`bg-grey-100 hover:bg-green group/item text-purple py-4 md:pb-[89px] md:pt-10 flex flex-col px-4 md:px-[35px] relative ${`role-${idx}`}`}
                    >
                      <span className="text-2xl sm:text-3xl group-hover/item:underline">
                        {txt}
                      </span>
                      <span className="text-xl py-[26px]">
                        £68,000 per annum
                      </span>
                      <div className="[&>p]:bg-grey-200 [&>p]:text-base [&>p]:w-max [&>p]:py-3 [&>p]:px-[26px] flex flex-wrap max-w-[350px] [&>p]:mr-[11px] [&>p]:mb-[10px]">
                        <p>New York</p>
                        <p>Permanent</p>
                        <p>Hybrid</p>
                        <p>Software Engineering</p>
                      </div>
                      <Link
                        href="/"
                        className="absolute cursor-pointer hidden bottom-0 right-0 bg-purple w-12 h-12 z-10 group-hover/item:flex justify-center items-center"
                      >
                        <ArrowIcon className="fill-white" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
}
