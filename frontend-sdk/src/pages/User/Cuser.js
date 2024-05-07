import React from "react";
import Progress_bar from "../../components/progressbar";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { SiGooglemaps } from "react-icons/si";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useState } from "react";
const Cuser = () => {
  const [value, setValue] = useState(0);
  const {cid} = useParams();
  return (
    
    <div class="m-0 w-screen h-screen">
      <Navbar/>

      <div class="whole m-0 w-full p-2 bg-white h-full ">
        <div class=" toppart grid grid-cols-1 lg:grid-cols-3 items-center  justify-center w-full bg-white  lg:m-12 ">
          <div className=" profile_bio flex flex-col shadow w-full rounded-xl">
            <div class="flex justify-center content-center ">
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
                {`@${cid}`}
                <span class="font-light text-gray-500"></span>
              </h1>
              <p class=" text-gray-800 text-2xl mt-3">Ashwin Veluswamy</p>
              <p class="font-light text-gray-600 mt-3">Tamil Nadu, India</p>

              <p class="mt-8 text-gray-500 font-semibold">Signature Dish </p>
              <p class="mt-2 text-gray-500">
                Italian Cuisine and North Indian Snacks
              </p>
            </div>
          </div>
          <div class="media_Review flex justify-center h-fit w-full my-10 ">
            <div className="media flex flex-col w-full h-full items-center">
              <div className="row1 flex m-2">
                <div class="grid m-2 md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24 hover:bg-blue-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1">
                  <div class="font-bold text-gray-700 text-3xl m-auto pt-3">
                    <CiMail />
                  </div>
                  <div class="text-gray-400">Mail</div>
                </div>

                <div class="grid m-2 md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24 hover:bg-orange-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1">
                  <div class="font-bold text-gray-700 text-3xl m-auto pt-3">
                    <SiGooglemaps />
                  </div>
                  <div class="text-gray-400">Maps</div>
                </div>
              </div>
              <div className="row2 flex m-2">
                <div class="grid m-2 md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24 hover:bg-yellow-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1 ">
                  <div class="font-bold text-gray-700 text-3xl m-auto pt-3">
                    <AiOutlineInstagram />
                  </div>
                  <div class="text-gray-400">Instagram</div>
                </div>

                <div class="grid m-2 md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24 hover:bg-purple-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1">
                  <div class="font-bold text-gray-700 text-3xl m-auto pt-3">
                    <AiOutlineFacebook />
                  </div>
                  <div class="text-gray-400">Facebook</div>
                </div>
              </div>
            </div>
          </div>
          <div class="Review flex flex-col lg:items-start items-center justify-center min-h-full w-full">
            <div class="ratingcomp flex flex-col justify-center m-2">
            <p className="text-3xl font-bold align-left mb-2">Ratings</p>
            <div class="flex items-center">
            <Rating
            name="read-only"
            value={4}
            size="large"
            readOnly>
            </Rating>
            <p>1032</p>
            </div>
            <p className="text-3xl font-bold align-left mt-14 mb-2">Rate them!</p>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              precision={0.5}
              size="large"
            />
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col justify-center px-36">
          <p class="text-gray-600 text-center font-light lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
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
export default Cuser;
