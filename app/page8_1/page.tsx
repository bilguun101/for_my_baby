"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Page7_1() {
  const router = useRouter();
  const handleRetry = () => {
    router.push("/page1");
  };
  const [flashing, setFlashing] = useState(false);
  const [showBlackScreen, setShowBlackScreen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlashing(true);
    }, 1000);
    const stopTimer = setTimeout(() => {
      setFlashing(false);
      setShowBlackScreen(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex">
      {showBlackScreen && (
        <div className="fixed inset-0 z-50 bg-black justify-center items-center flex flex-col gap-5">
          <p className="text-white text-[100px] font-bold"> Game Over </p>
          <button
            className="bg-white px-4 py-2 w-50 h-15 text-[25px] font-bold rounded-md cursor-pointer hover:bg-gray-300 transition duration-300"
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      )}
      <div className="w-[50%] h-full flex justify-center items-center">
        <img
          src="/big_happy_cat.jpg"
          alt="no image bruh"
          width="500"
          height="500"
        />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-[#90D5FF] p-5 rounded-lg">
          <p className="text-[25px] font-bold pr-5 pl-5 text-center">
            Bye bye!!!
          </p>
        </div>
      </div>
      {flashing && (
        <div className="fixed inset-0 z-50 animate-flash pointer-events-none" />
      )}
    </div>
  );
}
