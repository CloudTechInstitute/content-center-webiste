"use client";
import { Suspense, useEffect, useState } from "react";
import { SubHero } from "@/components/subhero";
import image from "../../../public/header.webp";
import nurse from "../../../public/sponsorship2.webp";
import nurse1 from "../../../public/b-nurse.jpg";
import accomodation1 from "../../../public/accomodation1.webp";
import sponsor1 from "../../../public/sponsor1.jpg";
import accomodation2 from "../../../public/accomodation2.jpg";
import accomodation3 from "../../../public/accomodation3.jpg";
import sponsor3 from "../../../public/sponsorship 3.jpeg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterSection from "@/components/footer";
import Link from "next/link";

export default function Service() {
  const [activeTab, setActiveTab] = useState("account");
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    // Get tab from URL on initial load
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get("tab");
      if (tabParam) {
        setActiveTab(tabParam);
      }
    }
  }, []);

  useEffect(() => {
    if (activeTab === "another") {
      setTimeout(() => {
        const target = document.getElementById("apply");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          setScrollTriggered(false);
        }
      }, 50);
    }
  }, [activeTab]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}?tab=${value}`;
      window.history.pushState({ tab: value }, "", newUrl);
    }
  };

  return (
    <div className="">
      <SubHero herotext={"Other Services"} imageSrc={image} />
      <div className="flex flex-col justify-center w-full max-w-6xl mx-auto text-white">
        <p className="px-4 md:px-0 text-center mb-10 font-light text-lg">
          At Global NCLEX Exams Center, we are dedicated to helping aspiring
          Registered Nurses (RNs) prepare thoroughly for the NCLEX-RN—the
          critical exam that stands between you and your nursing license in the
          United States, Canada, and Australia. The NCLEX-RN is a
          computer-adaptive test designed to assess your ability to think
          critically and apply nursing knowledge in real-world scenarios.
          Passing this exam is a non-negotiable step toward launching your
          career as a Registered Nurse. <br></br>But at Global NCLEX Exams
          Center, we go beyond just exam prep. We empower future nurses with the
          confidence, skills, and strategies needed to excel—not just in the
          exam, but in their careers.<br></br>
          <br></br>
          Other services we render at{" "}
          <span className="text-lime-400 text-xl uppercase">
            Global Nclex Exam Center{" "}
          </span>{" "}
          include the following
        </p>

        <Tabs
          defaultValue="account"
          className="px-4 w-full text-white"
          value={activeTab}
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Sponsorship</TabsTrigger>
            <TabsTrigger value="password">Accomodation</TabsTrigger>
            <TabsTrigger value="another">Test Centre</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="bg-transparent border-none">
              <CardHeader>
                {/* <CardTitle className="text-white">Sponsorship</CardTitle> */}
                <CardDescription className="text-white">
                  Qualified students will receive financial support to complete
                  their credential evaluation,NCLEX-RN Exams fees,assistance
                  with Job placement, U.S Visa application and fees,Air fare to
                  the U.S,and assistance with accommodation upon arrival in the
                  U.S. *The student will sign a contract to pay back the cost of
                  sponsorship whilst working in the U.S. Employment is
                  guaranteed for all successful students who enter the U.S.
                  through our sponsorship.
                  <div className="flex justify-between items-center gap-10 mt-5">
                    <div className="hidden md:flex relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                      <Image
                        src={nurse}
                        alt="nurse"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                      <Image
                        src={sponsor3}
                        alt="nurse"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="hidden md:flex relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                      <Image
                        src={sponsor1}
                        alt="nurse"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="bg-transparent border-none">
              <CardHeader>
                <CardDescription className="text-white">
                  The Global NCLEX-RN Exams Center & Training School does not
                  currently offer lodging to its participants. But in the near
                  future, we will swiftly inform you of any updates pertaining
                  to this situation. If you're looking for somewhere to stay,
                  there are a lot of landlords around our academy that can
                  accommodate you. Although these possibilities are accessible,
                  please be aware that Global NCLEX-RN Exams Center & Training
                  School does not support or particularly suggest any one
                  lodging service.
                  <div className="flex justify-between items-center gap-10 mt-5">
                    <div className="hidden md:flex relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                      <Image
                        src={accomodation1}
                        alt="nurse"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                      <Image
                        src={accomodation2}
                        alt="nurse"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="hidden md:flex relative w-full md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                      <Image
                        src={accomodation3}
                        alt="nurse"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="another">
            <Card className="bg-transparent border-none">
              <CardHeader>
                <CardDescription className="text-white">
                  <div className="w-full  md:px-4 mx-auto bg-lime-600 p-3 sm:p-5 rounded-lg mt-5 text-gray-900">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      id="apply"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg sm:text-xl">
                          Course Content
                        </AccordionTrigger>
                        <AccordionContent className="text-base sm:text-lg">
                          <div className="md:text-2xl mb-3">
                            Signing up for this package gives access to:
                          </div>
                          <div className="md:flex items-start gap-10">
                            <div>
                              <p>• NCLEX-RN exam preparation.</p>
                              <p>• Professional standards in nursing.</p>
                              <p>• Foundations of care.</p>
                              <p>
                                • Growth and development across the lifespan.
                              </p>
                              <p>
                                • Pediatric nursing Integumentary problems of
                                the adult client.
                              </p>
                              <p>
                                • Oncologic and hematologic problems of adult
                                clients.
                              </p>
                              <p>• Endocrine Problem of adult clients.</p>
                              <p>• Respiratory problem of adults.</p>
                            </div>
                            <div>
                              <p>• Cardiovascular problem of adults.</p>
                              <p>• Renal and urinary problems in adults.</p>
                              <p>• Eye and ear problem of adult client.</p>
                              <p>• Neurological problems of adult clients.</p>
                              <p>
                                • Musculoskeletal problems of adult clients.
                              </p>
                              <p>• Immune problems of adult clients..</p>
                              <p>• Mental health problems of adult clients.</p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg sm:text-xl">
                          Who is this course for?
                        </AccordionTrigger>
                        <AccordionContent className="text-base sm:text-lg">
                          This course is for nurses who are preparing for the
                          NCLEX-RN exam.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg sm:text-xl">
                          How to Apply for NCLEX-RN Exam as a Registered Nurse
                          in Africa
                        </AccordionTrigger>
                        <AccordionContent className="text-base sm:text-lg">
                          <div className="">
                            <div className="lg:flex gap-6 items-start">
                              <div className="relative w-full mb-3 md:mb-0 md:w-[600px] lg:w-[800px] h-56 overflow-hidden">
                                <Image
                                  src={nurse1}
                                  alt="nurse"
                                  fill
                                  className="rounded-lg object-cover "
                                />
                              </div>
                              <div className="text-left w-full">
                                <p className="font-light mb-3 text-sm md:text-base">
                                  NCLEX (National Council Licensure Examination)
                                  is a licensure examination administered by the
                                  National Council of State Boards of Nursing
                                  (NCSBN) for licensing nurses in the US,
                                  Canada, and recently in Australia.
                                  Foreign-educated nurses who wish to practice
                                  in the aforementioned countries must take the
                                  exam. It is noteworthy that none of the West
                                  African countries has an approved NCLEX exam
                                  center despite most NCLEX takers in Africa
                                  coming from this zone. The examination is
                                  administered in various countries, including
                                  the United Kingdom, India, the Philippines,
                                  South Africa, and Turkey.
                                </p>
                              </div>
                            </div>
                            <div className="font-light mb-3 text-sm md:text-base">
                              Applying for the NCLEX can be a daunting task,
                              especially if you're located in Africa. However,
                              with the right guidance, you can navigate the
                              process with ease. Here is a step-by-step guide on
                              how to apply for the NCLEX if you're a registered
                              nurse located in Africa.<br></br> <br></br>
                              <span className="font-semibold">
                                1. Determine Eligibility:
                              </span>
                              The first step in applying for the NCLEX is to
                              determine if you are eligible to the state you
                              want to apply. You must have graduated from an
                              approved nursing program and have a valid nursing
                              license in your country of education. <br></br>
                              <br></br>
                              <span className="font-semibold">
                                2. Credential Evaluation:
                              </span>
                              Foreign-educated nurses must have their education
                              evaluated by an approved credentising agermy they
                              can apply to the board of nursing Credential
                              evaluation is a requirement for certain states and
                              territories in the United States fac registered
                              and practical nurses educated outside the US to
                              obtain state licensing. <br></br>
                              <br></br>
                              <span className="font-semibold">
                                3. Apply with the Board of Nursing:
                              </span>{" "}
                              The next step is to submit an application,
                              corresponding fees, and requirements to the
                              nursing board. Applicants can lodge their
                              applications even if they're outside the United
                              States. <br></br>
                              <br></br>
                              <span className="font-semibold">
                                4. Register for the Exam:{" "}
                              </span>
                              After your application is approved, you will need
                              to register to be authorized to sit for the NCLEX
                              exam. A registration fee will apply. <br></br>
                              <br></br>
                              <span className="font-semibold">
                                5. Schedule the Exam:
                              </span>{" "}
                              Once you are registered and approved to sit for
                              the NCLEX exam, you will be able to set your exam
                              appointment. The exam is offered at the testing
                              center in South Africa, so you will need to find
                              the nearest location to you. Please take note that
                              the fee varies depending on your location and is
                              subject to change. <br></br>
                              <br></br>
                              <span className="font-semibold">
                                6. Prepare for the Exam:
                              </span>{" "}
                              The final step is to prepare for the exam. This
                              may include studying for the exam, taking practice
                              tests, and finding resources to help you prepare.
                              <br></br>
                              <br></br>
                              <span className="font-semibold">
                                7. Exam result:
                              </span>{" "}
                              The official results are only available through
                              the candidate's state board of nursing. The
                              official test result will be released six weeks
                              after completing the exam. However, applicants may
                              access the unofficial results in two business days
                              by purchasing the Quick Result Service. Unofficial
                              results from Quick Result Service do not authorize
                              you to practice as a licensed registered or
                              practical nurse. <br></br>
                              <br></br>
                              <span className="font-semibold">
                                8. Get your license or apply for a license
                                application:
                              </span>{" "}
                              Not all Nursing Boards will grant you a license
                              after you pass the NCLEX exam, Some states will
                              ask you to complete a license application before
                              they issue you a license. <br></br>
                              <br></br>
                              <br></br>In conclusion, nurses with foreign
                              education may find the NCLEX application procedure
                              to be a challenging one. Finding out which Board
                              of Nursing best matches your expertise,
                              registering for certification with the boards and
                              NCSBN, figuring out how to pay the application
                              fee, submitting the necessary paperwork, and
                              setting up the test are all part of the process.
                              You should think about a ton of things before
                              applying for it. But keep in mind that you don't
                              have to struggle to prepare for the NCLEX since
                              the Global NCLEX-RN Exams Center is here to make
                              sure you can easily fulfill your USRN dream. The
                              knowledgeable and innovative Global NCLEX-RN Exams
                              Center provides quick and simple exam applications
                              for the NCLEX-RN. It will complete your NCLEX
                              application from start to finish at the lowest
                              cost. Please send us an email at{" "}
                              <span className="font-semibold italic">
                                info@globalnclexamscenter.com
                              </span>{" "}
                              if you have any additional questions concerning
                              the prerequisites, costs, and application
                              requirements for the NCLEX USA exam. <br></br>
                              <br></br>
                              <Link
                                href={"https://home.pearsonvue.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold px-5 py-2 border border-gray-900 rounded-full"
                              >
                                Click here to PearsonVue
                              </Link>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <FooterSection />
    </div>
  );
}
