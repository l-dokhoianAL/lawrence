import Image from "next/image";
import serviceCover from "@/assets/homepage/service-cover.png";
import PrimaryBtn from "../buttons/primary-btn";
export default function OurService() {
  return (
    <div className="container px-4 lg:px-0">
      <span className="text-blue text-lg font-semibold pb-[22px] block">
        OUR SERVICES
      </span>
      <div className="flex justify-between flex-col gap-4 lg:gap-0 lg:flex-row">
        <div className="relative w-full max-w-[827px]">
          <Image
            src={serviceCover.src}
            alt="service cover"
            width={827}
            height={759}
            className="w-full"
          />
          <div className="absolute w-full top-0 p-4 md:pl-[68px] md:pt-[58px] md:pr-[37px] md:pb-[34px] h-full flex flex-col justify-between">
            <div>
              <p className="text-3xl md:text-[50px]/[60px] text-blue">
                Retained Search.
              </p>
              <p className="text-2xl md:text-3xl">
                Our most comprehensive solution yet.
              </p>
            </div>
            <PrimaryBtn
              bgColor="purple"
              color="white"
              className="px-6 py-3 self-end"
            >
              Learn more
            </PrimaryBtn>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:max-w-[386px] w-full gap-4 lg:gap-0">
          <div className="bg-purple-15 max-h-[358px] h-full py-10  px-4 md:px-11">
            <span className="text-2xl md:text-3xl">Executive search</span>
          </div>
          <div className="bg-purple-15 max-h-[358px] h-full py-10 px-4 md:px-11">
            <span className="text-2xl md:text-3xl">Contingent search</span>
          </div>
        </div>
      </div>
    </div>
  );
}
