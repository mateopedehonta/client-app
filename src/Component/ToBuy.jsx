import { userCartContext } from "../Context/CartContext";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import UseWhatsapp from "whatsapp-react-component";

const ToBuy = () => {
  const { cartList, getTotal,infoUser } = userCartContext();
  const [enabled, setEnabled] = useState(false);
  const [dataInput, setDataInput] = useState({});
  const addData = (e) => {
    e.preventDefault();
    setDataInput({
      ...dataInput,
      [e.target.name]: e.target.value,
    });
  };
  const toBuy = () => {
    console.log(dataInput.direction);
    let messageList = "";
    cartList.map((item) => {
      const { name, amount } = item;

      messageList =
        messageList +
        `
        ${amount} pizza ${name}`;
    });
    let messageShipping;
    if (enabled) {
      messageShipping = "Lo retiro por el local";
    } else {
      messageShipping = `Quiero que me lo manden a la direccion ${dataInput.direction}`;
    }
    const message = `
    Hola quería pedir ${messageList}
    ${messageShipping}
    Mi nombre es ${dataInput.nameBuyer}
    `;
    console.log(message);
    console.log(infoUser.wppNumber.toString())
    UseWhatsapp(infoUser.wppNumber.toString(), message);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <span>Delivery</span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[24px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          {/*  */}
          <span className="sr-only"></span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <span>Retira por el local</span>
      </div>
      {enabled == true ? (
        <p></p>
      ) : (
        <div>
          <label htmlFor="">
            {" "}
            Direccion{" "}
            <input
              type="text"
              name="direction"
              onChange={addData}
              className="bg-gray-300 text-black rounded-md"
            />
          </label>
        </div>
      )}
      <div>
        <label htmlFor="">
          {" "}
          Su nombre{" "}
          <input
            type="text"
            name="nameBuyer"
            onChange={addData}
            className="bg-gray-300 text-black rounded-md"
          />
        </label>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-400">Total</span>
        <span>{getTotal()}</span>
      </div>
      <button
        onClick={toBuy}
        className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg"
      >
        Terminar compra
      </button>
    </div>
  );
};

export default ToBuy;
