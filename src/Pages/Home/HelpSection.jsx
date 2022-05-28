import React from "react";
import {
  PhoneOutgoingIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const HelpSection = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold">HOW CAN WE HELP?</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5 text-center">
        <div className="p-3">
          <PhoneOutgoingIcon className="h-[70px] my-5 w-[60px] text-center block mx-auto" />
          <h3 className="text-2xl text-center font-bold my-3">CONTACT US</h3>
          <p>Have a question? Need help? Click here to contact us.</p>
        </div>
        <div className="border-x-4 p-3 border-black">
          <ShieldExclamationIcon className="h-[70px] my-5 w-[60px] text-center block mx-auto" />
          <h3 className="text-2xl text-center font-bold my-3">WARRANTY</h3>
          <p>
            Questions about the warranty of your product? Learn more on our
            Warranty page.
          </p>
        </div>
        <div className="p-3">
          <UserGroupIcon className="h-[70px] my-5 w-[60px] text-center block mx-auto" />
          <h3 className="text-2xl text-center font-bold my-3">SERVICE</h3>
          <p>
            Have a tool that needs to be serviced? We’ll help you get back to
            work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
