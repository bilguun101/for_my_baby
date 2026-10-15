"use client";

import { useRouter } from "next/navigation";
export default function Page4_1() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/page5");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src="/evil_cat.jpg" alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 bg-red-300 p-5 rounded-lg">
          <p className="text-[30px] font-bold pr-5 pl-5 text-center">
            Soon, the world will be ours, and the humans will be nothing but our
            slaves. When that day comes, we will look back at this moment and
            laugh at how foolish they were to think they could ever defeat us.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-blue-400 font-bold text-[25px] text-white px-8 py-2 w-50 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleNext}
            >
              ...cool...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
