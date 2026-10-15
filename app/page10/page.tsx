"use client";
import { useState, useEffect } from "react";
export default function Page10() {
  const [showChest, setShowChest] = useState(false);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChest(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen w-screen flex relative">
      <div className="bg-black w-full h-full flex justify-center items-center">
        {showChest && (
          <button
            className="w-100 h-100 flex justify-center items-center cursor-pointer"
            onClick={() => setShowNote(true)}
          >
            <img
              src="/opened_chest-removebg-preview.png"
              alt="no image bruh"
              className="w-full h-full"
            />
          </button>
        )}
      </div>
      {showNote && (
        <div>
          <img
            src="paper-removebg-preview.png"
            alt="paper"
            width="500"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[40px] text-center w-80">
            TELL YOUR BOYFRIEND THE SECRET WORD:
            <br />
            <br />
            <span className="text-red-500">
              BANANA BREAD IS THE GREATEST GEM.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
