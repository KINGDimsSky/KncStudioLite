import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const AboutUs = () => {
  return (
    <MaxWidthWrapper className="py-16 px-2 min-h-screen">
      <div className="flex justify-center  gap-4 px-2 py-2 rounded-lg">
        <div className="flex flex-col px-5 py-4 bg-white rounded-xl w-[29rem]">
          <h2 className="text-purple-500 font-semibold text-lg tracking-wide">
            How It Started
          </h2>
          <h2 className="font-semibold text-5xl mt-3 w-[26rem]">
            Our Dream Is Global Learning Transformation
          </h2>
          <p className="mt-56 text-sm">
            At KncStudio, we strive to revolutionize learning through
            exceptional design and creativity. As the ultimate marketplace for
            Design and UI Kits, we empower creators and innovators worldwide to
            build transformative educational experiences. Join us as we turn
            dreams of global learning into reality—one design, one kit, and one
            learner at a time.
          </p>
        </div>
        <div className="flex flex-col rounded-xl w-[32rem]">
            <div className="bg-red-300 flex items-center justify-center rounded-xl h-72">
                Image
            </div>
            <div className="flex flex-col h-72 mt-2 bg-white rounded-lg py-8 px-8">
              <div className="flex">
                <div className="flex flex-col bg-gray-200 px-4 py-4 rounded-lg w-56">
                    <h2 className="font-semibold text-3xl">3.5</h2>
                    <h2 className="font-light text-sm mt-2">Years Experience</h2>
                </div>
              </div>
              <div className="flex">

              </div>
            </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutUs;
