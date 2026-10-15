"use client";

import { useRouter } from "next/navigation";
export default function Page7_2() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/page8_2");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full bg-blue-300 flex justify-center items-center">
        <img src="/sus_cat.jpg" alt="no image bruh" width="500" height="500" />
      </div>
      <div className="w-[50%] h-full bg-green-400 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-yellow-300 p-5 rounded-lg">
          <p className="text-[50px] font-bold bg-[#FFFF00] pr-5 pl-5 text-center">
            So you know the secret word, huh?
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-red-500 font-bold text-[30px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-red-600 transition duration-300"
              onClick={handleNext}
            >
              Of course I do, you think I&apos;m stupid or something?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
