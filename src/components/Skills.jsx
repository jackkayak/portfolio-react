import React from 'react'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Node from '../assets/node.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#f77f00] '>Skills</p>
                <p className='py-4   '>These are the technologies I have practiced the most.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwindcss Icon" />
                    <p className='my-4'>Tailwindcss</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node Icon" />
                    <p className='my-4'>Node.js</p>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default Skills