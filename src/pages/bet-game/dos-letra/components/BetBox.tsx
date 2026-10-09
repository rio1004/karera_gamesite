import { useEffect, useState } from "react";
import BetCard from "./BetCard";
import clsx from "clsx";
import { useMainStore } from "../../../../store/useMainStore";
import { UI_COLORS } from "../../../../constants/colors";
import CustomTxt from "../../../../components/Text";
import InputField from "../../../../components/InputField";
import Radio from "../../../../components/Radio";
import CustomButton from "../../../../components/Button";
import type { BetType } from "../../../../store/types/dosLetraTypes";
import { formatToPeso } from "../../../../utils/utils.helper";
type BetStep = "idle" | "added" | "payment" | "confirm";

const quickAmounts = [5, 10, 50, 100, 500, 1000];
const minBet = 5;
const maxBet = 10000;

const BetBox = () => {
  const {
    betAmount,
    setBetAmount,
    ball,
    setBall,
    betType,
    setBetType,
    rounds,
    setRounds,
    addBetList,
    isDisabled,
    setIsDisabled,
    setBetList,
    setShowPayment,
    setShowConfirmModal,
    changeAmount,
    OddA,
    OddB,
    netB,
    netA,
    betState,
    betStep,
    setBetStep,
  } = useMainStore();
  const [error, setError] = useState<string>("");

  const handleQuickAmountClick = (amount: number) => {
    setBetAmount(amount);
    setError("");
  };
  const placeBet = () => {
    addBetList({
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      gameId: 6723,
      ball,
      type: betType,
      qty: betType === "single" ? 1 : rounds,
      betAmount: betAmount * rounds,
    });
    setBetStep("added");
  };

  const cancelBet = () => {
    setBetList([]);
    setBetStep("idle");
  };

  const payBet = () => {
    setBetStep("payment");
    setShowPayment(true);
  };
  const confirmBet = () => {
    setShowConfirmModal(true);
    setBetStep("confirm");
  };

  const renderButtons = () => {
    switch (betStep) {
      case "idle":
        return (
          <>
            <CustomButton
              bgColor={UI_COLORS.PLAIN.btnRed}
              onClick={cancelBet}
              text="CANCEL"
              btnType="box"
              disabled={isDisabled}
            />
            <CustomButton
              bgColor={UI_COLORS.PLAIN.btnBlue}
              onClick={placeBet}
              text="ADD TO BET LIST"
              btnType="box"
              disabled={isDisabled}
            />
          </>
        );
      case "added":
        return (
          <>
            <CustomButton
              bgColor={UI_COLORS.PLAIN.btnRed}
              onClick={cancelBet}
              text="CANCEL"
              btnType="box"
            />
            <CustomButton
              bgColor="#FFC600"
              onClick={payBet}
              text="PAY BET AMOUNT"
              btnType="box"
              disabled={isDisabled}
            />
          </>
        );
      case "payment":
        return (
          <>
            <CustomButton
              bgColor={UI_COLORS.PLAIN.btnRed}
              onClick={cancelBet}
              text="CANCEL"
              btnType="box"
            />
            <CustomButton
              bgColor="#0E9F68"
              onClick={confirmBet}
              text="CONFIRM BET"
              btnType="box"
              disabled={changeAmount() < 0}
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = Number(inputValue.replace(/[₱\s,]/g, ""));

    setBetAmount(numericValue);

    if (numericValue < minBet) {
      setError(`Minimum bet amount is ${minBet}`);
    } else if (numericValue > maxBet) {
      setError(`Maximum bet amount is ${maxBet}`);
    } else {
      setError("");
    }
  };
  useEffect(() => {
    const isFormValid =
      betType !== "" &&
      ball !== "" &&
      betAmount >= minBet &&
      betAmount <= maxBet;

    const disabled =
      betState === "New Game" ||
      betState === "Rolling" ||
      betState === "Closed" ||
      !isFormValid;

    setIsDisabled(disabled);

    if (
      betState === "New Game" ||
      betState === "Rolling" ||
      betState === "Closed"
    ) {
      setBetType("");
      setBetAmount(0);
      setBall("");
    }
  }, [betType, ball, betAmount, betState]);

  useEffect(() => {}, []);
  return (
    <div>
      <div className="bg-[#0E9F68] max-h-[729px] max-w-[657px] flex items-center justify-center h-[75vh] w-[40vw] rounded-[15px]">
        <div className="bg-white max-h-[669px] max-w-[607px] h-[70vh] w-[36vw] rounded-[15px]  p-5">
          <div className="flex justify-center gap-5">
            <BetCard
              amount={formatToPeso(netA)}
              bg={UI_COLORS.LINEAR.red}
              icon="/dosLetraAssets/A.png"
              multiplier={OddA}
              submit={() => setBall("Letra A")}
              active={ball === "Letra A"}
            />
            <BetCard
              amount={formatToPeso(netB)}
              bg={UI_COLORS.LINEAR.blue}
              icon="/dosLetraAssets/B.png"
              multiplier={OddB}
              submit={() => setBall("Letra B")}
              active={ball === "Letra B"}
            />
          </div>
          <CustomTxt
            text="Bet Amount: "
            color="#D9D9D9"
            align="start"
            type="h6"
            style={{
              margin: "5px 0",
            }}
          />
          <div className="grid grid-cols-3 gap-2 mb-4">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleQuickAmountClick(amount)}
                className={clsx(
                  " text-white font-semibold text-[36px] py-1 rounded-lg",
                  betAmount === amount
                    ? "bg-[#0E9F68]"
                    : "bg-[#D9D9D9] text-black hover:bg-gray-200"
                )}
              >
                ₱{amount.toLocaleString()}
              </button>
            ))}
          </div>
          <InputField
            type="text"
            onChange={(e) => handleAmountChange(e)}
            value={betAmount > 0 ? `₱${betAmount.toLocaleString()}` : ""}
            placeholder="Or enter amount here"
            errorMsg={error}
            className={`text-center text-[36px] text-[#0E9F68] font-semibold placeholder-[#D9D9D9] placeholder:font-normal ${
              betAmount > 0 ? "border-[#0E9F68]" : ""
            }`}
          />
          <div className="flex gap-4 mt-2 items-center">
            <CustomTxt text="Type of Bet:" type="h6" color="#D9D9D9" />
            <Radio
              name="betType"
              text="Single"
              onChange={(e) => setBetType(e.target.value as BetType)}
              value={"single"}
              checked={betType === "single"}
            />
            <Radio
              name="betType"
              text="Advance"
              value={"advance"}
              checked={betType === "advance"}
              onChange={(e) => setBetType(e.target.value as BetType)}
            />
          </div>
          {betType === "advance" && (
            <div className="flex items-center gap-5 mt-3">
              <CustomTxt text="Rounds:" type="p1" color="#D9D9D9" />
              <InputField
                type="text"
                value={rounds}
                style={{
                  width: "80px",
                  height: "35px",
                  border: "2px solid #0E9F68",
                  color: "#0E9F68",
                }}
                onChange={(e) => setRounds(Number(e.target.value))}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-3 mt-3">{renderButtons()}</div>
    </div>
  );
};

export default BetBox;
