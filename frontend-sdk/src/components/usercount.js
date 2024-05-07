import React from "react";

const Usercount = ({ncaterer,nuser,nbid,nevent})=>{
    return(
        <div className="flex justify-evenly w-full h-full">
            <div className="flex flex-col justify-evenly h-full">
                <div className="catcount flex flex-col items-center space-y-3">
                    <p className="text-5xl font-bold text-slate-500 ">{ncaterer}</p>
                    <p className="text-2xl font-semibold ">No. of Caterers</p>
                </div>
                <div className="catcount flex flex-col items-center space-y-3">
                    <p className="text-5xl font-bold text-blue-300 ">{nuser}</p>
                    <p className="text-2xl font-semibold">No. of Users</p>
                </div>
            </div>
            <div className="flex flex-col justify-evenly h-full">
                <div className="catcount flex flex-col items-center space-y-3">
                    <p className="text-5xl font-bold text-slate-500 ">{nevent}</p>
                    <p className="text-2xl font-semibold">No. of Events</p>
                </div>
                {/* <div className="catcount flex flex-col items-center space-y-3">
                    <p className="text-5xl font-bold text-blue-300 ">{nbid}</p>
                    <p className="text-2xl font-semibold">No. of Bids</p>
                </div> */}
            </div>
        </div>
    )
}

export default Usercount;