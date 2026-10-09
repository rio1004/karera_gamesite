import Image from "../../../../components/Image";
import CustomTxt from "../../../../components/Text";

type Props = {
  bg: string;
  icon: string;
  multiplier: number;
  amount: string;
  submit: () => void;
  active: boolean;
};

const BetCard = ({ bg, multiplier, icon, amount, submit, active }: Props) => {
  return (
    <div
      style={{ background: bg, border: active ? "8px solid #FFEA00" : "none" }}
      className="flex justify-center items-center flex-col max-h-[200px] w-full h-[15vw] rounded-[15px]"
      onClick={submit}
    >
      <Image
        path={icon}
        style={{
          width: "70px",
        }}
      />
      <CustomTxt type="h3" text={amount} weight="bold" />
      <CustomTxt
        type="h3"
        text={"x" + multiplier}
        weight="bold"
        color="#ECC440"
      />
    </div>
  );
};

export default BetCard;
