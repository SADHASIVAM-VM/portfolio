import React from 'react'
import PortDis from './SubComponents/PortDis'
import { Portfolios } from '../assets/CommonData'
const Portfolio = () => {
  return (
    <div>
        <h1 className='text-2xl md:text-4xl font-bold md:mb-10 text-[#ffdb70]'>Portfolio</h1>
  <div className="grid md:grid-cols-3 gap-5">
  {
     Portfolios.map((itms)=>(
        <PortDis key={itms.id} link={itms.link} img={itms.img} title={itms.title}/>
     ))
    
   }
  </div>
    </div>
  )
}

export default Portfolio
