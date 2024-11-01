"use client";

import Button from "@/components/global/button";
import Input from "@/components/global/input";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <section className="flex flex-col lg:flex-row-reverse w-full h-screen bg-green-500">
      <div className="flex flex-col gap-10 justify-center items-center h-full lg:w-full lg:max-w-[45%] max-h-[45%] lg:max-h-full bg-green-300 rounded-b-[36px] lg:rounded-l-[36px] lg:rounded-r-none">
        <img src="/images/signin-hero.png" alt="notebook" className="lg:w-[300px]" />
        <img src="/images/a-board-logo.svg" alt="a board" />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center h-full lg:w-full px-4">
        <h2 className="font-semibold capitalize w-full text-left text-white text-[28px] max-w-xs">
          sign in
        </h2>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <Input placeholder="Username" />
          <Button className="bg-success text-white text-md" label="Sign In" />
        </div>
      </div>
    </section>
  );
}
