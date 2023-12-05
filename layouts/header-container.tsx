"use client";
import { useEffect, useState } from "react";
import HeaderContent from "./header";
import { usePathname } from "next/navigation";
import { NAVBAR_STYLES } from "@/constants";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
  const navStyle = NAVBAR_STYLES[pathname as keyof typeof NAVBAR_STYLES];
  useEffect(() => {
    const checkScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScroll(isScrolled);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scroll ? "backdrop-blur-md bg-purple-light" : ""
      } fixed md:h-[160px] left-0 right-0 z-[1000] px-5 xl:px-0`}
    >
      <HeaderContent navStyle={navStyle} />
    </div>
  );
}
