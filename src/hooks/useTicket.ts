import { useState } from "react";
import { useMainStore } from "../store/useMainStore";
import type { TicketPayload, TicketResponse } from "../api/types/ticketType";
import { TicketService } from "../api/services/ticketAPI.service";
export const useTicket = () => {
  const { setShowPrintReceipt, setTicketData } = useMainStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hanldeCreateTicket = async (payload: TicketPayload) => {
    setIsLoading(true);
    try {
      const res: TicketResponse = await TicketService.createTicket(payload);
      if (res) {
        setShowPrintReceipt(true);
        setTicketData(res.ticket);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, hanldeCreateTicket };
};
