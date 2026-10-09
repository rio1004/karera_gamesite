import Burger from "../../../../components/Burger";
import Image from "../../../../components/Image";
import CustomTxt from "../../../../components/Text";
import { UI_COLORS } from "../../../../constants/colors";
import { IMAGES } from "../../../../constants/images";
import { useWallet } from "../../../../hooks/useWallet";
import { useMainStore } from "../../../../store/useMainStore";
import { formatToPeso } from "../../../../utils/utils.helper";

const Header = () => {
  const { getWalletBalance } = useWallet();
  const { walletBalance } = useMainStore();
  return (
    <div
      style={{ background: UI_COLORS.LINEAR.blue }}
      className="flex justify-between px-[30px] py-[10px]"
    >
      <div className="flex flex-col items-start">
        <CustomTxt type="p1" text="Available Wallet Balance" />
        <div className="flex gap-2">
          <CustomTxt
            type="h4"
            text={formatToPeso(walletBalance)}
            weight="medium"
          />
          <Image path={IMAGES.refresh} onClick={() => getWalletBalance()} />
        </div>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <CustomTxt text="Dos Letra" type="h5" />
        <Burger />
      </div>
    </div>
  );
};

export default Header;
