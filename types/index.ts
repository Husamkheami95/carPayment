import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manueFacture: string) => void;
}
