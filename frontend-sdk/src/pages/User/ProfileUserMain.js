import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Progress_bar from "../../components/progressbar";
import {
  AiFillPlusCircle,
} from "react-icons/ai";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import BidPopup from "../../components/bidpopup";
import Inputfield from "../../components/TextInput";
import axios from "axios";


const isloggedin = () => {
  const log = localStorage.getItem("Uflag");
  if (log === "true") {
    return true;
  }
  return false;
};
const ProfileUserMain = () => {
  const [p_headline, setp_headline] = useState("");
  const [p_description, setp_description] = useState("");
  const [p_items, setp_items] = useState([""]);
  const [event_count, setevent_count] = useState("");
  const [deadline, setdeadline] = useState("");

  const { id } = useParams();
  // get user details from backend
  const [user, setUser] = useState({
    name: "Ashwin Veluswamy",
    email: "",
    location: "Tamil Nadu, India",
    profile_pic: "",
  });

  const [postdetails, setPostdetails] = useState([]);
  // useeffect and axios to update user details
  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/uprofile/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/post/all/${id}`).
    then((res) => {
      console.log("Posts",res.data);
      setPostdetails(res.data);
    }).
    catch((err) => {
      console.log(err);
    });
  },[]);

  const createpost = () => {
    axios.post(`http://localhost:3001/post/create/${id}`,{
      post_headline: p_headline,
      post_description: p_description,
      event_count: event_count,
      deadline: deadline
    }).then((res) => {
      console.log(res.data);
      setPostdetails([...postdetails,res.data]);
    }).catch((err) => {
      console.log("Posts",err);
    }
    );
    // reload the page once
    // window.location.reload();
  }

  // create post popup
  const iteratePosts = postdetails.map((post,idx) => (
    <BidPopup
    key = {idx}
    name = {post.post_headline}
    num = {idx}
    description = {post.post_description}
    src = ""
    bids = {post.bids}/>
  ))

  const n_post = iteratePosts.length;
  // count of bids from all posts
  const n_bids = postdetails.reduce((acc,curr) => {
    return acc + curr.bids.length;
  },0);
  // count of completed projects
  const n_selected = postdetails.filter((post)=>{
    return post.selected !== "None";
  }).length;

  return (
    <div class="m-0 w-screen h-screen">
      <Navbar />
      {isloggedin() ? (
      <div class="whole m-0 w-full p-2 bg-white h-full ">
        <div class=" toppart flex flex-col lg:flex-row items-center lg:space-x-12 justify-center w-full bg-white m-12 ">
          <div className=" profile_bio flex flex-col shadow w-full lg:w-1/3 ">
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
              <p class="font-light text-gray-600 mt-3">KERALA, India</p>
              <div className="flex w-full justify-center space-x-10">
              <div className="flex flex-col items-start">
              <p class="mt-8 text-gray-500 font-semibold">Phone Number </p>
              <p class="text-gray-500">{user.phone}</p>
              </div>
              <div className="flex flex-col items-start">
              <p class="mt-8 text-gray-500 font-semibold">Email Address </p>
              <p class="text-gray-500">{user.email}</p>
              </div>
              </div>
            </div>
          </div>
          <div class=" bg-white shadow mt-10 grid grid-rows-3 w-2/3 h-96">
            <div class="py-5 px-24 ">
              <p></p>
              <Progress_bar
                progress={n_post*5}
                height="20px"
                text="Total no.of events posted"
                value={n_post}
              />
            </div>
            <div class="py-5 px-24 ">
              {/* <Progress_bar
                progress={n_bids*5}
                height="20px"
                text="No. of bids received"
                value={n_bids}
              /> */}
            </div>
            <div class="py-5 px-24 ">
              {/* <Progress_bar
                progress={n_selected*5}
                height="20px"
                text="No of events completed"
                value={n_selected}
              /> */}
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col justify-center px-36">
         
        </div>
        <div class="flex flex-col lg:flex-row space-x-4 p-12 w-full">
          <div class="flex items-center justify-left w-full  lg:w-2/3 h-full overflow-x-scroll overflow-y-scroll scrollbar-hide pl-6 mt-2">
            <div class="flex justify-center mt-3 h-48 w-screen">
              <div className="flex justify-center gap-x-6 ml-60">
                {iteratePosts}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-end">
            <div className="p-5 mt-5 mr-20 flex bg-white shadow rounded-xl transition flex-cols items-center delay-150  hover duration-300 h-40 w-96 ">
              <div className="ml-10  text-3xl font-semibold">Add new Event</div>
              <label htmlFor="my-modal-4">
                <div class=" font-bold text-gray-700 text-9xl m-auto duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  ">
                  <AiFillPlusCircle />
                </div>
              </label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label
                  className="modal-box relative max-w-3xl h-[500px]"
                  htmlFor=""
                >
                  <h3 className="text-3xl font-semibold">
                    Enter details of new event
                  </h3>
                  <div className="bg-white w-full rounded-xl ml-3 p-4">
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Post headline :"
                        valueState={[p_headline, setp_headline]}
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Items needed :"
                        valueState={[p_items, setp_items]}
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        valueState={[deadline,setdeadline]}
                        placeholder="Deadline (yyyy-mm-dd):"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        valueState={[p_description,setp_description]}
                        placeholder="Description :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        valueState={[event_count,setevent_count]}
                        placeholder="Aprox people attending :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button class=" mr-2 mt-4  w-[90px] py-3 text-center text-white font-semibold rounded-xl hover bg-slate-600 hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 "
                      onClick={createpost}>
                        Submit
                      </button>
                    </div>
                  </div>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>):(
      <div className="flex flex-col justify-center items-center h-full w-screen fixed pb-10">
        <p className="text-7xl font-bold bg-clip-text text-transparent p-5 bg-gradient-to-r from-red-400 to-blue-600 mb-12">You Have Logged Out! </p>
        <p className="text-3xl font-semibold hover:text-red-600" ><Link to="/login">Click here to log in again</Link></p>
      </div>
      )}
    </div>
  );
};
export default ProfileUserMain;
