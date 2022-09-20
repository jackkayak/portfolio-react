import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/88b6d72a-77eb-43e1-ac39-3d7a2abb90b0" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f77f00] text-gray-300'>Contact</p>
                <p className='py-6 text-gray-300'>Submit the form below or send me an email: jacktkay6@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' ></textarea>
            <button className='text-white border-2 hover:bg-[#f77f00] hover:border-[#f77f00] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact