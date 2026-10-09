import Image from "../../components/Image";
import CustomTxt from "../../components/Text";

type Props = {
  bgColor: string;
  label: string;
  content: string;
  iconPath?: string;
  color?: string;
};

const Card = ({
  bgColor,
  label,
  content,
  iconPath,
  color = "white",
}: Props) => {
  return (
    <div style={{ background: bgColor }} className="p-5 rounded-[10px]">
      <div className="flex justify-between ">
        <CustomTxt text={label} type="p1" color={color} />
        {iconPath && <Image path={iconPath} className="w-10 h-10" />}
      </div>
      <CustomTxt
        text={content}
        type="h6"
        align="start"
        weight="bold"
        className="flex items-center"
        color={color}
      />
    </div>
  );
};

export default Card;
