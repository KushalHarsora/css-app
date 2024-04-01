'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <div className=" flex flex-col justify-center items-center align-middle h-screen w-full gap-2 bg-slate-100">
      <div className=" flex flex-col gap-6 p-6 justify-center items-center align-middle border border-black rounded-md bg-white">
        <p className=" text-4xl">
          Login Page
        </p>
        <div className=" flex justify-center items-center align-middle ">
          <input
            className=" w-4/5 h-10 border border-black rounded-md p-2"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className=" flex justify-center items-center align-middle ">
          <input
            className=" w-4/5 h-10 border border-black rounded-md p-2"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button
            className=" border border-black rounded-md p-3 cursor-pointer hover:text-white hover:bg-black"
            onClick={() => router.push('/home')}
            >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
