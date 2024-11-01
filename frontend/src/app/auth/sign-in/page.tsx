/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Button from "@/components/global/button";
import Input from "@/components/global/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

type Props = object;

export default function SignIn({}: Props) {
  const router = useRouter();
  const [username, setUsername] = useState("jassica");

  const handleSignIn: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { error, ok }: any = await signIn("local", {
      username: username,
      redirect: false,
    });

    if (!error) {
      if (ok) router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: error,
        confirmButtonText: "ตกลง",
      });
    }
  };

  return (
    <section className="flex flex-col lg:flex-row-reverse w-full h-screen bg-green-500">
      <div className="flex flex-col gap-10 justify-center items-center h-full lg:w-full lg:max-w-[45%] max-h-[45%] lg:max-h-full bg-green-300 rounded-b-[36px] lg:rounded-l-[36px] lg:rounded-r-none">
        <img
          src="/images/signin-hero.png"
          alt="notebook"
          className="lg:w-[300px]"
        />
        <img src="/images/a-board-logo.svg" alt="a board" />
      </div>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 justify-center items-center h-full lg:w-full px-4"
      >
        <h2 className="font-semibold capitalize w-full text-left text-white text-[28px] max-w-xs">
          sign in
        </h2>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            className="bg-success text-white text-md"
            label="Sign In"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
}
