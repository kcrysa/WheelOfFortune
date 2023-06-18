import { FC, useCallback, useState } from "react";
import { Wheel, WheelDataType } from "react-custom-roulette";
import { categoryWeights } from "../data/categories";
import { IWeightedRandom, weightedRandom } from "../utils/weightedRandom";

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
    setMustSpin(false);
    showQuestion(data[prizeNumber].option!);
  }, [prizeNumber]);

  return (
    <div className="roulette-container">
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={0.3}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor="#f0f0f0"
        outerBorderWidth={3}
        radiusLineWidth={2}
        radiusLineColor="rgba(255,255,255,0.3)"
        textDistance={60}
        textColors={["white"]}
        fontSize={15}
        onStopSpinning={handleSpinEnd}
      />
      <button className="button roulette-button" onClick={handleSpinClick}>
        Spin
      </button>
    </div>
  );
};

export default Roulette;
