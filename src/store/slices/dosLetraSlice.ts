import type { StateCreator } from "zustand";
import type { BetItem, BetType, DosLetraSlice } from "../types/dosLetraTypes";
import type { TicketResponse } from "../../api/types/ticketType";
export const createDosLetraSlice: StateCreator<DosLetraSlice> = (set, get) => ({
  betList: [],
  setBetList: (bets: BetItem[]) => set({ betList: bets }),
  addBetList: (bet: BetItem) =>
    set((state) => {
      const updated = [...state.betList, bet];
      return {
        betList: updated,
      };
    }),
  removeBetList: (id: string) =>
    set((state) => {
      const updated = state.betList.filter((bet) => bet.id !== id);
      return {
        betList: updated,
        showPayment: updated.length > 0,
      };
    }),
  betAmount: 0,
  setBetAmount: (value: number) => set({ betAmount: value }),
  betType: "",
  setBetType: (value: BetType) => set({ betType: value }),
  ball: "",
  setBall: (value: string) => set({ ball: value }),
  rounds: 1,
  setRounds: (value: number) => set({ rounds: value }),
  isDisabled: true,
  setIsDisabled: (value: boolean) => set({ isDisabled: value }),
  paymentAmount: 0,
  setPaymentAmount: (value: number) => set({ paymentAmount: value }),
  totalBetAmount: 0,
  setTotalBetAmount: (value: number) => set({ totalBetAmount: value }),
  showPayment: false,
  setShowPayment: (value: boolean) => set({ showPayment: value }),
  showConfirmModal: false,
  setShowConfirmModal: (value: boolean) => set({ showConfirmModal: value }),
  showPrintReceipt: false,
  setShowPrintReceipt: (value: boolean) => set({ showPrintReceipt: value }),
  confirmDisable: false,
  setConfirmDisable: (value: boolean) => set({ confirmDisable: value }),
  showSidebar: false,
  setShowSidebar: (value: boolean) => set({ showSidebar: value }),
  ticketData: null,
  setTicketData: (value: TicketResponse["ticket"]) =>
    set({ ticketData: value }),
  changeAmount: () => get().paymentAmount - get().totalBetAmount,
  betState: "Closed",
  betColor: "success",
  countdown: 0,
  setOddA: (value: number) => set({ OddA: value }),
  setOddB: (value: number) => set({ OddB: value }),
  setBetColor: (value: string) => set({ betColor: value }),
  setBetState: (value: string) => set({ betState: value }),
  setCountdown: (value: number) => set({ countdown: value }),
  OddA: 0,
  OddB: 0,
  netA: 0,
  netB: 0,
  setNetA: (value: number) => set({ netA: value }),
  setNetB: (value: number) => set({ netB: value }),
  betStep: "idle",
  setBetStep: (value: string) => set({ betStep: value }),
  walletBalance: 0,
  setWalletBalance: (value: number) => set({ walletBalance: value }),
});
