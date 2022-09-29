import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>

        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f77f00]'>
                        About
                    </p>
                </div>
                <div>{/* Spacer */}</div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl italic'>
                        <p>Hello. I'm Jack, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        I am dedicated to learning new methods and strategies within the tech industry. I enjoy practicing and fine tuning my skills by coding new mockups on a weekly basis.
                         I have always been a problem-solver and like to learn through hands-on experience. My skills are best exemplified through my projects. In order to reach my goal of becoming a creative developer, I push myself everyday to learn 
                         something new and keep up with the most recent developments in graphic design.
                        </p>
                    </div>
            </div>
        </div>



    </div>
  )
}

export default About