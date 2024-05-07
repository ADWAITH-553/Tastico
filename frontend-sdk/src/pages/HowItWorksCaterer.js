import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const HowItWorksCaterer = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="w-full h-full overflow-x-hidden font-sans ">
          <Navbar />
        </div>
      </nav>
    <div className='w-full h-full'>
      <section
        className="w-full p-4 flex flex-col items-center justify-center lg:h-screen mobile:h-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 1, 3, 0.8), rgba(58, 1, 16, 0.6)), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" how_it_works_text font-mont text-white text-center">
          <h1 class="font-extrabold tracking-wide text-white lg:text-5xl mobile:text-3xl pt-3">
            How is CaterBid beneficial to a caterer?
          </h1>
        </div>

        <div className="desc_text text-white text-center">
          <h1 class="font-mont tracking-tight text-red-200 text-3xl pt-10">
            <p>
              CaterBid helps you find clients by giving your businesses a platform to bid on catering opportunities posted by our users. 
              You can also use our platform to showcase your work and get more clients.
            </p>
          </h1>
        </div>

        <div className="desc2_text text-white text-center">
          <h2 class="font-mont tracking-tight text-6xl p-10 text-white">
            May the best <span className="text-phorange">bid</span> win!
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className=" lg:pt-8 lg:pb-8 lg:px-8  w-fit h-fit lg:grid grid-cols-3 mobile:p-10 bg-white mt-6 mb-12 bg-opacity-60 rounded-lg items-center justify-center place-items-center mobile:py-7">
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
                src="https://cdn-icons-png.flaticon.com/512/4056/4056002.png"
                alt="step2.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">2. Bid on Events </h1>
            </div>
            <div className="pl-8 pr-8 flex flex-col items-center mobile:py-7">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2104/2104072.png"
                alt="step3.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">3. Be competetive </h1>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <button className="p-4 mt-2 transition ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
            <Link to="/HowItWorks">I'm a user</Link>
          </button>
        </div>
      </section>
    </div>
    </React.Fragment>
  );
};

export default HowItWorksCaterer;
