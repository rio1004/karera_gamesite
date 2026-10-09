import Header from "./components/Header";
import BetBox from "./components/BetBox";
import BetList from "./components/BetList";
import Payment from "./components/Payment";
import Sidebar from "../../../components/Sidebar";
import { useMainStore } from "../../../store/useMainStore";
import { useDosLetraSocket } from "./hooks/useDosLetraHooks";
import { useWallet } from "../../../hooks/useWallet";
import { useEffect } from "react";

const GameSiteDosLetra = () => {
  const { showPayment } = useMainStore();
  const { getWalletBalance } = useWallet();

  useEffect(() => {
    getWalletBalance();
  }, []);
  useDosLetraSocket();
  return (
    <>
      <div>
        <Header />
        <div className="flex justify-center items-start w-full p-5 gap-10">
          <BetBox />
          <div className="flex flex-col gap-3">
            <BetList />
            {showPayment && <Payment />}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default GameSiteDosLetra;
