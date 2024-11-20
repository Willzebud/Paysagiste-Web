"use client";
import ContactForm from "@/components/ui/contactForm";

export const Contact = () => {
  return (
    <div id="Contact" className="bg-quaternary pb-20">
      <h2 className="font-caption font-bold pt-10 text-5xl max-w-3xl px-4 m-auto text-black mt-20 pt-20">
        Contact
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-28 space-y-4 md:space-y-0 max-w-5xl m-auto w-full">
        <div className="md:w-[400px] text-center md:text-left">
          <p className="text-justify p-4">
            Si vous souhaitez échanger autour de vos projets d&apos;aménagement
            paysager ou simplement discuter de vos idées, vous pouvez me
            contacter en m&apos;envoyant un message ici. Je serai ravi de vous
            répondre !
          </p>
        </div>
        <div className="w-full md:w-[400px] p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
