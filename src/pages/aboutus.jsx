import MaxWidthWrapper from "../components/MaxWidthWrapper";
import CardDetail from "../components/cardDetail";
import React, { useEffect, useRef } from "react";
import "../slider.css";
import { UserRound } from "lucide-react";

const AboutUs = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let cloneChildren = [...slider.children];

    // Duplicate items to create a loop effect
    cloneChildren.forEach((child) => {
      const cloned = child.cloneNode(true);
      slider.appendChild(cloned);
    });

    // Add animation
    const animationDuration = 10; // Adjust to control scrolling speed
    slider.style.animation = `scroll ${animationDuration}s linear infinite`;

    return () => {
      // Clean up when component unmounts
      slider.style.animation = "";
    };
  }, []);

  return (
    <MaxWidthWrapper className="py-16 px-2 min-h-screen">
      <div className="flex flex-col md:flex-row justify-center gap-4 px-2 py-2 rounded-lg">
        <div className="flex flex-col px-5 py-4 bg-white rounded-xl md:w-1/2">
          <h2 className="text-purple-500 font-semibold text-lg tracking-wide">
            How It Started
          </h2>
          <h2 className="font-semibold text-3xl md:text-5xl mt-3 md:w-[30rem]">
            Our Dream Is Global Learning Transformation
          </h2>
          <p className="mt-8 md:mt-56 text-sm">
            At KncStudio, we strive to revolutionize learning through
            exceptional design and creativity. As the ultimate marketplace for
            Design and UI Kits, we empower creators and innovators worldwide to
            build transformative educational experiences. Join us as we turn
            dreams of global learning into reality—one design, one kit, and one
            learner at a time.
          </p>
        </div>
        <div className="flex flex-col rounded-xl md:w-1/2">
          <div className="bg-red-300 flex items-center justify-center rounded-xl h-72">
            <img
              className="object-cover overflow-hidden bg-center rounded-lg w-full h-full"
              src="/UiKitsDesign.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col h-72 mt-2 bg-white rounded-lg py-8 px-8">
            <div className="flex flex-wrap gap-8">
              <CardDetail title="3.5" desc="Years Experience" />
              <CardDetail title="23+" desc="Project Challenges" />
              <CardDetail title="830 +" desc="Positive Reviews" />
              <CardDetail title="100K" desc="Trusted by Customer" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white font-semibold text-2xl mb-4 text-center mt-24">
        Creator <span className="text-purple-600">KNCStudio</span>
      </h2>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="slider mb-14 w-full overflow-hidden">
          <div className="list flex" ref={sliderRef}>
            <div className="item text-center">
              <img
                className="relative rounded-full mx-auto"
                src="/jay.JPG"
                alt="Design 1"
              />
              <h2 className="text-violet-200 relative text-lg">Moch Syahrul Jaylani</h2>
              <h2 className="text-white relative text-sm">23120078</h2>
            </div>
            <div className="item text-center">
              <img src="/Dimas.jpg" alt="Design 2" className="mx-auto" />
              <h2 className="text-violet-200 relative text-lg">Dimas Zulkarnain PS</h2>
              <h2 className="text-white relative text-sm">23120054</h2>
            </div>
            <div className="item text-center">
              <img src="/Shendy.jpg" alt="Design 3" className="mx-auto" />
              <h2 className="text-violet-200 relative text-lg">Revanza Shendy R</h2>
              <h2 className="text-white relative text-sm">23120053</h2>
            </div>
            <div className="item text-center">
              <img src="/Ganes.jpg" alt="Design 4" className="mx-auto" />
              <h2 className="text-violet-200 relative text-lg">Ganes Wibi Susena</h2>
              <h2 className="text-white relative text-sm">23120005</h2>
            </div>
            <div className="item text-center">
              <img src="/Bima.jpg" alt="Design 5" className="mx-auto" />
              <h2 className="text-violet-200 relative text-lg">Bima Ahmad Perkasa</h2>
              <h2 className="text-white relative text-sm">23120054</h2>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutUs;
