export type BalanceResponse = {
  message: string;
  wallets: BalanceType[];
};
export type BalanceType = {
  type: "game" | "commission" | "load";
  balance: string;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
};
