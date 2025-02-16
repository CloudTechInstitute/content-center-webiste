"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import sideimg from "../../public/exams.jpg";
import nurse from "../../public/5.jpg";
import adult from "../../public/6.png";
import carousel1 from "../../public/1.jpg";
import carousel2 from "../../public/2.jpg";
import carousel3 from "../../public/3.jpg";
import carousel4 from "../../public/4.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleApplyNavigation = (e) => {
    e.preventDefault();
    router.push("/services?tab=another");

    setTimeout(() => {
      const applySection = document.getElementById("apply");
      if (applySection) {
        applySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <div className="text-center px-4 md:px-10">
      {/* Header Text */}
      <p className="text-2xl md:text-3xl text-lime-400 mb-4">
        Comprehensive learning programs <br className="hidden md:block" />
        for all students
      </p>
      <p className="text-white mb-4 text-sm md:text-lg">
        Become lifelong learners with the best teachers, engaging video lessons,
        and personalized learning journeys.
      </p>

      {/* Carousel Section */}
      <Carousel className="w-full" plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent className="-ml-1">
          {images.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
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
      </Carousel>

      {/* Course Info Section */}
      <div className="flex flex-col md:flex-row justify-center mt-12 w-full text-white gap-6 items-center max-w-4xl mx-auto">
        <div className="text-left w-full">
          <p className="text-xl md:text-2xl font-semibold mb-4 text-lime-400">
            Who is this course for?
          </p>
          <hr className="mb-4"></hr>
          <p className="font-light mb-3 text-sm md:text-base">
            This course is for registered nurses located in Africa who are
            preparing for their NCLEX-RN exams.
          </p>
          {/* <Link
            href="http://pearsonvue.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Other Links</Button>
          </Link> */}
        </div>
        <div className="relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
          <Image
            src={sideimg}
            alt="sideimg"
            className="rounded-lg object-cover"
            fill
          />
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="flex flex-col md:flex-row justify-center mt-12 w-full text-white gap-6 items-center max-w-4xl mx-auto">
        <div className="relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
          <Image
            src={nurse}
            alt="nurse"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="text-left">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            How to apply for NCLEX as a registered nurse in Africa
          </p>
          <hr className="mb-4"></hr>
          <p className="font-light mb-3 text-sm md:text-base">
            NCLEX (National Council Licensure Examination) is a licensure
            examination administered by the National Council of State Boards of
            Nursing (NCSBN) for licensing nurses in the US, Canada, and recently
            in Australia.
          </p>
          <Link href="/services" onClick={(e) => handleApplyNavigation(e)}>
            <Button>Other Links</Button>
          </Link>
        </div>
      </div>

      {/* Our Courses Section */}
      <div
        className="flex items-center justify-center mt-24 max-w-3xl mx-auto"
        id="courses"
      >
        <div className="text-center text-lime-400 text-2xl md:text-3xl uppercase w-full mb-3">
          Our Courses
        </div>
      </div>
      <div className="text-white mb-10 text-sm md:text-lg">
        Written by nurse educators and practicing nurses, our NCLEX-RN practice
        questions include over 10,000 questions designed to challenge you and
        build your clinical judgment skills.
      </div>

      {/* Course Cards */}
      <div className="md:flex justify-center gap-10 ">
        <div className="mb-5 lg:mb-0 rounded-lg overflow-hidden shadow-lg border border-lime-400 p-2">
          <Image className="w-full" src={adult} alt="smiling nurses" />
          <div className="px-6 py-4">
            <div className="font-semibold text-lg md:text-xl mb-2 text-lime-400">
              NCLEX Exams Preparation
            </div>
            <p className="text-white text-sm md:text-base font-light">
              Our personalized study tools help you zero in on what matters and
              build a study strategy that works for you.
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border border-lime-400 p-2">
          <Image className="w-full" src={nurse} alt="smiling nurses" />
          <div className="px-6 py-4">
            <div className="font-semibold text-lg md:text-xl mb-2 text-lime-400">
              Mental Health Problems of Adults Clients
            </div>
            <p className="text-white text-sm md:text-base font-light">
              Gain insights into common mental health issues affecting adult
              clients and learn best practices for treatment.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex items-center justify-center mt-24 max-w-3xl mx-auto">
        <div className="h-0.5 w-[30%] bg-lime-400 rounded-full "></div>
        <div className="text-center text-white text-lg md:text-2xl uppercase w-full">
          Frequently Asked Questions
        </div>
        <div className="h-0.5 w-[30%] bg-lime-400 rounded-full "></div>
      </div>
    </div>
  );
}
