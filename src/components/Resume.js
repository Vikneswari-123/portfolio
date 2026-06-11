import React from 'react'
import ResumeImg from '../assets/resume.jpg'

const Resume = () => {

    const config = {
        resumeLink: process.env.REACT_APP_RESUME_LINK, 
        resumeFileName: 'Vikneswari_M_Resume.pdf' 
    }

  return (
    <section className="flex flex-col md:flex-row about-section px-10 py-16 gap-10" id="resume">
        
        <div className="md:w-1/2 flex justify-center items-center">
            <img 
                className="w-[280px] rounded-xl mix-blend-luminosity" 
                src={ResumeImg} 
                alt="Resume" 
            />
        </div>
        
        <div className="md:w-1/2 flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold border-b-2 border-white pb-2">
                Resume
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
                Interested in working together? Download my resume 
                to learn more about my skills, experience, and projects.
            </p>
            <a 
                href={config.resumeLink}
                download={config.resumeFileName}
                className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all w-fit"
            >
                ⬇ Download Resume
            </a>
        </div>
    </section>
  )
}

export default Resume