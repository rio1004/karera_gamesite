import { axiosInstance } from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import type { TicketPayload, TicketResponse } from "../types/ticketType";

export const TicketService = {
  createTicket: async (data: TicketPayload): Promise<TicketResponse> => {
    const res = await axiosInstance.post(API_ENDPOINTS.TICKET.CREATE, data);
    return res.data;
  },
};
