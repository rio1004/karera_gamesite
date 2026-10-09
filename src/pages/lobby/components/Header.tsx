import Burger from "../../../components/Burger";
import { IMAGES } from "../../../constants/images";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-start p-5  bg-cover">
      <div className="relative w-full flex justify-between mb-5">
        <div className="flex-1 flex items-center">
          <img
            src={IMAGES.karera_logo}
            alt="Secured Login"
            className="h-[70px] m-[-20px]"
          />
        </div>
        <Burger />
      </div>
    </div>
  );
};

export default Header;
