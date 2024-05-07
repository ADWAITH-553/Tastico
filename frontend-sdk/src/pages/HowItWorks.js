import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const HowItWorks = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section
        className=" w-full flex flex-col items-center justify-center lg:h-full mobile:h-fit "
        style={{
          backgroundImage:
            "linear-gradient(to bottom left, rgba(220, 229, 230, 0.1), rgba(0, 50, 35, 0.9)), url(https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" how_it_works_text font-mont text-white text-center">
          <h1 class="font-extrabold tracking-wide text-white lg:text-5xl lg:mt-15 mobile:text-3xl mobile:mt-10 pb-10 ">
            How does CaterBid work?
          </h1>
        </div>

        <div className="desc_text text-white text-center bg-black bg-opacity-50 rounded-lg mx-10 pb-10">
          <h1 class="font-mont tracking-tight text-white lg:text-3xl pt-6 ">
            <p class="p-2 break-words text-phorange mb-3 mobile:text-2xl">It's as simple as an order form.</p>
            <p className="mx-10 mobile:text-2xl text-white">
              You tell us what you want, and the best caterers compatible with
              your needs will find you. Quickly and easily. No more searching
              through hundreds of caterers. No more calling around. No more
              wasting time.
            </p>
          </h1>
        </div>

        <div className="desc2_text text-white text-center">
          <h2 class="font-mont tracking-tight text-6xl p-2 mt-4 text-white">
            You <span className="text-phorange">Post.</span> Caterers <span className="text-phorange">Bid.</span> You <span className="text-phorange">Choose.</span>
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className=" lg:pt-8 lg:pb-8 lg:px-8  w-fit h-fit lg:grid grid-cols-3 mobile:p-10 bg-white mt-12 mb-12 bg-opacity-60 rounded-lg items-center justify-center place-items-center mobile:py-7">
            <div className="pl-8 pr-8 flex flex-col items-center mobile:py-7">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2073/2073019.png"
                alt="step1.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">1. Sign Up or Log In</h1>
            </div>
            <div className="pl-8 pr-8 flex flex-col items-center mobile:py-7">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8131/8131463.png"
                alt="step2.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">2. Post Your Event</h1>
            </div>
            <div className="pl-8 pr-8 flex flex-col items-center mobile:py-7">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3386/3386941.png"
                alt="step3.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">3. Pick the best bid</h1>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <button className="p-4 mt-2 transition ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
            <Link to="/HowItWorksCaterer">I'm a caterer</Link>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HowItWorks;
