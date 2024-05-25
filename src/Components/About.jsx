import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='sm:pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-xl mt-20'>I am a passionate Full Stack Developer currently in my third year of pursuing a Bachelor of Engineering in Computer Science and Design. With a solid foundation in both front-end and back-end technologies, I thrive on building dynamic and responsive web applications. 
        I am dedicated to continuous learning and staying updated with the latest industry trends to deliver high-quality solutions.</p>
        <br />
    </div>
    </div>
  )
}

export default About