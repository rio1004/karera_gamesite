import { useEffect, useState } from "react";
import clsx from "clsx";
import { UI_COLORS } from "../constants/colors";
import CustomTxt from "./Text";
import Image from "./Image";
import { IoMdClose } from "react-icons/io";
import { SIDEBAR_IMGS } from "../constants/images";
import { useNavigate } from "react-router-dom";
import { useMainStore } from "../store/useMainStore";
import { useAuthStore } from "../store/slices/useAuthStore";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useMainStore();
  const { user } = useAuthStore();
  const [shouldRender, setShouldRender] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSidebar) {
      setShouldRender(true);
      setTimeout(() => setAnimateIn(true), 20);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showSidebar]);

  const handleNavigate = (url: string) => {
    navigate(url);
    setShowSidebar(false);
  };

  if (!shouldRender) return null;

  return (
    <>
      <div
        onClick={() => setShowSidebar(false)}
        className={clsx(
          "fixed inset-0 bg-[#1A1A1ABF] z-40 transition-opacity duration-300",
          animateIn ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={clsx(
          "fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-50 border-l border-gray-300 transform transition-transform duration-300 ease-in-out",
          animateIn ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="text-white p-[22px] flex justify-between items-start"
          style={{ background: UI_COLORS.PLAIN.btnGreen }}
        >
          <div>
            <h2 className="text-lg font-semibold">{user?.userName}</h2>
            <p className="text-sm opacity-80">ID: {user?.id}</p>
          </div>
          <button
            onClick={() => setShowSidebar(false)}
            className="text-white text-xl"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <CustomTxt
              text="Cashier"
              color="#0E9F68"
              type="p1"
              weight="medium"
              align="start"
            />
            <div className="space-y-2">
              <button
                className="w-full flex items-center gap-3 p-2 rounded hover:bg-gray-100"
                onClick={() => navigate("/transactions")}
              >
                <Image
                  path={SIDEBAR_IMGS.walkInPeso}
                  style={{ height: "25px" }}
                />
                <CustomTxt text="Cashier (Walk-In)" type="h8" color="#595959" />
              </button>
              <button
                className="w-full flex items-center gap-3 p-2 rounded hover:bg-gray-100"
                onClick={() => handleNavigate("/transactions")}
              >
                <Image
                  path={SIDEBAR_IMGS.TerminalPeso}
                  style={{ height: "25px" }}
                />
                <CustomTxt
                  text="Cashier (Terminals)"
                  type="h8"
                  color="#595959"
                />
              </button>
            </div>
          </div>

          <div>
            <CustomTxt
              text="Betting"
              color="#0E9F68"
              type="p1"
              weight="medium"
              align="start"
            />
            <div>
              <button
                className="w-full flex items-center gap-3 p-2 rounded hover:bg-gray-100"
                onClick={() => handleNavigate("/bet-game/dos-letra")}
              >
                <Image path={SIDEBAR_IMGS.BetPeso} style={{ height: "25px" }} />
                <CustomTxt text="Betting (Walk-In)" type="h8" color="#595959" />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t">
            <button className="w-full flex items-center gap-3 p-2 rounded text-red-600 hover:bg-gray-100">
              <Image path={SIDEBAR_IMGS.SignOut} style={{ height: "25px" }} />
              <CustomTxt text="Sign Out" type="h8" color="#595959" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
