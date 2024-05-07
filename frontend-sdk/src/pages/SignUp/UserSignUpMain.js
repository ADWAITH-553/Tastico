import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Inputfield from "../../components/TextInput";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserSignUpMain = () => {
  const [Firstname, setFirstname] = useState("");
  const [Surname, setSurname] = useState("");
  const [Phno, setPhno] = useState("");
  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [Uname, setUname] = useState("");
  const [Checkpwd, setCheckpwd] = useState("");
  

  const handleClick = (event) => {
    if (Checkpwd === Pwd && Firstname !== "" && Surname !== "" && Phno !== "" && Email !== "" && Pwd !== "" && Uname !== "") {
      event.preventDefault();
      console.log(Phno);
      console.log(Firstname);
      console.log(Surname);

      axios
        .post("http://localhost:3001/auth/usignup", {
          firstname: Firstname,
          lastname: Surname,
          email: Email,
          password: Pwd,
          phone: Phno,
          username: Uname,
        })
        .then((response) => {
          toast.success("Sign Up Succesful")    
          console.log(response);
        });
      console.log("1");
    }
    else if(Firstname === "" || Surname === "" || Phno === "" || Email === "" || Pwd === "" || Uname === "" || Checkpwd === ""){
      event.preventDefault();
      toast.error('Please fill all the fields');
    }
    else{
      event.preventDefault();
      toast.error('Passwords dont match');
      
    }
  };

  return (
    <React.Fragment>
      <Navbar />

      <div className="grid-cols-1  w-full lg:flex flex-row items-center p-4 bg-white">
        <div className="h-auto flex flex-col items-center justify-center bg-no-repeat bg-cover bg-white rounded-l-2xl ">
          <div class=" invisible  lg:visible w-1/3 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-32 left-0 "></div>
          <br></br>
          <div class="invisible  lg:visible w-5/12 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-48 left-0 "></div>
          <br></br>
          <div class="invisible  lg:visible w-96 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-64 left-0 "></div>
          <br></br>
          {/* <div class="relative w-[576px] h-[576px] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl z-10 font-sans">
                  Make it simple, but significant.
              </div> */}

          <div class="invisible  lg:visible w-72 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-80 left-0 "></div>
          <br></br>
          <div className="text-7xl animate-bounce lg:animate-none lg:text-8xl text-black font-bold mx-auto  z-10 pt-20 px-10 lg:pl-48">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-slate-900 to-blue-300 ">
              TASTICO
            </span>
            <br />a place for everyone
          </div>
          <div class="invisible lg:visible w-3/12 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-96 left-0 "></div>
          <br></br>

          <div class="invisible lg:visible w-72 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-[448px] left-0 "></div>
          <br></br>
          {/* <div class=" w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 " ></div><br></br> */}
          <div class="invisible  lg:visible w-96 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-[512px] left-0 "></div>
          <br></br>
          <div className="visible lg:invisible w-10 h-10 animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" id="arrow" x="0" y="0" version="1.1" viewBox="0 0 29 29" >
              <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m20.5 11.5-6 6-6-6">
              </path>
              </svg>
          </div>
          <div class="invisible lg:visible w-1/4 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-[576px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-1/3 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-[640px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-96 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-[704px] left-0 "></div>
          <br></br>
          
          <div class="invisible lg:visible w-5/12 h-8 bg-gradient-to-r from-teal-800 absolute inset-y-[768px] left-0 "></div>
          <br></br>
          
        </div>
        <div className="flex w-full lg:w-3/5 py-0 lg:py-10 px-10  bg-white rounded-2xl justify-center shadow-xl shadow-white">
          <div className="w-[100%] lg:w-[80%]">
            <h2 className="text-3xl mb-8 font-semibold">Sign Up</h2>
            <p className="mb-6">
              Create your account. It's free and only takes a minute!
            </p>
            <form>
              <div className="mt-2">
                <Inputfield
                  type="text"
                  placeholder="Username"
                  valueState={[Uname, setUname]}
                  className="border-gray-300 py-1 px-2 w-full rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <Inputfield
                  type="text"
                  valueState={[Firstname, setFirstname]}
                  placeholder="Firstname"
                  className=" border-gray-300 py-1 px-2 rounded"
                />
                <Inputfield
                  type="text"
                  valueState={[Surname, setSurname]}
                  placeholder="Surname"
                  className="border-gray-300 py-1 px-2 rounded"
                />
              </div>
              <div className="mt-5">
                <Inputfield
                  type="tel"
                  placeholder="Phone.no"
                  valueState={[Phno, setPhno]}
                  className="border-gray-300 py-1 px-2 w-full rounded"
                />
              </div>
              <div className="mt-5">
                <Inputfield
                  type="text"
                  placeholder="Email"
                  valueState={[Email, setEmail]}
                  className="border-gray-300 py-1 px-2 w-full rounded"
                />
              </div>
              <div className="mt-5">
                <Inputfield
                  type="password"
                  placeholder="Password"
                  valueState={[Pwd, setPwd]}
                  className="border-gray-300 py-1 px-2 w-full rounded"
                />
              </div>

              <div className="mt-5 ">
                <Inputfield
                  type="password"
                  valueState={[Checkpwd, setCheckpwd]}
                  placeholder="Confirm Password"
                  className="border-gray-300 py-1 px-2 w-full rounded"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border-gray-400 mr-1" />
                <span>
                  <a> </a>I accept the{" "}
                  <a className="text-grey-500 font-semibold"> Terms of Use</a> &{" "}
                  <a className="text-grey-500 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div class="mt-5">
                <button
                  class="w-full py-3 text-center text-white font-semibold rounded hover bg-teal-800 hover:bg-teal-500 active:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-500 duration-50 transition ease-in-out delay-150 "
                  onClick={handleClick}
                >
                  Sign Up Now
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
                              </div>
              <div class="text-red-600 font-semibold text-align:center">
                <button class="w-full py-2 text-center text-red-500 font-semibold text-align:center hover hover:text-red-600">
                  <Link to="/csignup">I'm a Caterer </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserSignUpMain;
