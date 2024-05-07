import React,{useContext} from 'react';
import { TbAlertTriangle, TbCertificate, TbChevronUpLeft, TbClick, TbCSharp, TbCurrencyRupee, TbFilePencil, TbSwordOff, TbThumbDown, TbThumbUp } from "react-icons/tb";
import Rating from '@mui/material/Rating';

const BiddersList = ({src,rating,cname,clocation,pitch,bamount}) =>{
    return(
        <div className="inline-flex items-center justify-center w-full">
        <div className="bg-white border-slate-600 border-2  shadow-1 p-5 rounded-br-[10px] rounded-tl-[50px] w-64 max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
          
          <div className="flex gap-x-2">
          {!src&&<div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-8 mb-3">
              <svg class="absolute w-24 h-24 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>}
          <div>
          <div className="mt-1 text-center font-semibold">{cname}</div>
          <div className="text-center">{clocation}</div>
          <div class="mt-1 flex items-center ">
          <Rating
          name="read-only"
          value={rating}
          size="small"
          readOnly>
          </Rating>
          
          </div>   
          </div>
          </div>
            <div className="text-xs ml-1 mb-4">{`"${pitch}"`}</div>
            <div className="ml-1 flex gap-x-7 text-sm">
              <div className="text-base font-semibold mb-4 mt-3 flex text-green-600 items-center"><TbCurrencyRupee/>{bamount}<div></div></div>
              <button type="button" className="text-white h-12 bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-lg text-xs px-6 py-2 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                  Select bid
                  <svg aria-hidden="true" class="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>

      </div>
        </div>
    )
};

export default BiddersList;