// Used to 
import React from "react";
import BiddersList from "./biddersList";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const BidPopup = (
  {
  name,
  num,
  description,
  src,
  bids,
  selected,
  eventname,
  eventdate,
}) => {
  const [book,setBook]=useState([])

  
    //const id=localStorage.getItem('uid')
    // async function fetchbook(){
    //   console.log("hii")
    // const res=await axios.post('http://localhost:3001/auth/bookingsdesc',{desc:description})
    //   setBook(res.data)
    //   console.log("bookkkkk")
      
    //   console.log(book)
    // // setBook(res.data[0])
    // // console.log("book")
    // // console.log(book)
    // // console.log(res.data.length)
    // // setBuname(response.data.uname)
    // // setEvent(response.data.event)
    // // setTotal(response.data.grandTotal)
    // // setFood(response.data.booked)
    // // console.log(buname)
    // // console.log(event)
    // // console.log(total)
    // // console.log(food)
  
    // }
    

  const bidpopups = bids.map((bid,idx) => (
    <BiddersList key={idx}
      rating={4}
      cname={bid.caterer}
      clocation="coimbatore"
      pitch={bid.pitch}
      bamount={bid.amount}
    />
  ))
  // function getCaters(){
  //   // const res= await axios.get("http://localhost:3001/auth/caters")
  //   // console.log(res)
   
  //   navigate('/available')
  // }
  
  return (
    <div>
      <label className="h-fit "for={`my-modal${num}`}>
        <div class="p-5  bg-white shadow rounded-xl transition ease-in-out flex-cols items-center delay-[50ms] hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 h-40 w-36 ">
          <div className="flex flex-col items-center text-center space-y-3">
          {!src && (
            <div class="relative justify-center w-10 h-10 mt-3 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
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
          )}
          <div>
            <img src={src}></img>
          </div>
          <div className="text-xl">
          {name}{" "}
          </div>
          
          </div>
        </div>
      </label>

      <input type="checkbox" id={`my-modal${num}`} class="modal-toggle" />
      <div className="modal w-screen">
        <div class="modal-box w-11/12 max-w-5xl h-2/3">
          <h3 class="font-bold text-lg ">Event {num}</h3>
          <p class="py-4">
            <div className="text-4xl text-center text-black  p-3 rounded-xl">
              {name}
            </div>
            <div className="text-center text-xl">{description}</div>

            <div class="inline-flex items-center justify-center w-full">
              <span class="w-96 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700">
                {" "}
              </span>
            </div>

            <button onClick={()=>{window.localStorage.setItem("bookeddesc",description)}}className="text-center w-full bg-slate-500 hover:bg-slate-100 font-semibold ">{<Link to='/order'>BOOKINGS</Link>}</button>
           
            <div className="text-center font-semibold p-4">{eventdate}</div>
            <div className="grid grid-cols-3 gap-4 pt-3">
              {bidpopups}
            </div>
            <div class="modal-action">
            <button onClick={()=>{window.localStorage.setItem("description",description)}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            
            {<Link to='/available'>AVAILABLE</Link>}
            </button>
              <label for={`my-modal${num}`} class="btn">
                close
              </label>

            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BidPopup;
