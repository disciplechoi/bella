import { MouseEventHandler } from "react";

export interface CustomButtonProps{
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;


}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;

}


export interface PlantProps{
  Categories: string;
  name: string;
  Img: string;
// Img:"http://www.tropicopia.com/house-plant/thumbnails/5586.jpg"
  family: string;
  // name: string;
  description: string;
  origin: string;
  zone: string;
  id: string;
  climat: string;
}