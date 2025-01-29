"use client";
import aboutImg from "@/components/assets/exams.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className="relative flex flex-col justify-center max-w-4xl overflow-hidden w-full mb-16">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="mx-auto flex w-full items-center justify-center">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#A7E629_20deg,transparent_120deg)]"></div>
          <div className="relative z-20 flex gap-4 w-full items-center rounded-[0.60rem] bg-slate-900 p-2">
            <div className="">
              <Image
                src={aboutImg}
                alt="side"
                width={1050}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="relative z-50 block rounded-lg mb-3 text-sm text-white transition duration-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button className="rounded-full">Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
