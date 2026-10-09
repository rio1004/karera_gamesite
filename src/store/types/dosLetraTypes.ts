import type { TicketResponse } from "../../api/types/ticketType";

export interface BetItem {
  id: string;
  gameId: number;
  ball: string;
  type: string;
  qty: number;
  betAmount: number;
}

export type BetType = "single" | "advance" | "";
export interface DosLetraSlice {
  betList: BetItem[];
  setBetList: (bets: BetItem[]) => void;
  addBetList: (bet: BetItem) => void;
  removeBetList: (id: string) => void;
  betAmount: number;
  setBetAmount: (value: number) => void;
  betType: BetType;
  setBetType: (value: BetType) => void;
  ball: string;
  setBall: (value: string) => void;
  rounds: number;
  setRounds: (value: number) => void;
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
  paymentAmount: number;
  setPaymentAmount: (value: number) => void;
  totalBetAmount: number;
  setTotalBetAmount: (value: number) => void;
  showPayment: boolean;
  setShowPayment: (value: boolean) => void;
  showPrintReceipt: boolean;
  setShowPrintReceipt: (value: boolean) => void;
  showConfirmModal: boolean;
  setShowConfirmModal: (value: boolean) => void;
  confirmDisable: boolean;
  setConfirmDisable: (value: boolean) => void;
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
  ticketData: TicketResponse["ticket"] | null;
  setTicketData: (value: TicketResponse["ticket"]) => void;
  changeAmount: () => number;
  betState: string;
  setBetState: (betState: string) => void;
  betColor: string;
  setBetColor: (betColor: string) => void;
  countdown: number;
  setCountdown: (countDown: number) => void;
  OddA: number;
  setOddA: (OddA: number) => void;
  OddB: number;
  setOddB: (OddB: number) => void;
  netA: number;
  setNetA: (netA: number) => void;
  netB: number;
  setNetB: (netB: number) => void;
  betStep: string;
  setBetStep: (val: string) => void;
  walletBalance: number;
  setWalletBalance: (val: number) => void;
}
