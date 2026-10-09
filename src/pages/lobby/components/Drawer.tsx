import { useNavigate } from "react-router-dom";
import CustomTxt from "../../../components/Text";
import { IMAGES, LOBBY_IMAGES } from "../../../constants/images";

const Drawer = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-0 left-0 bg-white h-[60vh] w-full rounded-tl-[100px] rounded-tr-[100px] flex flex-col items-center justify-around">
      <CustomTxt
        text="Choose Your Game"
        type="h1"
        color="black"
        weight="bold"
      />
      <div className="flex justify-center gap-5">
        <img
          src={LOBBY_IMAGES.zodiac}
          alt=""
          className="h-[226px]"
          onClick={() => navigate("/game-site/dos-letra")}
        />
        <img
          src={LOBBY_IMAGES.dosLetra}
          alt=""
          className="h-[226px]"
          onClick={() => navigate("/dos-letra")}
        />
      </div>
      <img src={IMAGES.pagcor_logo} alt="Your Logo" className="w-[28vh]" />
    </div>
  );
};

export default Drawer;
