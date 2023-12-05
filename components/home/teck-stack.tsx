import ArrowIcon from "@/assets/icons/arrow-top-right.svg";
import vectorPurple from "@/assets/homepage/vector-purple.png";
import Image from "next/image";
import { ANALYTICS, STACK } from "@/constants";

export default function TechStack() {
  return (
    <div className="container w-full flex flex-col items-center pt-20 lg:pt-[259px] relative overflow-hidden px-4">
      <p className="text-xl [&>span]:text-xl sm:text-2xl  [&>span]:sm:text-2xl [&>span]:md:text-3xl md:text-3xl/[42px] text-center max-w-[953px] w-full [&>span]:px-2">
        Born in 2002, Lawrence Harvey isn&apos;t your typical tech recruitment
        brand. We
        <span className="text-data bg-gradientTextPurple">
          specialize in tech recruitment
        </span>
        that breaks the mold, providing an unwavering reputation for delivering
        <span className="text-data bg-gradientTextPurple">
          unparalleled results
        </span>
        to clients and candidates in both
        <span className="text-data bg-gradientTextPurple">
          permanent and contract solutions.
        </span>
      </p>
      <div className="flex justify-between w-full pt-0 sm:pt-10 md:pt-20 lg:pt-[140px] flex-col gap-4 lg:gap-0 lg:flex-row">
        <div className="flex flex-col mt-16 ">
          <p className="text-3xl sm:text-[40px] xl:text-[50px]/[60px] max-w-max lg:max-w-sm xl:max-w-[537px] w-full lg:w-max pb-[33px]">
            We take your expertise to market
            <span className="text-pink text-[50px]">.</span>
          </p>
          <div>
            {STACK.map(({ txt }, idx) => {
              return (
                <div
                  className={`${
                    idx === 0
                      ? "bg-pink text-purple font-medium flex items-center gap-4 w-max pr-4"
                      : "bg-gradientGray text-data"
                  } pl-[15px] max-w-[450px] text-2xl/[50px] sm:text-3xl/[60px] w-full`}
                  key={idx}
                >
                  {txt}
                  {idx === 0 && <ArrowIcon className="w-8 h-7" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <Image
            className="h-[480px] sm:h-full"
            src={vectorPurple.src}
            width={800}
            height={800}
            alt="image-corer"
          />
          <div className="absolute  top-[15%] left-[15%]">
            <span className="text-lg sm:text-xl">
              {" "}
              We are experts in Data & Analytics:
            </span>
            <div className="flex flex-col max-w-[547px] w-full">
              {ANALYTICS.map(({ txt }) => {
                return (
                  <span
                    key={txt}
                    className="text-lg sm:text-2xl md:text-3xl/[42px] text-data bg-gradinetTextGray"
                  >
                    {txt}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
