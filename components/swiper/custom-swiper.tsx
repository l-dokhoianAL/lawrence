"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { SwiperProps } from "swiper/react";
import { register } from "swiper/element/bundle";
import Arrow from "@/assets/icons/arrow-right.svg";
interface ICustomSwiper extends SwiperProps {
  children: ReactNode;
  view: { desktop: number; laptop: number; md: number; mobile: number };
  space: number;
  navigate?: boolean;
  navStyles?: {
    container?: string;
    left?: string;
    right?: string;
    arrowColor?: string;
  };
}
interface SwiperType extends SwiperProps {
  ref?: React.MutableRefObject<SwiperType | null>;
  initialize?(): void;
  swiper?: { slideNext: () => void; slidePrev: () => void };
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": SwiperType;
    }
  }
}
export default function CustomSwiper({
  children,
  virtual,
  view,
  space,
  navigate,
  navStyles,
  ...rest
}: ICustomSwiper) {
  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    const initializeSwiper = () => {
      register();
      const params = {
        ...rest,
        spaceBetween: space,
        speed: 1500,
        loop: true,
        className: "cards",
        breakpoints: {
          1400: {
            slidesPerView: view.desktop,
          },
          700: {
            slidesPerView: view.laptop,
          },
          576: {
            slidesPerView: view.md,
          },
          320: {
            slidesPerView: view.mobile,
          },
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
      };
      if (swiperRef.current) {
        Object?.assign(swiperRef.current, params);
        const swiperInstance = swiperRef.current as SwiperType;
        if (typeof swiperInstance.initialize === "function") {
          swiperInstance.initialize();
        }
      }
    };
    initializeSwiper();
  }, [children, rest, virtual, space, view.desktop, view.laptop, view.md, view.mobile]);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper?.slideNext();
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper?.slidePrev();
    }
  };
  return (
    <>
      {navigate && (
        <div className={navStyles?.container}>
          <div
            onClick={handlePrevSlide}
            className={`${navStyles?.left} rounded-full md:w-[90px] md:h-[90px] flex items-center justify-center cursor-pointer`}
          >
            <Arrow className={`${navStyles?.arrowColor || ""} rotate-180`} />
          </div>
          <div
            onClick={handleNextSlide}
            className={`${navStyles?.right} rounded-full md:w-[90px] md:h-[90px] flex items-center justify-center cursor-pointer`}
          >
            <Arrow className={`${navStyles?.arrowColor || ""}`} />
          </div>
        </div>
      )}
      <swiper-container ref={swiperRef} autoplay={navigate ? false : true}>
        {children}
      </swiper-container>

    </>
  );
};