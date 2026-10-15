"use client";

import { useRouter } from "next/navigation";
export default function Page6_1() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/page7_1");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full bg-blue-300 flex justify-center items-center">
        <img src="/smart_cat.jpg" alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full bg-green-400 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-yellow-300 p-5 rounded-lg">
          <p className="text-[25px] font-bold bg-[#FFFF00] pr-5 pl-5 text-center">
            Actually, cats do not have nine lives. This is a myth that has been
            perpetuated for centuries. Cats are just like any other living
            creature, and they are subject to the same risks and dangers as any
            other animal. While cats are known for their agility and ability to
            land on their feet, they are not invincible. They can still be
            injured or killed by accidents, predators, or disease. So while cats
            may seem to have a certain resilience, they do not have nine lives.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-red-500 font-bold text-[30px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-red-600 transition duration-300"
              onClick={handleNext}
            >
              Whatever you say, buddy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
