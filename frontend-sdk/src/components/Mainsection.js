import React from "react";
import prompts from "./prompts.json";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const Mainsection = () => {
  let data =
    prompts.catchlines[Math.floor(Math.random() * prompts.catchlines.length)];
  return (
    <div className="w-full h-full scrollbar-hide">
      <section
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 1, 3, 0.8), rgba(1, 29, 87, 0.7)), url(https://assets.cntraveller.in/photos/60ba1a540f3a5367ec9fe38e/master/pass/image-1366x768.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col lg:pb-[24px] items-center mobile:w-full mobile:h-full p-4 mobile:pb-20 mobile:pt-20 bg-black lg:py-0 "
      >
        <div className="flex flex-col items-center justify-center w-full h-full scrollbar-hide">
          <div className="w-full px-8 py-4 mt-12 text-center text-white border-dashed border-2 lg:w-2/3 md:mt-20 md:w-2/3">
            <p className="mb-2 sm:text-5xl mobile:text-3xl font-bold text-phorange font-mont">
              {data.heading}
              <br />
            </p>
            <p className="px-4 sm:text-xl mobile:text-base text-justify mt-8 font-mont">
              {data.text}
            </p>
          </div>
          <main className="px-8 pt-4 pb-4 lg:w-2/3 lg:px-[calc(100vw/12)] h-fit grid grid-cols-2 gap-6 bg-white mt-12 mb-12 bg-opacity-60 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h1 className="p-3 mobile:text-xl sm:text-2xl font-mont">
                Are You a Caterer?
              </h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
                alt="caterer.png"
                className=" mobile:h-20"
              ></img>
              <button className="p-4 mt-4 sm:text-base mobile:text-xs transition ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md">
                <Link to="/csignup">Create Caterer Profile</Link>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="p-3 mobile:text-xl sm:text-2xl font-mont">
                Are You a Customer?
              </h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
                alt="customer.png"
                className=" mobile:h-20"
              ></img>
              <button className="p-4 mt-4 transition sm:text-base mobile:text-xs ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
                <Link to="/usersignup">Create User Profile</Link>
              </button>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Mainsection;
