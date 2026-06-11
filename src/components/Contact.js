// Contact.jsx
import React from 'react'

const Contact = () => {

    const config = {
        email: process.env.REACT_APP_EMAIL,
        phone: process.env.REACT_APP_PHONE,
        
    }
  return (

    <section className="bg-[#070819] text-white py-20 px-4 md:px-10" id="contact">
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
            
            {/* Title */}
            <div className="text-center">
                <h1 className="text-3xl font-bold border-b-2 border-white pb-2 mb-3">
                    Contact Me
                </h1>
                <p className="text-gray-400 text-base">
                    Feel free to reach out — I am open to opportunities!
                </p>
            </div>

            {/* Contact Card */}
            <div className="w-full bg-indigo-900/50 border border-indigo-700 rounded-2xl p-8 flex flex-col gap-5">
                
                {/* Email */}
                <div className="flex items-center gap-4">
                    <div className="bg-cyan-400/10 border border-cyan-400/30 p-3 rounded-full">
                        <span className="text-cyan-400 text-xl">✉</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Email</p>
                        <a 
                            href={`mailto:${config.email}`}
                            className="text-white hover:text-cyan-400 transition-all"
                        >
                           {config.email} 
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                    <div className="bg-cyan-400/10 border border-cyan-400/30 p-3 rounded-full">
                        <span className="text-cyan-400 text-xl">📞</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Phone</p>
                        <a 
                            href={`tel:+91${config.phone}`}
                            className="text-white hover:text-cyan-400 transition-all"
                        >
                            +91 {config.phone}
                        </a>
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                    <div className="bg-cyan-400/10 border border-cyan-400/30 p-3 rounded-full">
                        <span className="text-cyan-400 text-xl">💼</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">LinkedIn</p>
                        <a 
                            href="https://linkedin.com/in/vikneswarim" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-cyan-400 transition-all"
                        >
                            linkedin.com/in/vikneswarim
                        </a>
                    </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                    <div className="bg-cyan-400/10 border border-cyan-400/30 p-3 rounded-full">
                        <span className="text-cyan-400 text-xl">🐙</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">GitHub</p>
                        <a 
                            href="https://github.com/Vikneswari-123" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-cyan-400 transition-all"
                        >
                            github.com/Vikneswari-123
                        </a>
                    </div>
                </div>

            </div>

            {/* Social buttons row */}
            <div className="flex gap-4 flex-wrap justify-center">
                <a 
                    href="https://linkedin.com/in/vikneswarim"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-all text-sm"
                >
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/Vikneswari123"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all text-sm"
                >
                    GitHub
                </a>
                <a 
                    href={`mailto:${config.email}`}
                    className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all text-sm"
                >
                    Email Me
                </a>
            </div>

            
            

        </div>
    </section>
  )
}

export default Contact