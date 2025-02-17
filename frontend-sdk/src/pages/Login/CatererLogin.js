import React, { useState } from 'react';
import Inputfield from "../../components/TextInput"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const CatererLogin = () => {
  const [User, setUser] = useState("");
  const [pwd, setpwd] = useState("");
  const navigate = useNavigate();
  const handleClick = event => {
    if(User === "" || pwd === ""){
      event.preventDefault();
      toast.error('Please fill all the fields');
    }
    else{
    event.preventDefault()
    console.log(pwd);
    console.log(User);
    axios
        .post('http://localhost:3001/auth/clogin2', {
          username: User,
          password: pwd,
        })
        .then((res) => {
           let a = res.data.username;
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("Uname", a);
           localStorage.setItem("Uflag", "true");
           localStorage.setItem("Utype", "cater");
          localStorage.setItem("uid",res.data.auth)
          console.log(res.data)
          navigate("/fill");})
        .catch((err) => {
          toast.success("Invalid Credentials")
          console.log(err);})
    }
  };
  
    return (
        <div className="lg:h-screen w-full flex bg-white mobile:h-full lg:fixed ">
        <div style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(230, 230, 230, 0.3), rgba(230, 230, 230, 0.9)), url(https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
        
          className="flex flex-col items-center mobile:w-full mobile:h-full mobile:pb-20 mobile:pt- bg-white lg:py-0  ">
          

          <div className="flex flex-col lg:flex-row w-full bg-transparent items-center justify-center mx-auto p-10 pt-28 pd-28">
            <div className="flex flex-col lg:flex-row lg:w-2/3 h-fit rounded-3xl shadow-md">
            <div
              className="w-full lg:rounded-l-2xl mobile:rounded-t-2xl lg:rounded-none lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-black lg:rounded-l-2xl "
  
            >
              <img
                  src="\catPic.png"
                  className="px-1 sm:h-64 mobile:h-24"
                  alt="logo"
                />
            </div>
            <div style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1618411640026-24e40dcde1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80)",
              backgroundSize : "cover",
              backgroundPosition : "center",
              backgroundRepeat : "no-repeat",
              
          }}
          className="flex w-full lg:w-1/2 py-16 px-12 bg-slate-300 lg:rounded-r-2xl justify-center mobile:rounded-b-2xl lg:rounded-none">
              <div className="w-[90%]">
              <h2 className="text-3xl mb-8 font-semibold text-phorange">Caterer login</h2>
              <p className="mb-6 text-white">
                Login in to your account !
              </p>
              <form>
                
                <div className="mb-2">
                    <Inputfield
                        valueState={[User, setUser]}
                        title="Username"
                        placeholder="Enter username"
                        autoComplete='on'
                    />
                    </div>
                    <div className="mb-2">
                    <Inputfield
                        valueState={[pwd, setpwd]}
                        title="Password"
                        placeholder="Enter Password"
                        type='password'
                        autoComplete='on'
                        eyecolor="white"
                    />
                </div>
                </form>
                <button className="text-xs text-phorange hover:underline">
                        Forget Password?
                </button>
                
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                <div class="mt-5">
                  <button class="w-full py-3 text-center text-white font-semibold rounded hover bg-phorange hover:bg-orange-600 active:bg-red-500 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 " onClick={handleClick} >
                    Login
                  </button>
                </div>
            </div>
            </div>
            </div>
          </div>
        </div>
    </div>
    );
}
export default CatererLogin;