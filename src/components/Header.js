import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-5 py-3 bg-primary">
        <a className="text-slate-900 font-bold text-lg" href="#">Vikneswari M</a>
        <nav className="hidden md:block">
            <ul className="flex gap-5 text-white">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav> 
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className="md:hidden block">
            <Bars3Icon className="h-3 text-white"/>
        </button>   
    </header>
  )
}

export default Header