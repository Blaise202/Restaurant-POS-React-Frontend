import React from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";

const MenuContainer = () => {
  const [selected, setSelected] = React.useState(menus[0]);

  const [itemCount, setItemCount] = React.useState(0);
  const [itemId, setItemId] = React.useState();
  const increment = (id) => {
    setItemId(id);
    setItemCount(itemCount + 1);
  };
  const decrement = (id) => {
    setItemId(id);
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4 bg-[] w-[100%]">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`p-2 bg-[${menu.bgColor}] rounded-lg cursor-pointer hover:scale-105 transition-all`}
            onClick={() => {
              setSelected(menu);
              setItemId(0);
              setItemCount(0);
            }}
          >
            <div className="flex mb-3 items-center justify-between gap-2">
              <h2 className="text-[#f5f5f5]  text-md font-semibold">
                {menu.icon} {menu.name}
              </h2>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-[#f5f5f5] cursor-pointer" />
              )}
            </div>
            <p className="text-[#ababab] text-sm">{menu.items.length} items</p>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 my-4" />

      <div className="grid grid-cols-4 gap-4 px-4 bg-[] w-[100%]">
        {selected.items.map((item) => (
          <div
            key={item.id}
            className={`p-2 bg-[#151515] hover:bg-[#1a1a1a] rounded-lg cursor-pointer transition-all`}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[#f5f5f5]  text-md font-semibold">
                {item.name}
              </h2>
            </div>
            <div className="flex mt-4 items-center justify-between">
              <p className="text-[#ababab] font-bold text-md">₵ {item.price}</p>
              <div className="">
                <div className="flex items-center gap-2 justify-between rounded-lg">
                  <button
                    onClick={() => decrement(item.id)}
                    className=" text-red-400 hover:scale-105 transition-all px-3 rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-white">
                    {itemId === item.id ? itemCount : 0}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-[#F6B100] px-3 hover:scale-105 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuContainer;
