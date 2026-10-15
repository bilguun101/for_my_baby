"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Page6_1() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/page7_2");
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full bg-blue-300 flex justify-center items-center">
        <img
          src="/shocked_cat.jpg"
          alt="no image bruh"
          width="500"
          height="500"
        />
      </div>
      <div className="w-[50%] h-full bg-green-400 flex justify-center items-center"></div>
    </div>
  );
}
