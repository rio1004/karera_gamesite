import { useState } from "react";
import { useMainStore } from "../store/useMainStore";
import { WalletServices } from "../api/services/wallet.service";
import type { BalanceResponse } from "../api/types/walletType";
export const useWallet = () => {
  const { setWalletBalance } = useMainStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWalletBalance = async () => {
    setIsLoading(true);
    try {
      const res: BalanceResponse = await WalletServices.getBalance();
      console.log(res);
      if (res) {
        setWalletBalance(Number(res.wallets[0].balance));
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getWalletBalance,
  };
};
