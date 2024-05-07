import React from "react";
import {TbCurrencyRupee} from "react-icons/tb";

const Bidsofar = ({c_name,amount}) => {
  return (
    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
      <div>{c_name}</div>
      <div className="text-base font-semibold flex text-green-600 items-center">
        <TbCurrencyRupee />
        {amount}<div></div>
      </div>
    </div>
  );
};

export default Bidsofar;
