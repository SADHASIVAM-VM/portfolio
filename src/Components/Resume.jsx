import React from 'react'
import educationIcon from "../assets/images/university.png"
import CapIcon from "../assets/svg/graduation-cap.svg"
import marker from "../assets/svg/5548705_direction_gps_location_map_navigation_icon.svg"
import { ResumeData } from '../assets/CommonData'


const Resume = () => {
  return (
    <div>
         <div className="">
         <h1 className='text-2xl md:text-4xl font-bold md:mb-10 text-[#ffdb70]'>Resume</h1>
     
         </div>
        <div className="resume">
           <h1 className='text-xl font-bold mt-3 text-blue-400 flex  items-center gap-2'>Education <span><img src={CapIcon} alt="" className='w-6 '/></span></h1>
           <div className="ml-4 last:border-none">
           {
            ResumeData.map((itms)=>(
              <div key={itms.id} className="my-5">
                <h5 className='text-xl flex items-center gap-3'>{itms.university}  :<span className='font-bold text-[#00ED64] text-sm flex items-center'>{itms.Percentage}</span></h5>
                <h4 className='text-[#ffdb70] font-bold text-sm my-2'>{itms.year}</h4>
                <p className='text-sm md:text-md '> {itms.detail}
                </p>
                <div className="flex items-center mt-2 gap-1">
                  <img src={marker} alt="" className='w-6 '/><p className='text-sm text-gray-300'>{itms.location}</p>
                </div>
               
            </div>
            ))
           }
           </div>

            
            </div>
            <hr className='my-3'/>
        <div className="skills">
        <h1 className='text-xl font-bold mt-3 text-blue-400 '>Skills</h1>
        <ul className='ml-5 font-[Orbitron]'>
          <li>Web Development</li>
          <li>MERN Stack</li>
          <li>Python</li>
          <li>Problem Sloving </li>


        </ul>
        </div>
        {/*download button  */}

            <div className="my-5">
            <button class="cta flex items-center ">
  <span>Download</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
            </div>
    </div>
  )
}

export default Resume

{/* <div className="st1" >
<p className="bg-green-500  text-white inline-block px-3 rounded">
  Higher Secondary
</p>

<p className="res_p ">
  I completed my secondary education at Sacred Heart Hr. Sec.
  School, graduating with a Secondary School Leaving Certificate
  (SSLC) in 2019. I achieved a commendable score of{" "}
  <span className="bg-purple-400 text-white rounded-md px-2">
    72.4%
  </span>
  , showcasing my dedication and commitment to academic
  excellence. <br /> <br />
  Subsequently, I pursued higher education and successfully
  completed my Higher Secondary Education (HSE) in 2021, again
  at Sacred Heart Hr. Sec. School. In the Higher Secondary
  Certificate (HSC) examinations, I attained an impressive score
  of{" "}
  <span className="bg-purple-400 text-white rounded-md px-2">
    82%
  </span>
  , demonstrating my continued academic growth. Notably, all my
  education was conducted in Tamil Medium, showcasing my
  proficiency in the language.
</p>
</div>
<div className="st2">
<p className="bg-green-500  text-white inline-block px-3 rounded my-3">
  Bachelor In Computer Engineering
</p>
<p className="res_p">
  I am currently enrolled at Vinayaka Mission's Kirupananda
  Variyar Engineering College, pursuing a Bachelor of
  Engineering (BE) in Computer Science and Engineering (CSE). As
  a third-year student, I have actively engaged in my
  coursework, gaining a solid foundation in computer science
  principles and technologies.
  <br /> <br />
  Beyond the academic curriculum, I have demonstrated my
  practical skills by developing multiple websites. Utilizing
  HTML, CSS, and JavaScript, I have created various dynamic and
  visually appealing websites. Additionally, I have expanded my
  proficiency by developing websites using React, showcasing my
  ability to work with modern web development frameworks.
  <br /> <br />
  These hands-on projects not only reinforce my theoretical
  knowledge but also highlight my passion for applying what I've
  learned in a practical setting. I look forward to further
  opportunities to enhance my skills and contribute to the field
  of computer science.
</p>
</div> */}