import React from 'react'
import Careersapplydetails from '@/app/ui/IconBox/Careersapplydetails';
function Careers({data}) {
  return (
    
    <div className="container">
    <div
      className="cs_funfact_2_wrap cs_radius_30 cs_bg_filed row"
      
    >
      {data.map((item, index) => (
        <Careersapplydetails key={index} {...item} />
      ))}
    </div>
  </div>
  )
}

export default Careers
