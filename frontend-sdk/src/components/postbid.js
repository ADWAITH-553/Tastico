// Used in Caterer Home

import React from "react";
import Bidsofar from "./Bidsofar.js";
import Inputfield from "./TextInput.js";
import { useState } from "react";
import axios from "axios";

const Postbid = ({ postheadline = "postheadline", uname="uname", date="date", description="Blah blah",deadline="deadline",bids,num,eventcount,postid,caterer}) => {
  const [bidamount,setBidamount] = useState(0);
  const [pitch,setPitch] = useState("");

  const handleClick = () => {
    console.log("clicked");
    console.log(bidamount);
    console.log(pitch);
    console.log(postid);
    console.log(caterer);
    axios.post(`http://localhost:3001/bids/cbid/${postid}`,{
      caterer: caterer,
      amount: bidamount,
      pitch: pitch
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    }
    )
    window.location.reload();
  }
  const iterbidsofar = bids.map((item)=>(
    <Bidsofar c_name={item.c_name} amount={item.amount}></Bidsofar>
  ))
  return (
    <div>
      <label htmlFor={`my-modal-${num}`} className="btn h-fit w-fit bg-white flex-row py-20 shadow-xl">
        <div>
          <div className="text-3xl text-black ">{postheadline}</div>
          <div class="inline-flex items-center justify-center w-full">
              <span class="w-80 mb-6 h-px bg-gray-200 border-0 dark:bg-gray-700 ">
                {" "}
              </span>
            </div>
        <div className="flex flex-cols">


          <div>
          <div class="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 left-3  ">
            <svg
              class="absolute w-28 h-28 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          {/* <div className="text-center p-4 ">{uname}</div> */}
          </div>

          <div className="p-4 ml-14 mt-1  mb-4">
            <div className="text-black text-center text-2xl font-semibold">
              {uname}
            </div>
            <div className="p-2 text-black">{description}</div>
            {/* <div className="text-center mb-2">{uname}</div>
            <div className="text-center">{date}</div> */}
          </div>
        </div>
        <div className="flex justify-between gap-x-12 text-blue-300 text-xs mt-4">
            <div>
              Event Count : {eventcount}
            </div>
            <div>
              No.of bids : {bids.length}
            </div>
            <div>
              Deadline : {deadline}
            </div>
        </div>
        </div>
       
      </label>

      <input type="checkbox" id={`my-modal-${num}`} className="modal-toggle" />
      <label htmlFor={`my-modal-${num}`} className="modal cursor-pointer">
        <label className="modal-box relative max-w-5xl h-[700px]" htmlFor="">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{postheadline}</h3>
            <h4 className="text-lg font-bold">{deadline}</h4>
          </div>
          <div className=" w-full h-54 rounded-lg mt-10">
            <div className="text-4xl text-center text-black  p-3 rounded-xl">
              {description}
            </div>
            <div className="text-center text-black text-xl">biryani</div>

            <div class="inline-flex items-center justify-center w-full mb-5">
              <span class="w-[824px] h-px my-5 bg-gray-200 border-0 dark:bg-gray-700">
                {" "}
              </span>
            </div>

            <div className="flex w-full">
              <div class="Review flex flex-cols items-top justify-left w-1/2 h-[300px]  overflow-y-auto overflow-x-auto pl-6">
                <div class="ratingcomp flex flex-col justify-center w-96 p-4  ">
                  <div className="text-xl font-semibold mb-6 ml-2">
                    Bids so far
                  </div>
                  <div>
                  {iterbidsofar}
                  </div>
                </div>
              </div>
              <div className="w-1/2 mx-6">
                <div className="bg-slate-300 h-[275px] w-full rounded-xl ml-3 p-4">
                  <div className="ml-4 text-3xl font-semibold ">
                    Provide your bids
                  </div>

                  <div className="mt-2">
                    <Inputfield
                      valueState={[bidamount,setBidamount]}
                      type="text"
                      placeholder="Enter your bid :"
                      className="border-gray-300 py-1 px-2 w-full rounded"
                    />
                  </div>
                  <div className="mt-2">
                    <Inputfield
                      valueState={[pitch,setPitch]}
                      type="text"
                      placeholder="Enter your pitch :"
                      className="border-gray-300 py-1 px-2 w-full rounded"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button class=" mr-2 mt-4  w-[90px] py-3 text-center text-white font-semibold rounded-xl hover bg-slate-600 hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 "
                    onClick={handleClick}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default Postbid;
