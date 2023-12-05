"use client";

import { IButton } from "@/types";

export interface IProps extends IButton {}

export default function CustomBtn({ children, ...props }: IProps) {
  return <button {...props}>{children}</button>;
}
