type Props = {
  bgColor: string;
  text: string;
  btnType?: "box" | "round";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
  bgColor,
  text,
  btnType = "round",
  disabled,
  type = "button",
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      type={type}
      className={`text-white border-none py-2 font-sans cursor-pointer  text-[32px] transition-colors mt-2 ${
        btnType === "round" ? "rounded-[25px]" : "rounded-[10px] w-full"
      }`}
      style={{
        background: disabled ? "#00000040" : bgColor,
        fontFamily: "Baloo 2",
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
