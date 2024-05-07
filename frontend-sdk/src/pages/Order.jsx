import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
export default function Order() {
    const [book,setBook]=useState([])
    useEffect( () => {
        console.log("hii")
        const fetchbook=async()=>{
        const res=await axios.post('http://localhost:3001/auth/bookingsdesc',{desc:window.localStorage.getItem('bookeddesc')})
          setBook(res.data)
          console.log("bookkkk")
          //setBookdish(res.data.booked)
          console.log(book)
        
       
      
        }
        fetchbook()
      },[])
  return (
    <>
        <Navbar/>
     <hr />
    <div>
    {
                        
                        book.map((book)=>(<>
                        <div className='border-2 my-4 mx-2'>
                        <div className="flex-col mx-16 justify-around">
                        <br />
                        <b>CATERNAME:{book.cname}</b>
                      
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
                        {/* <button className="bg-green-700 rounded-md hover:bg-green-200">ACCEPT BOOKING</button> */}
                        {/* {!book.response ? (
                        <button onClick={(e)=>response(book._id)}className="bg-green-600 hover:bg-green-300">ACCEPT BOOKING</button>
                        ) : (
                        <button disabled className="bg-green-900">✅ACCEPTED BOOKING</button>
                        )} */}
                        {book.response ? (
                        <b className="bg-green-600">STATUS:ACCEPTED</b>
                        ) : (
                        <b></b>
                        )}
                        {book.rejected ? (
                        <b className="bg-red-600">STATUS:REJECTED</b>
                        ) : (
                        <b></b>
                        )}
                       
                        </div>
                        </div>
                        </>))
                    }
    </div>
    </>
  )
}

