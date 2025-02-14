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
import nurse from "@/components/assets/nurse.jpg";
import carousel1 from "@/components/assets/1.jpg";
import carousel2 from "@/components/assets/2.jpg";
import carousel3 from "@/components/assets/3.jpg";
import carousel4 from "@/components/assets/4.jpg";

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
        <div className="text-left">
          <p className="text-2xl font-semibold mb-4">
            High-Yield <span className="text-lime-400">NCLEX</span> Videos
          </p>
          <hr className="mb-4"></hr>
          <p className="font-light">
            Transform your NCLEX study plan with our engaging, bite-sized review
            videos, designed to ensure you're NCLEX-ready in no time. Our
            dynamic video series focuses on the most important and frequently
            tested content to help you pass the exam the first time.
          </p>
        </div>
        <div className="relative w-[1200px] h-56 overflow-hidden">
          <Image
            src={sideimg}
            alt="sideimg"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12 w-full text-white gap-6 items-center max-w-4xl mx-auto">
        <div className="relative w-[2000px] h-56 overflow-hidden">
          <Image src={nurse} alt="nurse" className="rounded-lg object-cover" />
        </div>
        <div className="text-left">
          <p className="text-2xl font-semibold mb-4">
            Adaptive <span className="text-lime-400">NCLEX</span> Practice Tests
          </p>
          <hr className="mb-4"></hr>
          <p className="font-light">
            Develop your test-taking skills with our Adaptive (CAT) NCLEX
            practice tests. Our adaptive practice tests determine your level of
            preparedness so you’ll know if your performance is “on track” or
            “needs improvement.”
          </p>
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
