"use client";

import { useRouter } from "next/navigation";
export default function PageFalseKey() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/page2");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src="/straight_cat.jpg" alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 bg-[#90D5FF] p-5 rounded-lg w-200 h-80">
          <p className="text-[50px] font-bold pr-5 pl-5 text-center">
            What do you mean?
          </p>
          <button
            className="bg-blue-400 font-bold text-[25px] text-white px-8 py-2 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
            onClick={handleBack}
          >
            Sorry...
          </button>
        </div>
      </div>
    </div>
  );
}
