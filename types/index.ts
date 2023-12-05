import { COLOR_VARIANTS } from "@/constants";

export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export type Color = keyof typeof COLOR_VARIANTS;
