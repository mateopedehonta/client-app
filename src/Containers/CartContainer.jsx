import { useEffect, useState } from "react";
import ToBuy from "../Component/ToBuy";
import { userCartContext } from "../Context/CartContext";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const CartContainer = (props) => {
  const { showOrder, setShowOrder } = props;
  const { cartList, deleteItem } = userCartContext();

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Precio</h5>
          </div>

          {cartList.length !== 0 ? (
            <div className="h-[400px] md:h-[700px] lg:h-[450px] overflow-scroll">
              {cartList.map((item) => (
                <div key={item.id} className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-3 flex items-center gap-3">
                      {/* <img src="comida.png" className="w-10 h-10 object-cover" /> */}
                      <div>
                        <h5 className="text-sm">{item.name}</h5>
                        <p className="text-xs text-gray-500">{item.price}</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div>
                      <span>{item.amount}</span>
                    </div>
                    {/* Price */}
                    <div>
                      <span>{item.amount * item.price}</span>
                    </div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="flex justify-end text-2xl text-red-700"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>carrito vacio</h1>
          )}
        </div>
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4 lg:min-h-[300px]">
          <div>
            <ToBuy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
