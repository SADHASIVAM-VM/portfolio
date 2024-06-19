import React from 'react'
import github from '../../assets/svg/7595663_github_programming_logo_coding_icon.svg'
import '../../Styles/portDis.css'

const PortDis = ({img, link, title}) => {
  return (

    <div>
      <div className=" ">
      <div className="imgs overflow-hidden hover:cursor-pointer relative rounded-xl ">
        <img src={img} alt="" className='hover:scale-[1.2] transition-all '/>
       
        <a href={link} className='absolute z-10 justify-center gitLink bg-black p-3 transition-all top-[40%] right-[45%] rounded-full  animate-pulse'><img src={github} className='w-5'/></a>
        </div>
        <h1 className='md:text-md  text-center capitalize my-2'>{title}</h1>
      </div>
     
      
    </div>
  )
}

export default PortDis
