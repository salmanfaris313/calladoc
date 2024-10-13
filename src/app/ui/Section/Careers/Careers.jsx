import React from 'react'
import IconBoxStyle13 from '@/app/ui/IconBox/IconBoxStyle13';
function Careers({data}) {
  return (
    
    <div className="container">
    <div
      className="cs_funfact_2_wrap cs_radius_30 cs_bg_filed row"
      
    >
      {data.map((item, index) => (
        <IconBoxStyle13 key={index} {...item} />
      ))}
    </div>
  </div>
  )
}

export default Careers
