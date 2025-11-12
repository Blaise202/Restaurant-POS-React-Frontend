import React from "react";
import Bottom from "../components/include/Bottom";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

export function Home() {
  return (
    <>
      <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] overflow-auto flex gap-3 no-scrollbar">
        {/* left div */}
        <div className="flex-[4]">
          <Greetings />
          <div className="flex items-center w-full gap-3 px-4 mt-3">
            <MiniCard
              title="Total Earnings"
              icon={<BsCashCoin />}
              number={514}
              footerNum={1.6}
            />
            <MiniCard
              title="In Progress"
              icon={<GrInProgress />}
              number={15}
              footerNum={3.6}
            />
          </div>
          <RecentOrders />
        </div>
        {/* right div */}
        <div className="flex-[2]">
          <PopularDishes />
        </div>
        <Bottom />
      </section>
    </>
  );
}

export default Home;
