import React from 'react'
import sheroImg from '../assets/shero.png'
import { ImGithub, ImLinkedin } from "react-icons/im"

const Hero = () => {

    const config={
        subtitle:"Full-Stack MERN Developer",
    }
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary text-white justify-center font-shero-font">
        <div className="md:w-1/2 flex flex-col gap-5">
            <h1 className="text-6xl">Hi, <br/> <span className="bg-accent">I'm Vikneswari</span>
            <p className="text-2xl">Welcome to my portfolio! <br/>I'm a {config.subtitle}</p></h1>
            <div className="flex gap-5 text-2xl py-10">
                <a href="#">
                   <ImGithub/>
                </a>
                <a href="#">
                   <ImLinkedin/>
                </a>
            </div>
        </div>
        <img className="md:w-1/3" src={sheroImg} alt="hero"/>
    </section>    
  )
}

export default Hero