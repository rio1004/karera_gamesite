import { useEffect } from "react";
import CustomTxt from "../../../../components/Text";
import { UI_COLORS } from "../../../../constants/colors";
import { useMainStore } from "../../../../store/useMainStore";

type Props = {
  countdown: number;
};

const Countdown = ({ countdown }: Props) => {
  const { betColor, betState, setBetColor } = useMainStore();
  useEffect(() => {
    if (betState === "Closed") {
      setBetColor(UI_COLORS.PLAIN.btnRed);
    }
  }, [betState, setBetColor]);

  return (
    <div
      data-testid="countdown"
      className="w-[45px] h-[45px] border-[5px] flex justify-center items-center text-white bg-[rgba(15,42,52,0.65)] rounded-full"
      style={{
        borderColor: betColor,
      }}
    >
      <CustomTxt text={countdown.toString()} type="h6" />
    </div>
  );
};

export default Countdown;
