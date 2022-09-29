import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name='hero' className=' w-full h-screen bg-[#0a192f]'>

        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-[#f77f00] italic tracking-wide'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]'>Jack Kay</h1>
            <h2 className='text-3xl sm:text-6xl pt-4 font-bold text-[#cdcdcd]'>I'm a Front End Developer and UI/UX Designer.</h2>
            <p className='text-[#cdcdcd] py-4 max-w-[700px]'>As a Developer and Designer, I am constantly keeping up with the latest trends. I have an eye for detail and value the art of clean
             code. I am always working to expand my knowledge base and improve my skill set. Feel free to take a look at some of my latest projects below.</p>
                <div>
                    <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f77f00] hover:border-[#f77f00]'><Link to="work"  smooth={true}  duration={800} >
                  View Work
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                    </button>
                </div>
        </div>
        

    </div>
  )
}

export default Hero