export type TicketPayload = {
  sessionId: string;
  gameId: string;
};

export type TicketResponse = {
  ticket: {
    transactionDate: string;
    bets: {
      choice: string;
      amount: string;
    };
    representativeId: string;
    ticketNumber: string;
    siteName: string;
  };
};
