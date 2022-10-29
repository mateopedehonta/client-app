import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Component/Header";
import CartContainer from "./Containers/CartContainer";
import ItemProduct from "./Items/ItemProduct";
import { BsCart4 } from "react-icons/bs";
import { userCartContext } from "./Context/CartContext";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showList, setShowList] = useState("");
  const { get, products } = userCartContext();
  const { nameCollection } = useParams();
  useEffect(() => {
    document.title = nameCollection;
    get(nameCollection);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      {/* <Sidebar showMenu={showMenu} /> */}
      <CartContainer showOrder={showOrder} setShowOrder={setShowOrder} />
      <button
        onClick={toggleOrders}
        className="h-18 text-3xl rounded-full lg:hidden p-2 fixed  bottom-0 right-0 text-gray-400 py-2 px-8 bg-black m-2"
      >
        <BsCart4 />
      </button>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        {products != null ? (
          <div className="md:p-8 p-4">
            <Header nameCollection={nameCollection} />

            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6 ">
              <a
                onClick={() => {
                  setShowList("");
                }}
                href="#"
                className={
                  showList === ""
                    ? "relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
                    : "relative py-2 pr-4"
                }
              >
                Todos
              </a>
              {products.map((itemList) => (
                <a
                  key={itemList.id}
                  onClick={() => {
                    setShowList(itemList.name);
                  }}
                  href="#"
                  // className="relative py-2 pr-4 "
                  className={
                    showList === itemList.name
                      ? "relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
                      : "relative py-2 pr-4"
                  }
                >
                  {itemList.name}
                </a>
              ))}
            </nav>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {products.map((itemList) => (
                <>
                  {itemList.name === showList || showList == ""
                    ? itemList.list.map((item) => (
                        <ItemProduct item={item} key={item.id} />
                      ))
                    : ""}
                </>
              ))}
            </div>
          </div>
        ) : (
          <h1>Cargando</h1>
        )}
      </main>
    </div>
  );
}
export default App;
