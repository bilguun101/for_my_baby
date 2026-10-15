"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function SecretPage() {
  const router = useRouter();
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/page3_behindThePhotosIsTheCode");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen w-screen flex">
      <div className="w-[50%] h-full bg-black flex justify-center items-center">
        <img
          src="/scary_cat.jpg"
          alt="no image bruh"
          width="600"
          height="600"
        />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center bg-black">
        <div className="flex flex-col justify-center items-center gap-5 bg-yellow-300 p-5 rounded-lg">
          {showText && (
            <p className="text-[50px] font-bold bg-black pr-5 pl-5 text-center text-red-500">
              The clue is in the search bar
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
