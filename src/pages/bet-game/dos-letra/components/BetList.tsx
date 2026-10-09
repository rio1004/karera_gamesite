import Countdown from "./Countdown";
import BetTable from "./BetTable";
import CustomTxt from "../../../../components/Text";
import { UI_COLORS } from "../../../../constants/colors";
import { useMainStore } from "../../../../store/useMainStore";

const BetList = () => {
  const { betList, totalBetAmount, countdown, betState, betColor } =
    useMainStore();
  return (
    <div>
      <div className="flex justify-between items-center bg-[#ECECEC] px-5 py-2 rounded-t-[15px]">
        <CustomTxt
          text="Saturday - April 11, 2025"
          type="h8"
          color="#8B9692"
          align="start"
        />
        <CustomTxt
          text="5:21 PM"
          type="h8"
          color="#8B9692"
          style={{
            fontSize: "20px",
          }}
        />
        <Countdown countdown={countdown} />
        <CustomTxt text={betState} type="h7" weight="bold" color={betColor} />
      </div>
      <div className="h-[48vh] flex flex-col w-[45vw] pb-3 px-5 rounded-b-[15px] max-h-[538px] max-w-[607px] border-2 drop-shadow-md bg-white">
        <div className="flex flex-col gap-4">
          <BetTable bets={betList} />
          <div className="flex justify-between ">
            <CustomTxt text="Total" type="h6" weight="medium" color="#5B5B5B" />
            <CustomTxt
              text={`₱${totalBetAmount}`}
              type="h6"
              color={UI_COLORS.PLAIN.btnGreen}
              weight="bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetList;
