import { FC, useCallback, useState } from "react";
import { Wheel, WheelDataType } from "react-custom-roulette";
import { categoryWeights } from "../data/categories";
import { IWeightedRandom, weightedRandom } from "../utils/weightedRandom";
import { colors } from "@mui/material";

interface IRoulette {
  data: WheelDataType[];
  showQuestion: (option: string) => void;
}

const Roulette: FC<IRoulette> = ({ data, showQuestion }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const selectedItem: IWeightedRandom = weightedRandom(data, categoryWeights);
    setPrizeNumber(selectedItem.index);
    setMustSpin(true);
  };

  const handleSpinEnd = useCallback(() => {
    setTimeout(() => {
      setMustSpin(false);
      showQuestion(data[prizeNumber].option!);
    }, 1000);
  }, [data, prizeNumber, showQuestion]);

  return (
    <div className="roulette-container">
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={0.4}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={colors.grey[800]}
        outerBorderWidth={3}
        radiusLineWidth={2}
        radiusLineColor="rgba(150,150,150,0.4)"
        textDistance={60}
        textColors={[colors.common.white]}
        fontSize={16}
        onStopSpinning={handleSpinEnd}
      />
      <button
        className="button roulette-button"
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        TOUCH TO SPIN
      </button>
    </div>
  );
};

export default Roulette;
