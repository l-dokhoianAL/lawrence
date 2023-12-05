import { IButton } from "@/types";
import CustomBtn from "./custom-btn";
import { BG_VARIANTS, BORDER_VARIANTS, COLOR_VARIANTS, HOVER_BG_VARIANTS, HOVER_COLOR_VARIANTS } from "@/constants";

export interface IProps extends IButton {
  bgColor: keyof typeof BG_VARIANTS;
  color: keyof typeof COLOR_VARIANTS;
}

export default function PrimaryBtn({
  children,
  bgColor,
  color,
  className,
  ...props
}: IProps) {
  return (
    <CustomBtn
      className={`${className} ${BG_VARIANTS[bgColor]} ${COLOR_VARIANTS[color]} ${HOVER_BG_VARIANTS[color]} ${HOVER_COLOR_VARIANTS[bgColor]} ${BORDER_VARIANTS[color]} border-2 text-sm sm:text-base md:text-lg lg:text-xl transition-colors font-medium`}
      {...props}
    >
      {children}
    </CustomBtn>
  );
}
