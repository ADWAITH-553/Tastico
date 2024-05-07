import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
let count=0;
let res
export default function Caterprofile() {
  async function response(id){
    console.log(id)
    const res=await axios.post('http://localhost:3001/auth/response',{id})
    window.location.reload(false)
    console.log(res)
  }
  async function reject(id){
    console.log(id)
    const res=await axios.post('http://localhost:3001/auth/reject',{id})
    window.location.reload(false)
    console.log(res)
  }
  const [isActive, setIsActive] = useState(false);
  const [cname,setCname]=useState('')
  const [caddress,setCaddress]=useState('')
  const [cphno,setCphno]=useState('')
  const [sigdish,setSigdish]=useState('') 
  const [dishes,setDishes]=useState([])
  const [buname,setBuname]=useState({})
  const [event,setEvent]=useState([])
  const [total,setTotal]=useState([])
  const [food,setFood]=useState([])
  const [book,setBook]=useState([])
  const [bookdish,setBookdish]=useState([])
  const [accept,setAccept]=useState(false)
function handle()
{
console.log("hii")

 
}   
useEffect( () => {
  const id=localStorage.getItem('uid')
  const fetchbook=async()=>{
  res=await axios.post('http://localhost:3001/auth/bookings',{id})
    setBook(res.data)
    console.log("bookkkk")
    setBookdish(res.data.booked)
    console.log(book)
  // setBook(res.data[0])
  // console.log("book")
  // console.log(book)
  // console.log(res.data.length)
  // setBuname(response.data.uname)
  // setEvent(response.data.event)
  // setTotal(response.data.grandTotal)
  // setFood(response.data.booked)
  // console.log(buname)
  // console.log(event)
  // console.log(total)
  // console.log(food)

  }
  fetchbook()
}
  , []);
 useEffect( () => {
        const id=localStorage.getItem('uid')
        const fetchcater=async()=>{
        const response=await axios.post('http://localhost:3001/auth/caterbyid',{id})
         // console.log(response.data)
         setCname(response.data.cname)
         setCaddress(response.data.caddress)
         setCphno(response.data.cphno)
         setSigdish(response.data.dish)
         setDishes(response.data.dishavail)
          console.log(cname)
        //   res=await axios.post('http://localhost:3001/auth/bookings',{id})
        // // console.log(res)
        // //  console.log(res.data[0])
        //   setBook(res.data[0].booked)
        //   console.log(book)
        }
        fetchcater()
    }
        , []);
  return (
     <>
       <div className="flex items-center mobile:justify-center sm:justify-start w-1/4 mobile:space-2  sm:space-x-4 mobile:space-x-2 ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
          className="px-1 sm:h-12 mobile:h-8"
          alt="logo"
        />
        <h1  className="sm:text-2xl mobile:text-xl font-bold text-red-500">
          TASTICO
        </h1>
      </div>
     <hr />
     <div className='flex'>
     <div className=" profile_bio flex flex-col shadow w-1/3 my-12 mx-12">
            <div class="flex justify-center content-center p-5">
              <div class="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="relative text-gray-400 "
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
            </div>
            <div class="mt-2 text-center border-b p-8">
              <h1 class="text-4xl font-medium ">
                
                <span class="font-light text-gray-500"></span>
              </h1>
              <p class=" text-gray-800 text-2xl mt-3"></p>
              <p class="font-light text-gray-600 mt-3">NAME: {cname}</p>
              <p class="font-light text-gray-600 mt-3">ADDRESS: {caddress}</p>
              <p class="font-light text-gray-600 mt-3">SIGNATUREDISH: {sigdish}</p>

              <p class="mt-8 text-gray-500 font-semibold">{cphno}</p>
              <p class="text-gray-500">
               
              </p>
              <div className='flex justify-around'>
                  <b>Dishes</b>
                  <b>Price</b>
                </div>
l             
                       {
            
                        dishes.map((dish)=>(<>
                        
                        <div className="flex mx-16 justify-around">
                        
                        <h1>{dish.name}</h1>
                        <h1 className="mx-14">{dish.price}</h1>
                        </div>
                        </>))
                    }
                
              
            </div>
            
              
          </div>
          <div className='border-4'>
          <h1 className='font-mono font-bold text-2xl mx-36'>ORDER MANAGEMENT</h1>
l             <div>
                       {
                        
                        book.map((book)=>(<>
                        <div className='border-2 my-4 mx-2'>
                        <div className="flex-col mx-16 justify-around">
                        <br />
                        <b>BOOKEDUSER:{book.uname}</b>
                        <br />
                        <b className="">EVENTNAME:{book.event}</b>
                        <br />
                        {
                          book.booked.map((bookdish)=>(<>
                          <b>dishname:{bookdish.name}</b>
                          <br />
                          <b>totalpeople:{bookdish.attendees}</b>
                          <br />
                          <b>totalcost:{bookdish.totalCost}</b>
                          <br />
                          
                          
                          </>))
                        }
                        <b className='text-red-600 border-4 mb-2'>GRANDTOTAL:{book.grandTotal}</b>
                        <br />
                        <b className='text-red-600'>DATE:{book.date}</b>
                        <br />
                        {/* <button className="bg-green-700 rounded-md hover:bg-green-200">ACCEPT BOOKING</button> */}
                        {!book.response ? (
                        <button onClick={(e)=>response(book._id)}className="bg-green-600 hover:bg-green-300">ACCEPT BOOKING</button>
                        ) : (
                        <button disabled className="bg-green-900">✅ACCEPTED BOOKING</button>
                        )}
                         {!book.rejected ? (
                        <button onClick={(e)=>reject(book._id)}className="bg-red-600 hover:bg-red-300 mx-3">REJECT BOOKING</button>
                        ) : (
                        <button disabled className="bg-red-600 mx-3">REJECTED</button>
                        )}
                        </div>
                        </div>
                        </>))
                    }
                
              
            </div>
          </div>
          </div>
            <h1>hii</h1>
           
         
          
     </>
  )
}
