import React from "react";
import Bottom from "../components/include/Bottom";

export function Home() {
  return (
    <>
      <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] overflow-hidden flex gap-3">
        {/* left div */}
        <div className="flex-[3] bg-[#589693]"></div>
        {/* right div */}
        <div className="flex-[2] bg-[#499586]"></div>
        <Bottom />
      </section>
    </>
  );
}

export default Home;
