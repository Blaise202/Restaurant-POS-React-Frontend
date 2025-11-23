import React from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";

const MenuContainer = () => {
  const [selected, setSelected] = React.useState(menus[0]);

  return (
    <div className="grid grid-cols-4 gap-4 px-4 bg-[] w-[100%]">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className={`p-2 bg-[${menu.bgColor}] rounded-lg cursor-pointer hover:scale-105 transition-all`}
          onClick={() => setSelected(menu)}
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
  );
};

export default MenuContainer;
