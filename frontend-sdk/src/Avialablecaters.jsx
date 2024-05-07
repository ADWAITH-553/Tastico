import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Avialablecaters() {
    const navigate=useNavigate()
    const [user,setUser]=useState([])
    const [data,setData]=useState([])
    useEffect(() => {
        axios
          .get(`http://localhost:3001/auth/caters`)
          .then((res) => {
            console.log(res.data);
            setUser(res.data.caters);
            console.log(user)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
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
     <div>
    {
        user.map((user)=>(<>
          
        
        <div className='border-4 mx-12 my-20 '>
        <div className="my-4 mx-4">
        <div className>{user.cname}</div>
        <div>{user.caddress}</div>
        <div>{user.dish}</div>
        <div>max count:{user.count}</div>
        </div> 
        <div className="mx-4"><b>Dishname</b>
        <b className="mx-2">Price</b>
        </div>
        
        {
            
            user.dishavail.map((dish)=>(<>
            
            <div className="flex mx-6">
            
            <h1>{dish.name}</h1>
            <h1 className="mx-4">{dish.price}</h1>
            </div>
            </>))
        }
        <div className='flex justify-end my-4'>
        <button type="button" onClick={()=>{window.localStorage.setItem("bookcater",user._id);window.localStorage.setItem("catername",user.cname);navigate('/calculate') }} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-4">
            calculate
            
        </button>
        </div>
     </div></>))
    }
    </div>
    

  </>
  )
}
