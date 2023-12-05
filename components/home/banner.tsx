import Image from "next/image";
import cornerAsset from "@/assets/homepage/asset-corner.png";
import bannerAsset from "@/assets/homepage/asset-banner.png";

import PrimaryBtn from "../buttons/primary-btn";
import CustomLink from "../buttons/custom-link";
export default function HomeBanner() {
  return (
    <div className="container flex flex-col justify-center h-screen sm:h-full">
      <Image
        className="absolute right-0 top-0"
        src={cornerAsset.src}
        width={800}
        height={800}
        alt="image-corer"
      />
       <Image
        className="absolute left-0 top-5 lg:top-[247px]"
        src={bannerAsset.src}
        width={450}
        height={653}
        alt="image-corer"
      />
      <div className="pt-[120px] pb-[60px] relative z-10 px-4 sm:px-0">
        <p className="text-[40px]/[50px] md:text-6xl lg:text-[100px] font-bold text-center lg:leading-[107px]">
          Experts in
          <br />
          <span className="text-data bg-gradientPurple italic pr-3">
            {" "}
            Data & Analytics{" "}
          </span>
          recruitment
        </p>
      </div>
      <div className="flex justify-center gap-10 pb-10 relative z-10">
        <PrimaryBtn bgColor="purple" color="white" className="py-2 px-4">
          Search jobs
        </PrimaryBtn>
        <CustomLink color="white" href="#" styles="text-xl underline">
          Find talent
        </CustomLink>
      </div>
    </div>
  );
}