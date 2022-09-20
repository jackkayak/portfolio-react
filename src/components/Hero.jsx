import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className=' w-full h-screen bg-[#0a192f]'>

        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-[#f77f00] italic tracking-wide'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]'>Jack Kay</h1>
            <h2 className='text-3xl sm:text-6xl pt-4 font-bold text-[#cdcdcd]'>I'm a Front End Developer and UI/UX Designer.</h2>
            <p className='text-[#cdcdcd] py-4 max-w-[700px]'>I'm a both a Developer and Designer, constantly keeping up with latest trends. 
                I understand both the eye for detail as well as the art of clean code. 
                I work constantly, trying to learn something new everyday and improve my 
                current stack of skills.</p>
                <div>
                    <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f77f00] hover:border-[#f77f00]'>View Work 
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