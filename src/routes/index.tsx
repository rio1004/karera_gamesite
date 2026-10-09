import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import GameLobby from "../pages/lobby";
import GameSiteDosLetra from "../pages/bet-game/dos-letra";
import BetTransactions from "../pages/transactions";
import ProtectedRoute from "./ProtectedRoute";
const AppRoutes = () => {
  return (
    <BrowserRouter  basename="/game-site">
      <InnerRoutes />
    </BrowserRouter>
  );
};

const InnerRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="lobby" element={<GameLobby />} />
        <Route path="dos-letra" element={<GameSiteDosLetra />} />
        <Route path="transactions" element={<BetTransactions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
