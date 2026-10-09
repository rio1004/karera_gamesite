import type { WebSocketClient } from "../../utils/webSocketClient";

export type WebSocketStoreTypes = {
  wsClient: WebSocketClient | null;
  messages: any[];
  initializeWebSocket: () => void;
  sendMessage: (data: any) => void;
  cleanup: () => void;
  isConnected: boolean;
  isAuthenticated: boolean;
};
