import React from 'react'
import { AboutData } from '../assets/CommonData'

const About = () => {
  return (
    <div>
     <div className="">
      <div className="">
      <h1 className='text-xl md:text-4xl font-bold md:mb-10 mb-2 text-[#ffdb70]'>About Me</h1>
      
      <p className="text-sm md:text-md mb-3 xl:text-[15px] ">
      Hey , I'm <span className='text-[#ffdb70] text-md font-bold'>SADHASIVAM VM</span> , a frontend developer crafting captivating
            digital experiences. Proficient in HTML, CSS, and JavaScript, I
            specialize in turning designs into seamless, user-friendly
            interfaces. With a keen eye for detail and a passion for innovation,
            I thrive on optimizing performance and ensuring cross-browser
            compatibility. Beyond code, I value collaboration, <br />{" "}
            <span className=" px-2 rounded bg-[#00ED64] text-black mr-2">
              working seamlessly with teams to bring visions to life.
            </span>
             Let's create exceptional web experiences together!
            
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
