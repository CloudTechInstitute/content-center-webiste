"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import sideimg from "@/components/assets/exams.jpg";
import nurse from "@/components/assets/5.jpg";
import adult from "@/components/assets/6.png";
import carousel1 from "@/components/assets/1.jpg";
import carousel2 from "@/components/assets/2.jpg";
import carousel3 from "@/components/assets/3.jpg";
import carousel4 from "@/components/assets/4.jpg";
import { Button } from "./ui/button";
import Link from "next/link";

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  // "assets/image3.jpg",
  // "assets/image4.jpg",
  // "assets/image5.jpg",
];

export default function Services() {
  return (
    <div className="text-center">
      <p className="text-3xl text-lime-400 mb-4">
        Comprehensive learning programs <br />
        for all students
      </p>
      <p className="text-white mb-4">
        Become lifelong learners with the best teachers, engaging video lessons
        and personalised learning journeys
      </p>

      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className=" pl-1 md:basis-1/2 lg:basis-1/2"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
      <div className="flex justify-center mt-12 w-full text-white gap-6 items-center max-w-4xl mx-auto">
        <div className="text-left w-full">
          <p className="text-2xl font-semibold mb-4 text-lime-400">
            Who is this course for?
          </p>
          <hr className="mb-4"></hr>
          <p className="font-light mb-3">
            This course is for registered nurses located in Africa who are
            preparing for their NCLEX-RN exams
          </p>
          <Link
            href="http://pearsonvue.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Read more...</Button>
          </Link>
        </div>
        <div className="relative w-[800px] h-56 overflow-hidden">
          <Image
            src={sideimg}
            alt="sideimg"
            className="rounded-lg object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12 w-full text-white gap-6 items-center max-w-4xl mx-auto">
        <div className="relative w-[1200px] h-56 overflow-hidden">
          <Image
            src={nurse}
            alt="nurse"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="text-left">
          <p className="text-2xl font-semibold mb-4">
            How to apply for NCLEX as a registered nurse in Africa
          </p>
          <hr className="mb-4"></hr>
          <p className="font-light mb-3">
            NCLEX (National Council Licensure Examination) is a licensure
            examination administered by the National Council of State Boards of
            Nursing (NCSBN) for licensing nurses in the US, Canada and recently
            in Australia.
          </p>
          <Link
            href="https://medexamcenter.com/blogs/neac/how-to-apply-for-nclex-exam-if-you-are-a-registered-nurse-located-in-africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Read more...</Button>
          </Link>
        </div>
      </div>
      <div
        className="flex items-center justify-center mt-24 max-w-3xl mx-auto"
        id="courses"
      >
        <div className="text-center text-lime-400 text-3xl uppercase w-full mb-3">
          our courses
        </div>
      </div>
      <div className="text-white mb-10">
        Written by nurse educators and practicing nurses, our NCLEX-RN practice
        questions, which include over 2,700 questions, are designed to challenge
        you and build your clinical judgment skills. Every question includes a
        detailed rationale for the correct and incorrect answers so you will
        understand the “why” behind the question.
      </div>
      <div className="flex justify-center gap-10">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-lime-400 p-2">
          <Image className="w-full" src={adult} alt="smiling nurses" />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-lime-400">
              NCLEX Exams Preparation
            </div>
            <p className="text-white text-base font-light">
              Our personalized study tools help you zero in on what matters and
              build a study strategy that works for you. Track your progress and
              stay motivated with performance metrics, so you can approach the
              NCLEX-RN with confidence and focus.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-lime-400 p-2">
          <Image className="w-full" src={nurse} alt="smiling nurses" />
          <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-lime-400">
              Mental Health Problems of Adults Clients
            </div>
            <p className="text-white text-base font-light">
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. */}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-24 max-w-3xl mx-auto">
        <div className="h-0.5 w-[30%] bg-lime-400 rounded-full "></div>
        <div className="text-center text-white text-2xl uppercase w-full">
          frequently asked questions
        </div>
        <div className="h-0.5 w-[30%] bg-lime-400 rounded-full "></div>
      </div>
    </div>
  );
}
