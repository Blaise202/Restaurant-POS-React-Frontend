import React from "react";
import Bottom from "../components/include/Bottom";
import BackButton from "../components/include/BackButton";
import TableCard from "../components/tables/TableCard";

export const Tables = () => {
  const [status, setStatus] = React.useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] no-scrollbar">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Tables
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-md ${
              status == "all" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-md ${
              status == "booked" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Booked
          </button>
          <button
            onClick={() => setStatus("available")}
            className={`text-[#ababab] text-md ${
              status == "available" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Available
          </button>
          <button
            onClick={() => setStatus("occupied")}
            className={`text-[#ababab] text-md ${
              status == "occupied" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Occupied
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll no-scrollbar">
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </div>
      <Bottom />
    </section>
  );
};

export default Tables;
