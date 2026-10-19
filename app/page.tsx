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
        <div className="w-full h-full flex flex">
          <div className="flex-1 bg-red-400">
            <img src="" alt="no image" />
          </div>
          <div className="flex-1 bg-blue-400">
            <div className="flex-col">
              <img src="" alt="no image" />
              <button
                className="w-50 h-20 bg-yellow-300"
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
          <div className="flex-1 bg-green-400">
            <img src="" alt="no image" />
          </div>
        </div>
      )}

      {play && (
        <div className="w-full h-full">
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
