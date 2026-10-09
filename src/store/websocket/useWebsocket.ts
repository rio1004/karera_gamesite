import { create } from "zustand";
import type { WebSocketStoreTypes } from "./websocket";
import { WebSocketClient } from "../../utils/webSocketClient";

export const useWebSocketStore = create<WebSocketStoreTypes>((set, get) => ({
  wsClient: null,
  messages: [],
  isConnected: false,
  isAuthenticated: false,

  initializeWebSocket: () => {
    const client = new WebSocketClient(
      `${import.meta.env.VITE_WS_URL}` ||
        `wss://${window.location.hostname}/api`
    );

    client.addMessageHandler((data: any) => {
      if (data?.type === "__connected") {
        set({ isConnected: true });
        return;
      }
      if (data?.state == "Authenticate" && data?.data == "Success") {
        set({ isAuthenticated: true });
      }
      set((state) => ({
        messages: [...state.messages, data],
      }));
    });

    set({ wsClient: client });
  },

  sendMessage: (data: any) => {
    get().wsClient?.send(data);
  },

  cleanup: () => {
    get().wsClient?.close();

    set({ wsClient: null, messages: [] });
  },
}));
