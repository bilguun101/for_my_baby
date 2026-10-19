"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [play, setPlay] = useState(false);
  const router = useRouter();
  const handleNext = () => {
    router.push("/page1");
  };
  return (
    <div className="h-screen w-screen flex">
      {intro && (
        <div className="w-full h-full flex">
          <img
            src="idk.gif"
            alt="no bg"
            className="absolute -z-1 w-full h-full opacity-80"
          />
          <div className="flex-1 relative">
            <img
              src="doge-removebg-preview.png"
              className="opacity-80 absolute bottom-50 left-20"
            />
            <img
              src="dorito.png"
              className="opacity-85 w-30 top-40 left-25 absolute blink-image blink-1"
            />
            <img
              src="dorito.png"
              className="opacity-85 w-30 bottom-30 left-40 absolute blink-image blink-2"
            />
            <img
              src="dorito.png"
              className="opacity-85 w-30 top-10 right-0 absolute blink-image blink-3"
            />
            <img
              src="dew-removebg-preview.png"
              className="opacity-85 w-30 bottom-80 right-20 absolute blink-image blink-4"
            />
          </div>
          <div className="flex-1 flex justify-center items-center relative">
            <img
              src="dew-removebg-preview.png"
              className="opacity-85 w-30 top-30 left-10 absolute blink-image blink-2"
            />
            <div className="flex-col flex gap-20 justify-center items-center">
              <p className="text-center text-[80px] leading-tight font-bold">
                {" "}
                Welcome to my game{" "}
              </p>
              <button
                className="w-50 h-20 bg-yellow-300 text-[30px] font-bold rounded-xl border-4 hover:bg-yellow-400 duration-200"
                onClick={() => {
                  setIntro(false);
                  setPlay(true);
                }}
              >
                {" "}
                Play{" "}
              </button>
            </div>
          </div>
          <div className="flex-1 flex relative">
            <img
              src="dew-removebg-preview.png"
              className="opacity-85 w-30 top-40 left-10 absolute blink-image blink-3"
            />
            <img
              src="dorito.png"
              className="opacity-85 w-30 bottom-80 right-30 absolute blink-image blink-1 z-1"
            />
            <img src="lizard.gif" className="absolute bottom-0 right-0" />
          </div>
        </div>
      )}

      {play && (
        <div className="w-full h-full flex">
          <div className="w-[50%] h-full flex justify-center items-center">
            <img src="/drooling_cat.jpg" alt="no image bruh" />
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-10 bg-[#90D5FF] p-5 rounded-lg w-200 h-80">
              <p className="text-[50px] font-bold pr-5 pl-5 text-center">
                Cat exists without a single thought in his mind.
              </p>
              <button
                className="bg-blue-400 font-bold text-[25px] text-white px-8 py-2 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
                onClick={handleNext}
              >
                nudge cat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
