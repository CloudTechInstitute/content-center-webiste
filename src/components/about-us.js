"use client";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { BiSolidAnalyse } from "react-icons/bi";
import { MdVideoLibrary } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";

export default function About() {
  return (
    <div className="relative flex flex-col justify-center max-w-6xl overflow-hidden w-full mb-16 px-2 lg:px-0">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="mx-auto flex w-full items-center justify-center">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#A7E629_20deg,transparent_120deg)]"></div>
          <div className="relative z-20 flex gap-4 w-full items-center rounded-[0.60rem] bg-slate-900 p-2">
            <div className="flex-col text-white p-4">
              <div className="lg:flex mb-4 md:mb-10 gap-6">
                <div className="w-full flex items-center justify-center gap-6">
                  <div className="">
                    <BsFillQuestionOctagonFill className="" size={48} />
                  </div>
                  <div>
                    <p className="text-semibold  text-xl md:text-2xl text-lime-400">
                      Top Quality Questions
                    </p>
                    <p className="relative z-50 block text-base md:text-md rounded-lg mb-4 md:mb-0  transition duration-200 font-light">
                      All questions and solutions, designed by top exam experts,
                      based on latest patterns and actual exam level
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-6">
                  <div className="">
                    <PiExamFill className="" size={48} />
                  </div>
                  <div>
                    <p className="text-semibold text-xl md:text-2xl text-lime-400">
                      Over 10,000 prep questions
                    </p>
                    <p className="relative z-50 block rounded-lg text-base md:text-md  transition duration-200 font-light">
                      Get to feel the thrill of a real-exam. Groom your pressure
                      handling and time management skills wit our numerous
                      carefully curated questions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex gap-6">
                <div className="w-full flex items-center justify-center gap-6">
                  <div className="">
                    <BiSolidAnalyse className="" size={48} />
                  </div>
                  <div>
                    <p className="text-semibold text-xl md:text-2xl text-lime-400">
                      Detailed Analysis
                    </p>
                    <p className="relative z-50 block rounded-lg text-base md:text-md mb-4 md:mb-0 transition duration-200 font-light">
                      Know your weaknesses, strengths and everything else that
                      you need to know to improve your score and rank.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-6">
                  <div className="">
                    <MdVideoLibrary className="" size={48} />
                  </div>
                  <div>
                    <p className="text-semibold text-xl md:text-2xl text-lime-400">
                      Learning Videos
                    </p>
                    <p className="relative z-50 block text-base md:text-md rounded-lg mb-4 md:mb-0 transition duration-200 font-light">
                      Become lifelong learners with best teachers, engaging
                      video lessons and personalised learning journeys
                    </p>
                  </div>
                </div>
              </div>

              {/* <Button className="rounded-full">Read more</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
