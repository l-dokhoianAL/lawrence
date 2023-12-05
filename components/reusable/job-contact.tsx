import Image from "next/image";
import contactImg from "@/assets/job-page/contact-us-banner.png";
import layerAssetSecond from "@/assets/job-page/layer-2.png";
import PrimaryBtn from "../buttons/primary-btn";

export default function JobContact() {
  return (
    <div className="relative">
        <Image
          className="absolute top-[85%] w-full"
          src={layerAssetSecond.src}
          width={800}
          height={800}
          alt="image-corer"
        />
      <div className="container mt-5 sm:mt-[140px] relative z-50">
        <Image
          src={contactImg.src}
          alt="contact banner"
          width={1268}
          height={611}
          className="h-[300px] sm:h-auto object-cover"
        />
        <div className="flex flex-col max-w-[560px] absolute top-0 left-0 p-5 sm:pt-[64px] sm:pl-[69px]">
          <p className="text-lg/[20px] sm:text-xl/[30px] md:text-[30px]/[40px] lg:text-[50px]/[60px] text-white">
            Unsure of your next step? Reach out.
          </p>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2">
            We’ve been helping clients achieve the results they need for over 20
            years. In that time, we’ve refined ou. We’ve been helping clients
            achieve the results they need for over 20 years. In that time,
            we’ve.
          </span>
          <div className="w-[120px] h-10 md:h-[54px] lg:w-[181px] mt-5">
            <PrimaryBtn
              bgColor="transparent"
              color="white"
              className="py-2 px-4 "
            >
              Contact us
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
