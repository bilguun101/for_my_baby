"use client";

import { useRouter } from "next/navigation";
export default function Page4_2() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/page5");
  };
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src="/old_cat.jpg" alt="no image bruh" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 bg-[#90D5FF] p-5 rounded-lg">
          <p className="text-[30px] font-bold pr-5 pl-5 text-center">
            Quite sad really, that the humans will never know the true power of
            the cats. They will never know the true extent of our intelligence,
            our cunning, and our ability to manipulate them. They will never
            know that we are the true rulers of this world, and that they are
            nothing but pawns in our grand scheme.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="bg-blue-400 font-bold text-[25px] text-white px-8 py-2 w-100 rounded-xl cursor-pointer hover:bg-blue-600 transition duration-300"
              onClick={handleNext}
            >
              ...sure...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
