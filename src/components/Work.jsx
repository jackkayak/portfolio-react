import React from 'react'

import Chat from '../assets/chatapp.png'
import DailyTasks from '../assets/DailyTasks.png'
import Jammer from '../assets/Jammer.png'
import Nbrereton from '../assets/Nbrereton.png'
import Kia from '../assets/kiatelluride.png'
import Blockchain from '../assets/blockchain.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f77f00]'>Work</p>
                <p className='py-6'>Check out some of my recent work.</p>
            </div>


{/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* grid item */}
                <div 
                style={{backgroundImage: `url(${Blockchain})`}}
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover FX */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider px-3'>
                        React JS Tailwindcss Crypto Landing Page
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://helpful-starburst-8dde6c.netlify.app/">
                                <button className=' hover:bg-[#cdcdcd] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jackkayak/blockchain_react_tailwind">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Code</button>
                            </a>
                        </div>
                    </div>
                    
                </div>

                {/* grid item */}
                <div 
                style={{backgroundImage: `url(${DailyTasks})`}}
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover FX */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Task App
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="https://darling-puffpuff-77cf59.netlify.app/">
                                <button className=' hover:bg-[#cdcdcd] text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/jackkayak/Task-Manager">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Code</button>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div 
                style={{backgroundImage: `url(${Jammer})`}}
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover FX */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider px-3'>
                        React JS w/ Spotify API App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://majestic-sprinkles-c3adfe.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Demo</button>
                            </a>
                            <a href="https://github.com/jackkayak/Jammer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Code</button>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div 
                style={{backgroundImage: `url(${Nbrereton})`}}
                className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover FX */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Webflow Internship Work
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://n-brereton-medical.webflow.io/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Demo</button>
                            </a>
                           
                        </div>
                    </div>
                    
                </div>
                <div 
                style={{backgroundImage: `url(${Chat})`}}
                className='shadow-lg shadow-[#040c16]  group container rounder-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover FX */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider px-3'>
                        React Tailwind Firebase Chat App
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href="https://github.com/jackkayak/portfolio-react">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Code</button>
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div 
                style={{backgroundImage: `url(${Kia})`}}
                className='shadow-lg shadow-[#040c16]  group container rounder-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover FX */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider px-3'>
                        React Tailwind Kia Clone
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://neon-souffle-c9394c.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Demo</button>
                            </a>
                            
                            <a href="https://github.com/jackkayak/telluride-react-tailwind">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#cdcdcd]'>Code</button>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
                    
                
            </div>
        </div>
    </div>
  )
}

export default Work