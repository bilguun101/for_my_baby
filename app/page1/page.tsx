"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Page1() {
  const [image, setImage] = useState("/drooling_eye_cat.jpg");
  const [text, setText] = useState("Oh, hello there!");
  const [buttonText, setButtonText] = useState(false);
  const router = useRouter();
  const handleNext = () => {
    router.push("/page2");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setImage("/happy_cat.jpg");
      setText("Hi, how are you?");
      setButtonText(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src={image} alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 bg-[#90D5FF] p-5 rounded-lg w-200 h-80">
          <p className="text-[80px] font-bold pr-5 pl-5">{text}</p>
          {buttonText && (
            <button
              className="bg-blue-400 text-[25px] font-bold text-white px-8 py-2 rounded-xl  cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleNext}
            >
              Hi
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
