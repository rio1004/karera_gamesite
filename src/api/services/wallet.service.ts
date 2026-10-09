import { axiosInstance } from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import type { BalanceResponse } from "../types/walletType";

export const WalletServices = {
  getBalance: async (): Promise<BalanceResponse> => {
    const res = await axiosInstance.get(API_ENDPOINTS.WALLET.BALANCE);
    return res.data;
  },
};
