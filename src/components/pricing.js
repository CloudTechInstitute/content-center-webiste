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

import { CheckIcon } from "lucide-react";
import React from "react";

export default function PricingSection() {
  return (
    <>
      {/* Pricing */}
      <div className="container py-12 lg:py-12" id="pricing">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 text-lime-400 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          <Card className="bg-slate-800">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7 text-white">Free</CardTitle>
              <span className="font-bold text-5xl text-lime-400">Free</span>
            </CardHeader>
            <CardDescription className="text-center text-white">
              Forever free
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 text-white mt-0.5 h-4 w-4" />
                  <span className="text-white">1 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 text-white mt-0.5 h-4 w-4" />
                  <span className="text-white">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 text-white mt-0.5 h-4 w-4" />
                  <span className="text-white">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-lime-400 bg-slate-700">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3 bg-lime-400 text-black hover:text-lime-400">
                Most popular
              </Badge>
              <CardTitle className="!mb-7 text-white">Startup</CardTitle>
              <span className="font-bold text-5xl text-lime-400">£39</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto text-white">
              All the basics for starting a new business
            </CardDescription>
            <CardContent className="text-white">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">2 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign up</Button>
            </CardFooter>
          </Card>

          <Card className="bg-slate-800">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7 text-white">Team</CardTitle>
              <span className="font-bold text-5xl text-lime-400">£89</span>
            </CardHeader>
            <CardDescription className="text-center text-white w-11/12 mx-auto">
              Everything you need for a growing business
            </CardDescription>
            <CardContent className="text-white">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">5 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="bg-slate-800">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7 text-white">Enterprise</CardTitle>
              <span className="font-bold text-5xl text-lime-400">149</span>
            </CardHeader>
            <CardDescription className="text-center text-white w-11/12 mx-auto">
              Advanced features for scaling your business
            </CardDescription>
            <CardContent className="text-white">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">10 user</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">Plan features</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="">Product support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Sign up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
