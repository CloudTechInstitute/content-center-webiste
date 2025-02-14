"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import logo from "@/components/assets/full-logo.png";
import { useToast } from "@/hooks/use-toast";

export default function FooterSection() {
  const { toast } = useToast();
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "a405b133-39a1-4efc-aeb0-2789446fdf11");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast({
        description: "Email sent successfully",
      });
      form.reset();
    }
  }
  return (
    <>
      <div
        className="flex gap-12 items-start w-full rounded-lg p-10 mb-4 bg-gradient-to-b from-slate-900 to-slate-800 justify-center"
        id="contact"
      >
        <section className="">
          <div className="lg:max-w-3xl">
            <h2 className="mb-4 text-4xl tracking-tight text-center text-lime-400">
              Contact Us
            </h2>
            <p className="mb-2 lg:mb-10 font-light text-center text-white">
              Do you need assitance with registration or enquiries on any of our
              products? Reach out to us.
            </p>
            <div className="lg:flex w-full gap-12 items-start justify-center mb-5 lg:mb-0">
              <form onSubmit={handleSubmit} className="space-y-2 w-full">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block p-2.5 w-full text-sm rounded-lg bg-transparent  border border-gray-300 shadow-sm text-white focus:ring-lime-400 focus:border-lime-400"
                    placeholder="valid email address"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="heading"
                    className="block p-2.5 w-full text-sm rounded-lg bg-transparent  border border-gray-300 shadow-sm text-white focus:ring-lime-400 focus:border-lime-400"
                    placeholder="message heading"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    id="message"
                    rows="6"
                    name="message"
                    className="block p-2.5 w-full text-sm rounded-lg bg-transparent  border border-gray-300 shadow-sm text-white focus:ring-lime-400 focus:border-lime-400"
                    placeholder="Let us know how we can help you"
                  ></textarea>
                </div>
                <Button className="w-full lg:w-48">Submit</Button>
              </form>
              <div className="w-full text-gray-500 mt-5 lg:mt-0">
                <div className="flex gap-6 items-center mb-4">
                  <FaMapLocationDot size={36} />
                  <p>
                    AM22 Tsui RD.GZ-103 0284 <br></br>Lekma Hospital, Ghana
                  </p>
                </div>
                <div className="flex gap-6 items-center mb-4">
                  <GiRotaryPhone size={36} />
                  <p>
                    +1-2060989-1335 <br></br> +233-53-623-0623 <br></br>{" "}
                    +233-20-583-9221
                  </p>
                </div>
                <div className="flex gap-6 items-center mb-4">
                  <MdEmail size={36} />
                  <p>info@globalnclexamscenter.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="w-full text-white">
        <div className="w-full py-8 px-6 lg:px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <Image className="w-64" src={logo} alt="nclex logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold up text-lime-400 uppercase ">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#courses" className="hover:underline">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-lime-400 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://x.com/RnNclexglobal"
                      className="hover:underline "
                    >
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-lime-400 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center  sm:justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()}
              <a href="https://flowbite.com/" className="ml-4 mr-5 :underline">
                GlobalNclexExamsCenter
              </a>
              Powered by: Spring Media Groupe
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
