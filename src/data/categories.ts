import { WheelDataType } from "react-custom-roulette";

const TOUCH_PEN = "Touch Pen"; //WEIGHT = 0.2
const STICKER = "Sticker"; //WEIGHT = 0.2
const PHONE_STAND = "Phone Stand"; //WEIGHT = 0.08
const CHOCOLATE = "Chocolate"; //WEIGHT = 0.12
const KEY_CHAIN = "Key Chain"; //WEIGHT = 0.2
const NOTEBOOK = "Notebook"; //WEIGHT = 0.15

export interface ICategory extends WheelDataType {
  weight: number;
}

export const categories: ICategory[] = [
  { option: TOUCH_PEN, style: { backgroundColor: "#821c87" }, weight: 0.1 },
  { option: NOTEBOOK, style: { backgroundColor: "#0099ba" }, weight: 0.08 },
  { option: STICKER, style: { backgroundColor: "#333333" }, weight: 0.1 },
  { option: CHOCOLATE, style: { backgroundColor: "#bf0000" }, weight: 0.06 },
  { option: KEY_CHAIN, style: { backgroundColor: "#5c2e0f" }, weight: 0.1 },
  { option: PHONE_STAND, style: { backgroundColor: "#8f9e00" }, weight: 0.04 },

  { option: TOUCH_PEN, style: { backgroundColor: "#821c87" }, weight: 0.1 },
  { option: NOTEBOOK, style: { backgroundColor: "#0099ba" }, weight: 0.07 },
  { option: STICKER, style: { backgroundColor: "#333333" }, weight: 0.1 },
  { option: CHOCOLATE, style: { backgroundColor: "#bf0000" }, weight: 0.06 },
  { option: KEY_CHAIN, style: { backgroundColor: "#5c2e0f" }, weight: 0.1 },
  { option: PHONE_STAND, style: { backgroundColor: "#8f9e00" }, weight: 0.04 },
];

export const categoryWeights: number[] = categories.map(
  (x: ICategory) => x.weight
);
