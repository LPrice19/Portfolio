import aboutImg from '../assets/leon.jpeg'; // Update the path accordingly
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mt-0 lg:mt-[-3rem]">
      <h1 className="font-space-mono my-20 text-center text-4xl lg:mt-0">
        About <span className="text-blue-400">Me</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl mt-4 lg:mt-0" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6 lg:mt-0">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
