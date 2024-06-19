import React from 'react'
import { SocialMedia } from '../assets/CommonData'

const Contact = () => {
  return (
    <div className=''>
      <div className="">
        <h1 className='text-xl md:text-4xl font-bold md:mb-10 text-[#ffdb70]'>Contact</h1>
        <div className="">

          {/* Social Links */}
          <div className="border hover:bg-black p-10 mt-2 rounded-md ">
            <h1 className='md:text-xl font-bold text-center  '>Get in touch</h1>
            <ul className='flex justify-center gap-5 my-3 '>
              {
                SocialMedia.map((itm)=> (
                  <a key={itm.id} href={itm.link}>
                    <li className='w-10 md:w-14 h-10  rounded-full flex items-center'>
                      <img src={itm.icon} alt="" className={`${itm.id == 3?'w-7 md:w-10':' '} hover:scale-[1.1] transition-all`}/>
                    </li></a>
                ))
              }
            
              
              
            </ul>
          </div>

          {/* Contact Form */}
          <div className="my-2">
            <h2 className='my-3 md:text-xl font-bold '>Contact Form</h2>
            <form action="" onSubmit={(e)=> e.preventDefault()} >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <input type="text" className='border p-2 rounded-md px-5 focus:outline-none focus:border-[#ffdb70]' placeholder='Full name'/>
                <input type="mail" className='border p-2 rounded-md px-5 focus:outline-none focus:border-[#ffdb70]' placeholder="E-mail"/>
              </div>
              <textarea name="" id="" className='border p-2 rounded-md px-5 h-32 w-full focus:outline-none focus:border-[#ffdb70]'placeholder="Your Messages" ></textarea>

               <button className='w-full md:w-52 p-2 border rounded-md shadow-md hover:shadow-[#2f2f2c] my-5 text-[#ffdb70]'>Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
