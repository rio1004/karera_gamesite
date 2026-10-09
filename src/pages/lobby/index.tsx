import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Drawer from "./components/Drawer";
import { IMAGES } from "../../constants/images";
import Sidebar from "../../components/Sidebar";

const GameLobby = () => {
  return (
    <div
      className="h-[100vh]"
      style={{ backgroundImage: `url(${IMAGES.red_bg})` }}
    >
      <Header />
      <Welcome />
      <Drawer />
      <Sidebar />
    </div>
  );
};

export default GameLobby;
