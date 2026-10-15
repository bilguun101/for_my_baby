"use client";

import { useRouter } from "next/navigation";
export default function Page7_2() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/page9");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img
          src="/sigma_cat.jpg"
          alt="no image bruh"
          width="500"
          height="500"
        />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-[#90D5FF] p-5 rounded-lg">
          <p className="text-[50px] font-bold pr-5 pl-5 text-center">
            Didn&apos;t know you were chill like that.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-blue-400 font-bold text-[30px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleNext}
            >
              You know it, son
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
