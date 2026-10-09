import CustomTxt from "../../components/Text";
import { UI_COLORS } from "../../constants/colors";
import { useBetTransactions } from "../../store/slices/useBetTransaction";
import { FaChevronLeft } from "react-icons/fa";
import Card from "./Card";
import Image from "../../components/Image";
import { TRANSACTION_IMGS } from "../../constants/images";

const CustomSidebar = () => {
  const { setShowSidebar, showSideBar } = useBetTransactions();

  return (
    <div
      className={`transition-all duration-300 border-r-2 h-[88vh] min-w-[80px] ${
        showSideBar ? "w-[25vw]" : "w-[5vw]"
      }`}
      style={{
        background: !showSideBar ? UI_COLORS.PLAIN.btnGreen : "white",
      }}
    >
      <div
        className={`flex items-center h-[70px] p-5 ${
          showSideBar ? "justify-between" : "justify-center"
        } `}
        style={{ background: UI_COLORS.PLAIN.btnGreen }}
      >
        {showSideBar && <CustomTxt type="h7" text="Bet Transactions" />}
        <button
          onClick={() => setShowSidebar(!showSideBar)}
          className="flex items-center justify-center"
        >
          <FaChevronLeft
            color="white"
            className={`transition-transform duration-300 flex justify-center items-center ${
              !showSideBar ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="p-5 flex flex-col gap-5">
        {showSideBar ? (
          <>
            <Card
              bgColor={UI_COLORS.PLAIN.btnGreen}
              content="58"
              iconPath={TRANSACTION_IMGS.claimed}
              label="New Transactions"
            />
            <Card
              bgColor={UI_COLORS.PLAIN.btnGreen}
              content="4,289"
              iconPath={TRANSACTION_IMGS.unclaimed}
              label="Total Transactions"
            />
            <Card
              bgColor="#E7F6F0"
              content="₱98,640"
              label="Total Bets Per Day"
              color="#0E9F68"
            />
            <Card
              bgColor={UI_COLORS.PLAIN.btnGreen}
              content="₱1,236,870"
              label="Overall Bets"
            />
          </>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <Image
              path={TRANSACTION_IMGS.claimed}
              alt="green coin"
              className="w-10 h-10"
            />
            <Image
              path={TRANSACTION_IMGS.unclaimed}
              alt="orange coin"
              className="w-10 h-10"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSidebar;
