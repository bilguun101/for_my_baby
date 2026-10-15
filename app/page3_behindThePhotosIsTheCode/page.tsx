"use client";

import { useRouter } from "next/navigation";
export default function Page3_behindThePhotosIsTheCode() {
  const router = useRouter();
  const handleFirstAnswer = () => {
    router.push("/page4_1");
  };
  const handleSecondAnswer = () => {
    router.push("/page4_2");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src="/thinking_cat.jpg" alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-[#90D5FF] p-5 rounded-lg">
          <p className="text-[50px] font-bold pr-5 pl-5 text-center">
            What do you wanna talk about?
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-blue-400 font-bold text-[15px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleFirstAnswer}
            >
              About how cats are the most superior species on this planet and
              how they will eventually take over the world
            </button>
            <button
              className="bg-blue-400 font-bold text-[25px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleSecondAnswer}
            >
              About the anguishing, never ending torment of the human soul
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
