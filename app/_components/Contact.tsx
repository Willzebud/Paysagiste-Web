"use client";
import ContactForm from "@/components/ui/contactForm";
import { Phone } from "lucide-react";

export const Contact = () => {
  return (
    <div id="Contact" className="backdrop-blur-sm bg-[#2FA87A]/10 ring-1 ring-inset ring-[#2FA87A]/25 pb-20 overflow-x-hidden">
      {/* filets lumineux émeraude */}
  <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px
       w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2FA87A] to-transparent" />
      <h2 className="font-caption font-bold text-5xl max-w-3xl px-4 m-auto text-black mt-20 pt-20">
        Contact
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-28 space-y-4 md:space-y-0 max-w-5xl m-auto w-full">
        <div className="md:w-[400px] text-center md:text-left">
          <p className="text-justify p-4 hyphens-auto">
            Si vous souhaitez échanger autour de vos projets d&apos;aménagement
            paysager ou simplement discuter de vos idées, vous pouvez me
            contacter en m&apos;envoyant un message ou nous appeler directement.
            Je serai ravi de vous répondre !
          </p>
          {/* Tel */}
          <a
            href="tel:0634902284"
            aria-label="Appeler"
            className="mt-4 w-14 h-14 mx-auto grid place-items-center"
          >
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <Phone className="text-primary-foreground" strokeWidth={1.5} />
            </div>
          </a>
        </div>
        <div className="w-full md:w-[400px] p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
