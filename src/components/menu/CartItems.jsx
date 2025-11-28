import React, { useEffect, useRef } from "react";

import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

export const CartItems = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const removeFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="px-4 py-2">
      <h2 className="font-bold text-md tracking-wide text-[#e4e4e4]">
        Order Details
      </h2>
      <div
        className="mt-2 overflow-y-scroll no-scrollbar h-[250px]"
        ref={scrollRef}
      >
        {cartData.length == 0 ? (
          <p className="text-[#ababab] text-sm flex justify-center items-center h-[250px]">
            Your cart is empty. Please add some items!
          </p>
        ) : (
          cartData.map((item) => {
            return (
              <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold tracking-wide text-[#ababab] text-sm">
                    {item.name}
                  </h2>
                  <p className="text-[#ababab] font-semibold">
                    x{item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    <RiDeleteBack2Fill
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#ababab] text-xl cursor-pointer"
                      size={15}
                    />
                    <FaNotesMedical
                      className="text-[#ababab] text-xl cursor-pointer"
                      size={15}
                    />
                  </div>
                  <p className="text-[#f5f5f5] font-semibold text-md">
                    ₵{item.price}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartItems;
