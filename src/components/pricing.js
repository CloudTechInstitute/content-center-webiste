"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pricingData } from "@/components/pricing-data.js";
import { CheckIcon } from "lucide-react";
import React from "react";

export default function PricingSection() {
  return (
    <>
      <div className="container py-12 lg:py-12" id="pricing">
        <div className="max-w-2xl px-4 mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 text-lime-400 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>

        <div className="px-16 ">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {pricingData.map((plan, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="p-1 ">
                    <Card
                      className={`bg-slate-800 ${
                        plan.isPopular ? "border-lime-400" : ""
                      }`}
                    >
                      <CardHeader className="text-center pb-2">
                        {plan.isPopular && (
                          <Badge className="uppercase w-max self-center mb-3 bg-lime-400 text-black hover:text-lime-400">
                            Most popular
                          </Badge>
                        )}
                        <CardTitle className="mb-2 text-white text-lg font-light">
                          NCLEX-RN Review
                        </CardTitle>
                        <span className="font-bold text-5xl text-lime-400">
                          ${plan.price}
                        </span>
                      </CardHeader>
                      <CardDescription className="text-center text-white">
                        {plan.duration} Access
                      </CardDescription>
                      <CardContent>
                        <ul className="mt-7 space-y-2.5 text-sm">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex space-x-2">
                              <CheckIcon className="flex-shrink-0 text-white mt-0.5 h-4 w-4" />
                              <span className="text-white">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          variant={plan.isPopular ? "default" : "outline"}
                        >
                          Sign up
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
