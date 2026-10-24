"use client";

import { useRouter } from "next/navigation";
export default function Page5() {
  const router = useRouter();
  const handleFirstAnswer = () => {
    router.push("/page6_1");
  };
  const handleSecondAnswer = () => {
    router.push("/page6_2");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="absolute bottom-1 right-5">
        <span className="text-[#8B4513] text-[30px] font-bold">B</span>
        <span className="text-red-500 text-[30px] font-bold">R</span>
        <span className="text-purple-600 text-[30px] font-bold">P</span>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src="/cookie_eating_cat.jpg" alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-[#90D5FF] p-5 rounded-lg">
          <p className="text-[50px] font-bold pr-5 pl-5 text-center">
            What else do you wanna talk about?
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-blue-400 font-bold text-[30px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleFirstAnswer}
            >
              Is it true that cats have nine lives?
            </button>
            <button
              className="bg-blue-400 font-bold text-[30px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleSecondAnswer}
            >
              Pineapple toast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
