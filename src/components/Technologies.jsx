import React from 'react';
import { FaNodeJs, FaCss3Alt, FaHtml5, FaMicrosoft } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{ opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="font-space-mono my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: 100 }}
      transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        intitial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          intitial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          intitial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-7xl text-white-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          intitial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          intitial="initial"
          animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaMicrosoft className="text-7xl text-blue-400"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
