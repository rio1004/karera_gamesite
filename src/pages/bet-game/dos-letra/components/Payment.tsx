import clsx from "clsx";
import { useState } from "react";
import ReceiptLayout from "./ReceiptLayout";
import { useMainStore } from "../../../../store/useMainStore";
import CustomTxt from "../../../../components/Text";
import Modal from "../../../../components/Modal";
import CustomButton from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import { UI_COLORS } from "../../../../constants/colors";
import { useTicket } from "../../../../hooks/useTicket";

const quickAmounts = [20, 50, 200, 500];

const Payment = () => {
  const {
    paymentAmount,
    setPaymentAmount,
    showConfirmModal,
    setShowConfirmModal,
    changeAmount,
    setBetList,
    setBetStep,
    setShowPayment,
    setBetAmount,
    setBall,
  } = useMainStore();
  const { hanldeCreateTicket } = useTicket();
  const [error, setError] = useState<string>("");

  const handleQuickAmountClick = (amount: number) => {
    setPaymentAmount(amount);
    setError("");
  };
  const openReceipt = () => {
    hanldeCreateTicket({
      gameId: "ecdcafd2-8590-48b1-b809-f1cd481d0827",
      sessionId: "07b3f5f6-2607-4ea0-914f-15b334104bb8",
    });
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = Number(inputValue.replace(/[₱\s,]/g, ""));
    setPaymentAmount(numericValue);
  };
  const cancelBet = () => {
    setBetList([]);
    setBetStep("idle");
    setShowConfirmModal(false);
    setShowPayment(false);
    setBetAmount(0);
    setBall("");
  };

  return (
    <div className="h-[25vh] flex flex-col justify-center w-[45vw] py-3 px-5 rounded-[15px] max-h-[538px] max-w-[607px] border-2 drop-shadow-md bg-white">
      <ReceiptLayout />
      <Modal isOpen={showConfirmModal}>
        <div className="flex flex-col items-center justify-center">
          <CustomTxt
            text="Are you sure you want
to place this bet?"
            type="h5"
            color="#1A1A1A"
            weight="medium"
          />
          <div className="flex items-center justify-center w-full gap-5">
            <CustomButton
              bgColor={UI_COLORS.PLAIN.btnRed}
              onClick={cancelBet}
              text="Not now"
              btnType="box"
            />
            <CustomButton
              bgColor={UI_COLORS.PLAIN.btnGreen}
              onClick={openReceipt}
              text="Yes"
              btnType="box"
            />
          </div>
        </div>
      </Modal>
      <div className="flex flex-col gap-1">
        {" "}
        <div className="flex justify-between items-center">
          <CustomTxt
            text="Payment Amount:"
            type="h6"
            color="#5B5B5B"
            weight="medium"
          />
        </div>
        <div className="grid grid-cols-4 gap-2 mb-2 ">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleQuickAmountClick(amount)}
              className={clsx(
                " text-white font-semibold text-[36px] py-1 rounded-lg",
                paymentAmount === amount
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
          value={paymentAmount > 0 ? `₱${paymentAmount.toLocaleString()}` : ""}
          errorMsg={error}
          className="text-center text-[36px] text-[#0E9F68] font-semibold placeholder-[#D9D9D9] placeholder:font-normal"
        />
        <div className="flex justify-between">
          <CustomTxt
            text="Change Amount: "
            type="h6"
            color="#5B5B5B"
            weight="medium"
          />
          <CustomTxt
            text={paymentAmount ? `₱${changeAmount()}` : "0"}
            type="h6"
            color="#00A24A"
            weight="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
