import { useMainStore } from "../store/useMainStore";

const Burger = () => {
  const { setShowSidebar } = useMainStore();

  return (
    <div
      className="w-[35px] flex flex-col gap-2 items-center justify-center"
      onClick={() => setShowSidebar(true)}
    >
      <div className="w-full h-[4px] bg-white rounded-full"></div>
      <div className="w-full h-[4px] bg-white rounded-full"></div>
      <div className="w-full h-[4px] bg-white rounded-full"></div>
    </div>
  );
};

export default Burger;
