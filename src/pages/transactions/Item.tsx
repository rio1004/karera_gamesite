import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import CustomTxt from "../../components/Text";
import { FaChevronDown } from "react-icons/fa";
type Props = {
  ticket: string;
  amount: number;
};

const Item = ({ amount, ticket }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ticket);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy ticket:", err);
    }
  };

  return (
    <div className="flex w-full justify-between h-[50px] bg-[#EFF3F2] items-center p-3 shadow-md rounded-md">
      {/* WHOLE LEFT SECTION IS CLICKABLE */}
      <div
        onClick={handleCopy}
        className="flex gap-2 items-center cursor-pointer hover:opacity-80"
        title="Click to copy ticket"
      >
        <CustomTxt type="h8" text={ticket} color="#1A1A1A" />
        <RiFileCopyLine color={copied ? "#00a24a" : "#999"} size={18} />
        {copied && <span className="text-xs text-green-600">Copied</span>}
      </div>

      <div className="flex gap-2 items-center">
        <CustomTxt type="h8" text={`₱${amount}`} color="#1A1A1A" />
        <FaChevronDown color="#00a24a" />
      </div>
    </div>
  );
};

export default Item;
