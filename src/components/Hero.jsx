import React, { useState, useEffect, useRef } from "react";
import About from "./About"; // Import the About component
import {motion} from "framer-motion";


const phrases = [
  "Software Development. Proficient in SQL | JS | Python",
  "Data Analytics. Proficient in SQL | Power BI | Excel",
  "User Experience. Proficient in Figma | Photoshop | Sketch"
];

const initialText = "👋, I'm a Computer Science graduate from the UK, passionate about   ";

const Hero = () => {
  const [content, setContent] = useState(initialText);
  const [showCursor, setShowCursor] = useState(true); // State to manage cursor visibility
  const [animationComplete, setAnimationComplete] = useState(false); // State to track if animation is complete
  const [phraseIndex, setPhraseIndex] = useState(0); // State to track current phrase index
  const technologyNames = ["👋",  "Data Analytics", "Software Development", "User Experience"];

  const aboutRef = useRef(null); // Reference to the About section

  useEffect(() => {
    const animateText = () => {
      let currentText = "";
      const targetText = phrases[phraseIndex];

      for (let i = 0; i <= targetText.length; i++) {
        setTimeout(() => {
          currentText = initialText + targetText.substring(0, i);
          setContent(currentText);
        }, i * 50);
      }

      setTimeout(() => {
        setAnimationComplete(true);
      }, targetText.length * 50);
    };

    animateText();

    return () => clearTimeout();
  }, [phraseIndex]);

  useEffect(() => {
    if (!animationComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev); // Toggle cursor visibility
      }, 500); // Adjust the interval to control the blink rate

      return () => clearInterval(cursorInterval);
    }
  }, [animationComplete]);

  useEffect(() => {
    if (animationComplete) {
      setTimeout(() => {
        setAnimationComplete(false);
        const targetText = phrases[phraseIndex];
        for (let i = targetText.length; i >= 0; i--) {
          setTimeout(() => {
            const currentText = initialText + targetText.substring(0, i);
            setContent(currentText);
          }, (targetText.length - i) * 30);
        }
        setTimeout(() => {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, targetText.length * 30 + 1000); // Wait for 1 second after backspace animation
      }, 1500); // Wait for 1.5 seconds before switching to the next phrase
    }
  }, [animationComplete]);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 lg:px-8">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-space-mono-bold mt-neg-64 pb-4 text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-tighter mt-[3rem] lg:mt-[4rem]">
            <span>Leon</span>
            <span className="ml-[1rem] sm:ml-[1.5rem]">Price</span>
          </h1>
          <p className="font-space-mono text-black-500 bg-gradient-to-r text-[0.78rem] from-gray-200 via-gray-300 to-gray-400 lg:mt-[1rem] bg-clip-text my-1 max-w-xl py-2 text-sm sm:text-base md:text-lg lg:text-[1rem] font-light tracking-tighter lg:mt-[0rem] break-words">
            {content.split(new RegExp(`(${technologyNames.join("|")})`, "g")).map((part, index) => {
              if (technologyNames.includes(part)) {
                return <span key={index} className="text-blue-400">{part}</span>;
              } else {
                return part;
              }
            })}
            <span className={`cursor ${showCursor ? "visible" : "invisible"}`}>|</span>
          </p>
          <button
            onClick={handleScroll}
            className="hidden md:block mt-[10rem] px-4 py-2 bg-zinc-900 text-white rounded hover:bg-blue-700 transition duration-300">
            👤
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center border-neutral-900 pb-4 lg:mb-35">
        {/* Content for the border */}
      </div>
      {/* Additional content goes here */}
      <div ref={aboutRef}>
        {/* About content goes here */}
      </div>
      <div className="pb-40">
        {/* This div increases the page length by 10rem (40 units of spacing) */}
      </div>
    </div>
  );
};

export default Hero;
