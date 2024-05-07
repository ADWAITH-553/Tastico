import React from 'react'
import { useState } from 'react';
import Inputfield from '../../components/TextInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Catersignup() {
  const navigate=useNavigate()
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyFullName, setCompanyFullName] = useState("");
    const [dish, setDish] = useState("");
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [ph,setPh]=useState("")
    const [count,setCount]=useState(0)
    async function Signup(){
    
        const res= axios.post("http://localhost:3001/auth/csignup2",{cname:companyFullName,caddress:companyAddress,password:password,dish:dish,email:email,ph:ph,count:count})
        if(res!=null){
          toast.success("Signup successful")
          navigate('/')
        }
        else{
          toast.error("invalid credentials")
        }
    }
  return (
    <>
     <div className="flex flex-col">

      <div className="mt-5">
        <Inputfield
          type="text"
          placeholder="Company Name"
          valueState={[companyFullName, setCompanyFullName]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="Company Address"
          valueState={[companyAddress, setCompanyAddress]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="signature dish"
          valueState={[dish, setDish]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="email"
          valueState={[email, setEmail]}
          className="border-gray-300 py-1 px-2 rounded"
        />
         <Inputfield
          type="password"
          placeholder="password"
          valueState={[password, setPassword]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="phno"
          valueState={[ph, setPh]}
          className="border-gray-300 py-1 px-2 rounded"
        />
          <Inputfield
          type="text"
          placeholder="max count"
          valueState={[count, setCount]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <button style={{backgroundColor:"red"}} onClick={Signup}>Signup</button>
      </div>
      </div>
    
    
    </>
  )
}
