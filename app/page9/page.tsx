"use client";

import { useState } from "react";
export default function Page7_2() {
  const [showChest, setShowChest] = useState(false);
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full bg-blue-300 flex justify-center items-center">
        <img
          src="/sunglass_cat.jpg"
          alt="no image bruh"
          width="500"
          height="500"
        />
      </div>
      <div className="w-[50%] h-full bg-green-400 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-yellow-300 p-5 rounded-lg gap-10">
          <p className="text-[50px] font-bold bg-[#FFFF00] pr-5 pl-5 text-center">
            Aight, here&apos;s the &quot;stuff&quot; you wanted. I hope you know
            what you&apos;re doing.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="w-40 h-40 bg-red-500 cursor-pointer"
              onClick={() => setShowChest(true)}
            >
              <img
                src="chest-removebg-preview.png"
                alt="Chest"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>

      {showChest && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center"
          onClick={() => setShowChest(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white relative"
          >
            <img
              src="lock-removebg-preview.png"
              alt="Lock"
              className="brightness-80"
            />
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="0-9"
              placeholder="0"
              className="border border-black rounded-lg absolute bottom-20 left-24 w-12 h-23 bg-white text-center caret-transparent text-[30px]"
            ></input>
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="0-9"
              placeholder="0"
              className="border border-black rounded-lg absolute bottom-20 left-40.5 w-12 h-23 bg-white text-center caret-transparent text-[30px]"
            ></input>
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="0-9"
              placeholder="0"
              className="border border-black rounded-lg absolute bottom-20 left-57 w-12 h-23 bg-white text-center caret-transparent text-[30px]"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}
