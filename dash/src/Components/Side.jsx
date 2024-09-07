import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdPendingActions } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi2";
import { MdLiveTv } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { GiPodiumWinner } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { FiAlertOctagon } from "react-icons/fi";
import { MdOutlineLocalActivity } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Side = () => {
  return (
    <div className="bg-black/40 text-white/80 w-[300px] h-screen p-5">
      <div className="mx-auto">
        {/* title */}
        <p className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B94C98] to-[#F0073B]">
          Cryptodie
        </p>

        {/* Apps / Compo */}
        <div className="mt-8 grid gap-3">
          <p className="text-sm flex font-semibold items-center gap-2 rounded-md py-1 px-3 bg-[#111d29] text-[#1f5195] hover:bg-blue-950 hover:text-blue-600 duration-200 cursor-pointer">
            <FaRegChartBar />
            Trade
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <IoPersonCircleOutline /> My Profile
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <MdPendingActions /> pending Orders
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <BsGraphUp /> Open Trades
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <HiLockClosed /> Closed Trades
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <MdLiveTv /> Live TV
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <ImNewspaper /> News
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <GiPodiumWinner /> Winners and Losers
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <GrFavorite /> Favorites
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <FiAlertOctagon /> Alerts
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <MdOutlineLocalActivity /> Activities
          </p>
        </div>
        <hr className="my-4" />
        {/* Profile */}
        <div className=" grid gap-2">
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <IoSettingsOutline />
            Settings
          </p>
          <p className="text-sm items-center flex gap-2 py-1 px-3 cursor-pointer hover:text-white/60 duration-150">
            <MdLogout />
            Log out
          </p>
          {/* image */}
          <div className="flex gap-3 mt-5 items-center ml-2">
            <img
              src="https://i.pinimg.com/736x/b5/79/13/b579130a517c9770c6448dc24a5eab1e.jpg"
              alt="/"
              className="w-10"
            />
            <div className="grid gap-1">
              <p>Adie Tan</p>
              <p className="text-xs text-stone-500 cursor-pointer">AdieSample@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
