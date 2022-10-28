import AddCart from "../Component/AddCart";

const ItemProduct = ({ item }) => {
  const { description, url, name, price } = item;
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300 h-max">
      <img
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-md"
        src={url}
        alt=""
      />
      <p className="text-xl">{name}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{description}</p>
      <AddCart item={item}/>
    </div>
  );
};
export default ItemProduct;
