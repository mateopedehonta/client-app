import { userCartContext } from "../Context/CartContext";
import {
  RiAddFill
} from "react-icons/ri";
const AddCart = ({ item }) => {
  const { addItem } = userCartContext();
  const addCart = () => {
    addItem(item)
  };
  return <button onClick={addCart} className="h-4 text-3xl hover:text-4xl flex justify-center items-center"><RiAddFill/></button>;
};

export default AddCart;
