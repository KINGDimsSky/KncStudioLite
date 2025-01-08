import MaxWidthWrapper from "../components/MaxWidthWrapper";
import CardDetail from "../components/cardDetail";
import React, { useEffect, useRef } from "react";
import "../slider.css";


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
      <div className="flex flex-col md:flex-row justify-center  gap-4 px-2 py-2 rounded-lg">
        <div className="flex flex-col px-5 py-4 bg-white rounded-xl ">
          <h2 className="text-purple-500 font-semibold text-lg tracking-wide">
            How It Started
          </h2>
          <h2 className="font-semibold text-5xl mt-3">
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
        <div className="flex flex-col rounded-xl ">
            <div className="bg-red-300 flex items-center justify-center rounded-xl h-72">
                <img className="object-cover overflow-hidden bg-center rounded-lg w-full h-full" src="/UiKitsDesign.jpeg" alt="" />
            </div>
            <div className="flex flex-col h-72 mt-2 bg-white rounded-lg py-8 px-8">
              <div className="flex gap-4">
              <CardDetail title="3.5" desc="Years Experience"/>
              <CardDetail title="23+" desc="Project Challenges"/>
              </div>
              <div className="flex mt-6 gap-4">
                <CardDetail title="830 +" desc="Positive Reviews"/>
                <CardDetail title="100K" desc="Trusted by Customer"/>
              </div>
            </div>
        </div>
      </div>
      <div className="flex gap-3 border-t border-gray-800 mt-24">
      <div className="slider">
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src="/UiKitsDesign.jpeg" alt="Design 1" />
          </div>
          <div className="item">
            <img src="/UiKitsDesign.jpeg" alt="Design 2" />
          </div>
          <div className="item">
            <img src="/UiKitsDesign.jpeg" alt="Design 3" />
          </div>
          <div className="item">
            <img src="/UiKitsDesign.jpeg" alt="Design 4" />
          </div>
          <div className="item">
            <img src="/UiKitsDesign.jpeg" alt="Design 5" />
          </div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default AboutUs;
