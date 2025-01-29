"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import sideimg from "@/components/assets/exams.jpg";

export default function Services() {
  return (
    <div className="text-center">
      <p className="text-3xl text-lime-400 mb-4">
        FREE Next Generation NCLEX Live Online Review
      </p>
      <p className="text-white mb-4">
        Don’t pay extra for webinars or 3-day review sessions! Get NCLEX-ready
        with our FREE live and on-demand content presented by top nursing
        experts. New content drops multiple times each week, plus you can
        binge-watch all our recordings on YouTube whenever you need a refresher.
        Follow us @UWorldNursing for the latest updates and never miss a
        session!
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
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
          <p>
            Transform your NCLEX study plan with our engaging, bite-sized review
            videos, designed to ensure you're NCLEX-ready in no time. Our
            dynamic video series focuses on the most important and frequently
            tested content to help you pass the exam the first time.
          </p>
        </div>
        <div>
          <Image
            src={sideimg}
            alt="sideimg"
            width={2020}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12 w-full text-white gap-6 items-center max-w-4xl mx-auto">
        <div>
          <Image
            src={sideimg}
            alt="sideimg"
            width={2020}
            className="rounded-lg"
          />
        </div>
        <div className="text-left">
          <p className="text-2xl font-semibold mb-4">
            Adaptive <span className="text-lime-400">NCLEX</span> Practice Tests
          </p>
          <hr className="mb-4"></hr>
          <p>
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
