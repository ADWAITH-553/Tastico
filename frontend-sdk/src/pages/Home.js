import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";
const Home = () => {
  // use setINterval to refresh page every 10 seconds
  return (
      <div className="w-screen h-screen overflow-x-hidden font-sans ">
        <Navbar />
        <div className="md:w-full md:h-full md:fixed">
        <Mainsection />
        </div>
      </div>
  );
};

export default Home;
