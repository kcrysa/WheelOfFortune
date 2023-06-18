import { WheelDataType } from "react-custom-roulette";

const TOUCH_PEN = "Touch Pen";      //WEIGHT = 0.2
const STICKER = "Sticker";          //WEIGHT = 0.15
const PHONE_STAND = "Phone Stand";  //WEIGHT = 0.1
const CHOCOLATE = "Chocolate";      //WEIGHT = 0.25
const KEY_CHAIN = "Key Chain";      //WEIGHT = 0.15
const NOTEBOOK = "Notebook";        //WEIGHT = 0.15

export const categories: WheelDataType[] = [
    { option: TOUCH_PEN, style: { backgroundColor: '#e60000' } },
    { option: NOTEBOOK, style: { backgroundColor: '#333333' } },
    { option: STICKER, style: { backgroundColor: '#bf0123' } },
    { option: CHOCOLATE, style: { backgroundColor: 'purple' } },
    { option: KEY_CHAIN, style: { backgroundColor: 'green' } },
    { option: PHONE_STAND, style: { backgroundColor: 'orange' } },
    { option: TOUCH_PEN, style: { backgroundColor: '#e60000' } },
    { option: NOTEBOOK, style: { backgroundColor: '#333333' } },
    { option: STICKER, style: { backgroundColor: '#bf0123' } },
    { option: CHOCOLATE, style: { backgroundColor: 'purple' } },
    { option: KEY_CHAIN, style: { backgroundColor: 'green' } },
    { option: PHONE_STAND, style: { backgroundColor: 'orange' } },
];

export const categoryWeights = [0.1, 0.07, 0.08, 0.13, 0.07, 0.05, 0.1, 0.08, 0.07, 0.12, 0.08, 0.05];