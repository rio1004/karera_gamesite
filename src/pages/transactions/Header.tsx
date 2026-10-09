import Burger from "../../components/Burger";
import Image from "../../components/Image";
import CustomTxt from "../../components/Text";
import { UI_COLORS } from "../../constants/colors";

const Header = () => {
  return (
    <div
      style={{ background: UI_COLORS.LINEAR.red }}
      className="flex justify-between px-[30px] py-[10px] h-[12vh]"
    >
      <div className="flex items-center gap-5">
        <Image path="/icons/profile.png" />
        <CustomTxt type="h4" text="Sarah Montes" weight="medium" />
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <Burger />
      </div>
    </div>
  );
};

export default Header;
