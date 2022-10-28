import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = ({nameCollection}) => {
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">{nameCollection}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
