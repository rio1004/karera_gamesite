import { useEffect } from "react";
import { useAuthStore } from "../../../../store/slices/useAuthStore";
import { useWebSocketStore } from "../../../../store/websocket/useWebsocket";
import { useMainStore } from "../../../../store/useMainStore";
import { UI_COLORS } from "../../../../constants/colors";

export const useDosLetraSocket = () => {
  const token = useAuthStore((state) => state.token);
  const {
    messages,
    initializeWebSocket,
    isConnected,
    isAuthenticated,
    sendMessage,
  } = useWebSocketStore();
  
  const {
    setBetColor,
    setBetState,
    setCountdown,
    setOddA,
    setOddB,
    setNetA,
    setNetB,
  } = useMainStore();

  useEffect(() => {
    initializeWebSocket();
  }, []);

  useEffect(() => {
    if (isConnected) {
      sendMessage({
        channel: "Game",
        state: "Authenticate",
        data: { token },
      });
    }
  }, [isConnected, token]);

  useEffect(() => {
    if (isAuthenticated) {
      sendMessage({
        channel: "Game",
        state: "Update",
        data: {},
      });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!messages?.length) return;

    const latest = messages[messages.length - 1];
    if (latest.channel !== "Game") return;

    const { state, data } = latest;

    const handleUpdate = () => {
      if (data?.odds) {
        setOddA(data.odds.A);
        setOddB(data.odds.B);
      }
      if (data?.net) {
        setNetA(data.net.A);
        setNetB(data.net.B);
      }
    };

    switch (state) {
      case "NewGame":
        setBetState("New Game");
        setBetColor(UI_COLORS.PLAIN.btnGreen);
        break;
      case "Closing":
        setCountdown(data?.countdown ?? 0);
        setBetState(latest.state);
        setBetColor("");
        break;
      case "Rolling":
        setCountdown(0);
        setBetColor("#FFD027");
        setBetState(latest.state);
        break;
      case "Open":
        setCountdown(data?.countdown ?? 0);
        setBetColor(UI_COLORS.PLAIN.btnGreen);
        setBetState(latest.state);
        break;
      case "LastCall":
        setCountdown(data?.countdown ?? 0);
        setBetColor("#FFE400");
        setBetState("Last call");
        break;
      case "Closed":
        setCountdown(0);
        setBetColor(UI_COLORS.PLAIN.btnRed);
        setBetState(latest.state);
        break;
      case "Update":
        handleUpdate();
        break;
    }
  }, [messages]);
};
