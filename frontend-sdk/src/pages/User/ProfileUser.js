import React, {useState,useEffect} from "react";
import Progress_bar from "../../components/progressbar";
import {
  AiFillFileAdd,
  AiFillGooglePlusCircle,
  AiFillPlusCircle,
  AiFillPlusSquare,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { SiGooglemaps } from "react-icons/si";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import BidPopup from "../../components/bidpopup";
import Inputfield from "../../components/TextInput";
import axios from "axios";

const ProfileUser = () => {
  const { id } = useParams();
  // get user details from backend
  const [user, setUser] = useState({
    name: "Ashwin Veluswamy",
    email: "",
    location: "Tamil Nadu, India",
    profile_pic: "",
  });
  // useeffect and axios to update user details
  useEffect(() => {
    axios.get(`http://localhost:3001/auth/uprofile/${id}`)
    .then((res) => {
      console.log(res.data);
      setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div class="m-0 w-screen h-screen">
      {console.log(user)}
      <Navbar />
      <div class="whole m-0 w-full p-2 bg-white h-full ">
        <div class=" toppart flex items-center space-x-12 justify-center w-full bg-white m-12 ">
          <div className=" profile_bio flex flex-col shadow w-1/3">
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
                {`@${id}`}
                <span class="font-light text-gray-500"></span>
              </h1>
              <p class=" text-gray-800 text-2xl mt-3">{`${user.firstname} ${user.lastname}`}</p>
              <p class="font-light text-gray-600 mt-3">Kottayam RIT, India</p>

              <p class="mt-8 text-gray-500 font-semibold">Phone Number </p>
              <p class="text-gray-500">
                {user.phone}
              </p>
            </div>
          </div>
          <div class="media_Review flex justify-center items-center h-fit w-1/4 ">
            <div className="media flex flex-col w-full h-full items-center">
              <div className="row1 flex m-2">
                <label htmlFor="my-modal-4">
                  <div class="grid m-2 md:grid-rows-2 justify-center rounded-full ">
                    <div class=" border border-slate-500 font-bold text-gray-700 text-9xl m-auto duration-300 transition ease-in-out delay-150 hover:-translate-y-1">
                      <AiFillPlusSquare />
                    </div>
                    <div className="font-semibold text-center">
                      Add new event
                    </div>
                  </div>
                </label>

                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle"
                />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                  <label className="modal-box relative max-w-3xl h-[500px]" htmlFor="">
                    <h3 className="text-3xl font-semibold">
                      Enter details of new event
                    </h3>
                    <div className="bg-white w-full rounded-xl ml-3 p-4">
            

                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Post headline :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Items needed :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Deadline :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Description :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Aprox people attending :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button class=" mr-2 mt-4  w-[90px] py-3 text-center text-white font-semibold rounded-xl hover bg-slate-600 hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 ">
                        Submit
                      </button>
                    </div>
                  </div>
                  </label>
                </label>
              </div>
            </div>
          </div>

          <div class="Review flex flex-col items-top justify-left w-1/3 h-96  overflow-y-auto overflow-x-hidden pl-6">
            <div class="ratingcomp flex flex-col justify-center w-96 ">
              <div>
                <BidPopup
                  num="1"
                  name="Mr Bari Wedding"
                  description="Mutton Briyani Yummy"
                  src=""
                />
                <BidPopup
                  num="2"
                  name="Mr Ashwin Wedding"
                  description="Sambar Rice Yummy"
                />
                <BidPopup
                  num="3"
                  name="Mrs Bari Wedding"
                  description="Sambar Rice Yummy"
                />
                <BidPopup
                  num="4"
                  name="Mrs Ashwin Wedding"
                  description="Mutton Briyani Yummy"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col justify-center px-36">
       
        </div>
        <div class="grid lg:grid-cols-2 space-x-4 p-12 ">
          <div class=" bg-white shadow mt-10 grid grid-rows-3">
            <div class="py-5 px-24 ">
              <p></p>
              <Progress_bar
                progress="100"
                height="20px"
                text="Totla no.of events assigned"
                value="33"
              />
            </div>
            <div class="py-5 px-24 ">
              <Progress_bar
                progress="66.66"
                height="20px"
                text="No of events successful"
                value="20"
              />
            </div>
            <div class="py-5 px-24 ">
              <Progress_bar
                progress="33.33"
                height="20px"
                text="Nof of events pending "
                value="11"
              />
            </div>
          </div>

          <div class="p-8 bg-white shadow mt-24">
            <div>
              <p className="font-bold text-2xl m-2">Caterer's Posts</p>
              <label for="my-modal">
                <div class="p-8 bg-white shadow rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-blue-300 hover duration-300 ">
                  Post 1, Hello this is your first post about blah blah,{" "}
                  <b>Click to expand</b>
                </div>
              </label>

              <input type="checkbox" id="my-modal" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box bg-white text-black-300">
                  <h3 class="font-bold text-lg">Post1</h3>
                  <p class="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div class="modal-action">
                    <label for="my-modal" class="btn">
                      Yay!
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <label for="my-modal1">
                <div class="p-8 bg-white shadow rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-blue-300 hover duration-300 ">
                  Post 2, Hello this is your first post about blah blah,{" "}
                  <b>Click to expand</b>
                </div>
              </label>

              <input type="checkbox" id="my-modal1" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">
                    Congratulations random Internet user!
                  </h3>
                  <p class="py-4">This is ypur second post</p>
                  <div class="modal-action">
                    <label for="my-modal1" class="btn">
                      Yay!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileUser;
