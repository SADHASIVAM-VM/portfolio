import React from 'react'
import { AboutData } from '../assets/CommonData'

const About = () => {
  return (
    <div>
     <div className="">
      <div className="">
      <h1 className='text-xl md:text-4xl font-bold md:mb-10 mb-2 text-[#ffdb70]'>About Me</h1>
      
      <p className="text-sm md:text-md mb-3 xl:text-[15px] ">
      Hey , I'm <span className='text-[#ffdb70] text-md font-bold'>SADHASIVAM VM</span> ,
      Highly motivated and self-taught web developer with a passion for building engaging and user-friendly web applications. Possesses strong skills in front-end development (HTML, CSS, JavaScript), back-end development (Express.js, MongoDB), and version control (Git). Eager to contribute to a dynamic team environment and continuously learn new technologies.
            
          </p>
      </div>

      <div className="mt-5">
        <h1 className='text-xl  font-bold mb-2 text-blue-400'>What I'm Doing</h1>
        <div className="grid gap-5 md:grid-cols-2">
          {
            AboutData.map((itms)=>(
              <div key={itms.id} className=" border  rounded-md text-sm items-center justify-center text-center bg-[#2b2b2c] p-5 md:p-10  hover:border-[#ffdb70]" >
                <div className="flex justify-center items-center my-3">
                <img src={itms.svg} alt="" className='w-24 '/>
                </div>
              
              <h4 className='text-xl mb-2'>{itms.title}</h4>
              <p>{itms.desc}</p>
            </div>
    
            ))
          }
      
    
        

        
       
        </div>
      </div>
     </div>
    </div>
  )
}

export default About
