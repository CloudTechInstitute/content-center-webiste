"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Service() {
  return (
    <div className="text-left w-full bg-lime-600 p-5 rounded-lg mt-5 mb-10 text-gray-900">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            What does Global NCLEX Exams Center do?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Our training facility offer comprehensive practical materials and
            Courses for medical students to prepare for NCLEX-RN and other
            licensure exams
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">
            Why should I choose GLOBAL NCLEX-RN?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            The Global NCLEX-RN Exams Center in Ghana is dedicated to providing
            the best tools, instruction, and support for ambitious nurses to
            pass the NCLEX-RN exam, ensuring their success in the demanding
            nursing industry.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">
            Does Global NCLEX-RN Exams Center have sponsorships?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Qualified students will receive financial support to complete their
            credential evaluation,NCLEX-RN Exams fees,assistance with Job
            placement, U.S Visa application and fees,Air fare to the U.S,and
            assistance with accommodation upon arrival in the U.S. *The student
            will sign a contract to pay back the cost of sponsorship whilst
            working in the U.S. Employment is guaranteed for all successful
            students who enter the U.S. through our sponsorship.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">
            How similar are the Global NCLEX-RN practice questions to the actual
            exam?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            According to our student survey, more than 90% of our learners
            report that our questions are the similar in difficulty or more
            difficult than the NCLEX.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl">
            How accurate is Global NCLEX-RN self-assessment test?
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Our carefully curated self-assessment exams are designed to
            accurately predict your likelihood of passing the NCLEX-RN exam.
            Unlike our competitors, our NCLEX-RN self-assessment tests have
            unique questions designed to match the content categories found on
            the NCSBN test plan. This ensures your readiness assessment reflects
            the actual NCLEX exam format and knowledge required. We can boldly
            say, choosing us means you are choosing trusted results.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
