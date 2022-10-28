import { createContext, useContext, useEffect, useState } from "react";
import { getAll, getInfo } from "../Services/service";

const CartContext = createContext();

export const userCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [infoUser, setInfoUser] = useState({});
  const [products, setProducts] = useState(null);
  const addItem = (item) => {
    const { price, name, id } = item;

    if (cartList.find((item) => item.id == id)) {
      let newItem = cartList.find((item) => item.id == id);
      newItem.amount = newItem.amount + 1;
      const newCartList = cartList.filter((item) => item.id !== id);
      setCartList([...newCartList, newItem]);
    } else {
      const newItem = { price, name, id, amount: 1 };
      setCartList([...cartList, newItem]);
    }
  };
  const getTotal = () => {
    let total = 0;
    cartList.map((item) => {
      total = total + item.price * item.amount;
    });
    return total;
  };

  const get = (nameCollection) => {
    getInfo(setInfoUser, nameCollection);
    getAll(setProducts, nameCollection);
  };

  const deleteItem = (id) => {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };
  return (
    <CartContext.Provider
      value={{
        get,
        products,
        infoUser,
        deleteItem,
        getTotal,
        cartList,
        addItem,
        setCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
