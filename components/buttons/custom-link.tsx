import { BG_VARIANTS, COLOR_VARIANTS } from "@/constants";
import { Color } from "@/types";
import Link, { LinkProps } from "next/link";
import type { ReactNode } from "react";

interface IProps extends LinkProps {
  children: ReactNode;
  color: Color;
  styles: string;
}

export default function CustomLink({
  href,
  children,
  color,
  styles,
  ...props
}: IProps) {
  return (
    <div className={`${COLOR_VARIANTS[color]} group`}>
      <Link
        className={`${COLOR_VARIANTS[color]} ${styles} group`}
        href={href}
        {...props}
      >
        {children}
        <span
          className={`w-0 ${BG_VARIANTS[color]} h-[3px] transition-all block group-hover:w-full`}
        ></span>
      </Link>
    </div>
  );
}
