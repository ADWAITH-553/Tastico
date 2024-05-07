import React from 'react'
import Navbar from '../components/Navbar'
import Navbarcater from '../components/Navbarcater'
import Inputfield from '../components/TextInput'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
let count=0;
export default function Filldetails() {
   const navigate=useNavigate()
    let d
    let p;
    let error=0;
    const [data,setData]=useState([{dish:"",price:""}])
    const [maxcount,setMaxcount]=useState(0)
    const [dish,setDish]=useState("")
    const [price,setPrice]=useState("")
    const handleClick=()=>{

        setData([...data,{dish:"",price:""}])
        console.log(data)
        console.log(count)
        console.log(data[count].price)
        console.log(data[count].dish)
        if(data[count].dish==" "){
            alert("enter the dish")
            error=1
            return
        }
        else{
            error=0
        }
        submit()
        count=count+1;

    }
    async function  submit(){
        const uid=localStorage.getItem("uid")
        const res=await axios.post("http://localhost:3001/auth/fill",{uid:uid,dish:data[count].dish,price:data[count].price,maxcount:maxcount})
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
        
    }
  return (
    
    <div>
      <Navbarcater/>
      <div className="grid-cols-1  w-full lg:flex flex-row items-center p-4 bg-white">
      <div className="h-auto flex flex-col items-center justify-center bg-no-repeat bg-cover bg-white rounded-l-2xl ">
          <div class=" invisible  lg:visible w-1/3 h-8 bg-gradient-to-r from-phorange absolute inset-y-32 left-0 "></div>
          <br></br>
          <div class="invisible  lg:visible w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-48 left-0 "></div>
          <br></br>
          <div class="invisible  lg:visible w-96 h-8 bg-gradient-to-r from-phorange absolute inset-y-64 left-0 "></div>
          <br></br>
          {/* <div class="relative w-[576px] h-[576px] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl z-10 font-sans">
                  Make it simple, but significant.
              </div> */}

          <div class="invisible  lg:visible w-72 h-8 bg-gradient-to-r from-phorange absolute inset-y-80 left-0 "></div>
          <br></br>
          <div className="text-7xl animate-bounce lg:animate-none lg:text-8xl text-black font-bold mx-auto  z-10 pt-20 px-10 lg:pl-48">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-green-500 ">
              TASTICO
            </span>
            <br />a place for everyone
          </div>
          <div class="invisible lg:visible w-3/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-96 left-0 "></div>
          <br></br>

          <div class="invisible lg:visible w-72 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 "></div>
          <br></br>
          {/* <div class=" w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 " ></div><br></br> */}
          <div class="invisible  lg:visible w-96 h-8 bg-gradient-to-r from-phorange absolute inset-y-[512px] left-0 "></div>
          <br></br>
          <div className="visible lg:invisible w-10 h-10 animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" id="arrow" x="0" y="0" version="1.1" viewBox="0 0 29 29" >
              <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m20.5 11.5-6 6-6-6">
              </path>
              </svg>
          </div>
          <div class="invisible lg:visible w-1/4 h-8 bg-gradient-to-r from-phorange absolute inset-y-[576px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-1/3 h-8 bg-gradient-to-r from-phorange absolute inset-y-[640px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-96 h-8 bg-gradient-to-r from-phorange absolute inset-y-[704px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[768px] left-0 "></div>
          <br></br>
        </div>

        <div className="flex w-full lg:w-3/5 py-0 lg:py-10   bg-white rounded-2xl justify-center shadow-xl shadow-white">
          <div className="w-[80%]">
            

            <div className="container horizontal mt-5">
            <h2 className="text-3xl mb-8 font-semibold">ADD DISHES U OFFER</h2>
         
            <button
                  class="w-96 py-3 text-center text-white font-semibold rounded hover bg-teal-800 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-500 duration-50 transition ease-in-out delay-150" 
                  onClick={handleClick}
                >
                  ADD
                </button>
                <div className='flex justify-around w-96 font-bold'>
                    <p>DISH</p>
                    <p>PRICE</p>

                </div>
            {
                
                data.map((val,i)=>
                <div>
                    <input className='border-2 border-slate-400 mx-2 my-2 rounded-md' name="dish" placeholder='dishname' value={val.dish} onChange={(e)=>handleChange(e,i)} />
                    <input className='border-2 border-slate-400 mx-2 my-2 rounded-md'name="price" placeholder='price' value={val.price} onChange={(e)=>handleChange(e,i)} />
                    
                </div>
                )
            }
             <button
                  class="w-96 py-3 text-center text-white font-semibold rounded hover bg-teal-800 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-500 duration-50 transition ease-in-out delay-150" 
                  onClick={()=>{navigate("/cater")}}
                >DONE</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
