"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Page7_2() {
  const [showChest, setShowChest] = useState(false);
  const [code, setCode] = useState(["", "", ""]);
  const router = useRouter();
  useEffect(() => {
    if (code[0] === "5" && code[1] === "9" && code[2] === "3") {
      router.push("/page10");
    }
  }, [code, router]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/[^0-9]/g, "").slice(0, 1);

    setCode((prev) => {
      const updated = [...prev];
      updated[index] = digit;
      return updated;
    });
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center">
        <img
          src="/sunglass_cat.jpg"
          alt="no image bruh"
          width="500"
          height="500"
        />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-[#90D5FF] p-5 rounded-lg gap-10">
          <p className="text-[50px] font-bold pr-5 pl-5 text-center">
            Aight, here&apos;s the &quot;stuff&quot; you wanted. I hope you know
            what you&apos;re doing.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button
              className="w-40 h-40 cursor-pointer"
              onClick={() => setShowChest(true)}
            >
              <img
                src="chest-removebg-preview.png"
                alt="Chest"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>

      {showChest && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center"
          onClick={() => setShowChest(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <img
              src="lock-removebg-preview.png"
              alt="Lock"
              className="brightness-80"
            />
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              placeholder="0"
              onChange={(e) => handleChange(0, e.target.value)}
              value={code[0]}
              className="border border-black rounded-lg absolute bottom-20 left-24 w-12 h-23 bg-white text-center caret-transparent text-[30px]"
            ></input>
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              placeholder="0"
              onChange={(e) => handleChange(1, e.target.value)}
              value={code[1]}
              className="border border-black rounded-lg absolute bottom-20 left-40.5 w-12 h-23 bg-white text-center caret-transparent text-[30px]"
            ></input>
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              pattern="[0-9]"
              placeholder="0"
              onChange={(e) => handleChange(2, e.target.value)}
              value={code[2]}
              className="border border-black rounded-lg absolute bottom-20 left-57 w-12 h-23 bg-white text-center caret-transparent text-[30px]"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}
