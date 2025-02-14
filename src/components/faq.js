"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Service() {
  return (
    <div
      className="w-full px-4 lg:max-w-4xl mx-auto bg-lime-600 p-3 sm:p-5 rounded-lg mt-5 mb-10 text-gray-900"
      id="faqs"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg sm:text-sm">
            What does Global NCLEX Exams Center do?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Our training facility offers comprehensive practical materials and
            courses for medical students to prepare for NCLEX-RN and other
            licensure exams.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg sm:text-xl">
            Why should I choose GLOBAL NCLEX-RN?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            The Global NCLEX-RN Exams Center in Ghana provides the best tools,
            instruction, and support for nurses to pass the NCLEX-RN exam,
            ensuring success in the nursing industry.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg sm:text-xl">
            Does Global NCLEX-RN Exams Center have sponsorships?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Qualified students receive financial support covering credential
            evaluation, NCLEX-RN exam fees, job placement assistance, U.S. visa
            application and fees, airfare, and accommodation in the U.S.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg sm:text-xl">
            How similar are the Global NCLEX-RN practice questions to the actual
            exam?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            90% of our students report that our practice questions are similar
            in difficulty or more challenging than the NCLEX.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg sm:text-xl">
            How accurate is Global NCLEX-RN self-assessment test?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Our self-assessment exams predict your likelihood of passing the
            NCLEX-RN with high accuracy, reflecting the actual NCLEX test plan.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg sm:text-xl">
            Who is this course for?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            This course is for registered nurses in Africa preparing for their
            NCLEX-RN exams.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
