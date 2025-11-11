import React from "react";
import Bottom from "../components/include/Bottom";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

export function Home() {
  return (
    <>
      <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] overflow-hidden flex gap-3">
        {/* left div */}
        <div className="flex-[4]">
          <Greetings />
          <div className="flex items-center w-full gap-3 px-8 mt-8">
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
        </div>
        {/* right div */}
        <div className="flex-[2] bg-[#499586]"></div>
        <Bottom />
      </section>
    </>
  );
}

export default Home;
