import React, { createContext, useState } from "react";
import UserLogin from "./UserLogin";
import CatererLogin from "./CatererLogin";
import Navbar from "../../components/Navbar";
import {BiArrowBack} from 'react-icons/bi'
import {
  TbArrowBack
} from "react-icons/tb"
import { Link } from "react-router-dom";
export const LoginWrapTab = createContext();

const LoginWrap = () => {
  
  
  const initialTabMenuItems = [
    {
      text: "User Login",
      tab: <UserLogin />,
      
    },
    {
      text: "Caterer Login",
      tab: <CatererLogin />,
    },
  ];

  

  const [selected, setSelected] = useState(0);
  const [tabMenuItems, setTabMenuItems] = useState(initialTabMenuItems);

  const updateByID = (id) => {
    
      
        let tempTabMenuItems = [...tabMenuItems];
        tabMenuItems[0].text = "Update Club";
        setTabMenuItems(tempTabMenuItems);
    setSelected(0);
  };

  return (
   
      <section className="">
        <div className="h-full w-full px-8 items-center">
          <Navbar/>
          <header className="pt-8"> 
            {tabMenuItems.map((item, idx) => {
              return (
                <button
                  onClick={() => setSelected(idx)}
                  key={idx}
                  style={
                    selected === idx
                      ? {
                        WebkitBoxShadow: "2px -2px 25px 0px rgba(0,0,0,0.1)",
                        clipPath:
                          "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)",
                      }
                      : {}
                  }
                  className={`${selected === idx &&
                    "bg-phorange rounded-t-lg box-border  font-semibold"
                    } px-6 py-4`}
                >
                  <p className="">{item.text}</p>
                </button>
              );
            })}
          </header>
        </div>
        <div className="w-full h-1 bg-phorange"></div>
        {tabMenuItems[selected].tab}
        
      </section>
  );
};

export default LoginWrap;