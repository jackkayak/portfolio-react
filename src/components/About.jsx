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
                        I have dedicated most of my day to learning new methods and information regarding tech,
                        with my learned knowledge, I make sure to apply such to new projects. I have always been a problem-solver, I learn best when I am hands-on so I reflect most skill through my actions. 
                        I feel accomplished most when I solve an issue on my own, but I know when to reach out. My ideas are always pretty creative as they randomly pop in my head and I make sure to jot them down on paper. 
                        </p>
                    </div>
            </div>
        </div>



    </div>
  )
}

export default About