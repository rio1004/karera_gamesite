import { useEffect } from "react";
import BetRow from "./BetRow";
import { useMainStore } from "../../../../store/useMainStore";
import type { BetItem } from "../../../../store/types/dosLetraTypes";

type Props = {
  bets: BetItem[];
};

const BetTable = ({ bets }: Props) => {
  const { setTotalBetAmount } = useMainStore();
  const totalBets = bets.length;
  bets.reduce((sum, bet) => sum + bet.betAmount, 0);
  useEffect(() => {
    if (bets) {
      setTotalBetAmount(bets.reduce((sum, bet) => sum + bet.betAmount, 0));
    }
  }, [bets]);
  return (
    <div className="w-[100%] bg-white shadow self-center mt-4 h-[100%]">
      <div className="grid grid-cols-5 items-center px-4 py-2 border-b text-[16px] font-semibold text-[#999999]">
        <div>Game ID</div>
        <div>Ball</div>
        <div>Type</div>
        <div>Qty</div>
        <div>Total Bet</div>
      </div>
      <div className="h-[200px] overflow-y-auto">
        {bets.length > 0 ? (
          bets.map((bet) => <BetRow key={bet.gameId} bet={bet} />)
        ) : (
          <div className="flex items-center justify-center h-full text-[32px] text-[#999999]">
            No bets have been placed yet.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-4 py-3 text-sm bg-[#ECECEC]">
        <div className="flex flex-col gap-1">
          <span className="text-[22px] text-[#5B5B5B]">Total No. of Bets</span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <input
            type="text"
            value={totalBets}
            readOnly
            className="w-[144px] px-2 py-1 text-[22px] border rounded text-right bg-white text-[#5B5B5B]"
          />
        </div>
      </div>
    </div>
  );
};

export default BetTable;
