import Image from "next/image";
import WhiteLogo from "@/assets/logos/white-logo.png";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import ColorBtn from "@/components/buttons/color-btn";
import MenuIcon from "@/assets/icons/menu.svg";
import CustomBtn from "@/components/buttons/custom-btn";
import SearchIcon from "@/assets/icons/search.svg";
import { HEADER_WEBSITE, NAVBAR_STYLES } from "@/constants";
import { useState } from "react";
import CloseIcon from "@/assets/icons/close.svg";
import { createPortal } from "react-dom";
import Menu from "@/components/menu/menu";
interface IHeaderContentProps {
  navStyle: typeof NAVBAR_STYLES[keyof typeof NAVBAR_STYLES];
}

const HeaderContent: React.FC<IHeaderContentProps> = ({ navStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  let BODY: HTMLBodyElement | null = null
  if (typeof window !== "undefined") {
    BODY = document.querySelector("body");
  }

  const toggleMenu = () => {
    if (BODY) {
      window.scrollTo(0, 0)
      BODY.style.overflow = !isOpen ? "hidden" : "auto";
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className="container flex items-center justify-between gap-4 sm:gap-0 py-10 sm:pt-20 sm:pb-10">
      <div className="flex items-center gap-[30px] sm:gap-[60px]">
        <Image
          src={navStyle ? navStyle.img.src : WhiteLogo}
          alt="Lawrence Harvey"
          width={182}
          height={50}
          priority
          className="max-w-[100px] md:max-w-[182px]"
        />
        <div
          className={`${navStyle?.color || "text-white"
            } hidden sm:flex whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl gap-2`}
        >
          ENG (UK)
          <ArrowDownIcon width="13" className={navStyle?.icon} />
        </div>
      </div>
      {isOpen && (
        <div className="hidden lg:flex">
          <div className="flex gap-6">
            {HEADER_WEBSITE.map((Icon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-max cursor-pointer"
              >
                <Icon key={idx} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-5 sm:gap-[37px] items-center">
        <ColorBtn
          bgColor="green"
          className={`bg-${navStyle?.btnBg} text-${navStyle?.btnColor} text-sm flex justify-center items-center min-w-[50px] sm:min-w-[165px] sm:text-xl py-2 sm:py-4`}
        >
          <SearchIcon className={`${navStyle?.searchIcon} sm:hidden w-5 h-5`} />
          <span className="hidden sm:inline">Job search</span>
        </ColorBtn>
        <CustomBtn onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="stroke-white lg:stroke-purple"/>
          ) : (
            <MenuIcon className={navStyle?.menu} />
          )}
        </CustomBtn>
      </div>
      {isOpen && BODY && createPortal(<Menu />, BODY)}
    </div>
  );
};

export default HeaderContent;
