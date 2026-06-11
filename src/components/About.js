import React from 'react'
import AboutImg from '../assets/aboutt.png'

const About = () => {

    const config={
        line1:'I am a passionate full-stack developer with experience in building web applications using the MERN stack.',
        line2:'I specialize in building end-to-end web applications using React.js, Node.js, Express.js, and MongoDB - and I have hands-on experience integrating AI APIs into real production projects.'


    }
  return (
    <section className="flex flex-col md:flex-row about-section px-5" id="about">
        <div className="md:w-1/2">
            <img src={AboutImg} alt="About" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-5 justify-center">
            <h1 className="text-3xl font-bold border-b-2 mb-5 w-[150px]">About Me</h1>
            <p className="text-lg">{config.line1}</p>
            <p className="text-lg">{config.line2}</p>
        </div>
   </section>
  )
}

export default About