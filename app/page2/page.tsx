"use client";
import { useRouter } from "next/navigation";
export default function Page2() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/page3");
  };
  const handleNext1 = () => {
    router.push("/pageFalseKey");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full bg-blue-300 flex justify-center items-center">
        <img src="/dum_cat.jpg" alt="no image bruh" width="800" height="800" />
      </div>
      <div className="w-[50%] h-full bg-green-400 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-yellow-300 p-5 rounded-lg">
          <p className="text-[50px] font-bold bg-[#FFFF00] pr-5 pl-5 text-center">
            What can I do for you?
          </p>
          <div className="flex flex-col gap-5">
            <button
              className="bg-red-500 font-bold text-[25px] text-white px-8 py-2 rounded-xl cursor-pointer hover:bg-red-600 transition duration-300"
              onClick={handleNext}
            >
              Have a conversation
            </button>
            <button
              className="bg-red-500 font-bold text-[25px] text-white px-8 py-2 rounded-xl cursor-pointer hover:bg-red-600 transition duration-300"
              onClick={handleNext1}
            >
              Get straight to the point
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
