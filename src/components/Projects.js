import React from 'react'
import ProjectImg1 from '../assets/quickcart.jpg'
import ProjectImg2 from '../assets/EMS.jpg'

const Projects = () => {


      

  return (
    <section className="flex flex-col items-center py-16 px-4 md:px-10 bg-indigo-950 text-white min-h-screen" id="projects">
        
        {/* Section Title */}
        <h1 className="text-3xl font-bold border-b-2 border-white mb-10 text-center">
            Projects
        </h1>

        {/* Container */}
        <div className="w-full max-w-4xl mx-auto">
            
           
            <div className="flex flex-col md:flex-row justify-center gap-8">
                
                {/* QuickCart */}
                <div className="flex flex-col w-full md:w-96 bg-indigo-900 rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full h-56 overflow-hidden">
                        <img 
                            src={ProjectImg1} 
                            alt="QuickCart project" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-5 flex flex-col gap-3">
                        <h2 className="text-xl font-bold text-cyan-400 text-center">
                            QuickCart
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed text-center">
                            AI-powered full-stack e-commerce platform 
                            built with the MERN stack. Features Groq 
                            LLaMA 3.3 AI product descriptions, Stripe 
                            payments, Cloudinary storage, and JWT 
                            authentication.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {['React.js', 'Node.js', 'MongoDB', 
                              'Stripe', 'Groq AI', 'JWT'].map(tech => (
                                <span 
                                    key={tech} 
                                    className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-3 mt-3">
                            <a 
                                href="https://quickcart-frontend-gules.vercel.app" 
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-all"
                            >
                                Live Demo
                            </a>
                            <a 
                                href="https://github.com/Vikneswar-i123/QuickCart" 
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* EMS */}
                <div className="flex flex-col w-full md:w-96 bg-indigo-900 rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full h-56 overflow-hidden">
                        <img 
                            src={ProjectImg2} 
                            alt="EMS project" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-5 flex flex-col gap-3">
                        <h2 className="text-xl font-bold text-cyan-400 text-center">
                            Employee Management System
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed text-center">
                            Full-stack HR management platform with 
                            role-based Admin and Employee portals, 
                            real-time attendance tracking, leave 
                            management, payslip generation, and 
                            JWT authentication.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {['React.js', 'Node.js', 'MongoDB', 
                              'JWT', 'REST API', 'Vercel'].map(tech => (
                                <span 
                                    key={tech} 
                                    className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 px-2 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center gap-3 mt-3">
                            <a 
                                href="https://ems-mern-two.vercel.app" 
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-all"
                            >
                                Live Demo
                            </a>
                            <a 
                                href="https://github.com/Vikneswari-123/EMS-MERN" 
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Projects