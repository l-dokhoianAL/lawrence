import { IButton } from "@/types";
import CustomBtn from "./custom-btn";

export interface IProps extends IButton {
  bgColor: "green";
}

export default function ColorBtn({
  children,
  bgColor,
  className,
  ...props
}: IProps) {
  const bgVariants = {
    green: "bg-green",
  };

  return (
    <CustomBtn
      className={`${bgVariants[bgColor]} ${className} font-semibold text-purple`}
      {...props}
    >
      {children}
    </CustomBtn>
  );
}
