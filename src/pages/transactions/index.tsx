import Header from "./Header";
import CustomSidebar from "./Sidebar";
import Content from "./Content";
import Sidebar from "../../components/Sidebar";

const BetTransactions = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="flex">
        <CustomSidebar />
        <Content />
      </div>
    </>
  );
};

export default BetTransactions;
