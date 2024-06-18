import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'> 
      <h1 className='font-space-mono my-20 text-center text-4xl'>Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className='mb-8 p-4 lg:mb-12 lg:p-6 flex flex-wrap lg:justify-center bg-black rounded-lg'
          >
            <div className='w-full lg:w-1/4'>
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                alt={project.title} 
                className='mb-6 rounded'
              />
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400'>
                    {tech}
                </span>
              ))}
              <div className='mt-4'>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-white-500 hover:underline'>
                    View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
