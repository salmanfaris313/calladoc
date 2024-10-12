import React from 'react'
import Card from '../../card/card'

function Dashboard() {

const CardData=[
  {
    title:"Enquiries",
    Count:"100"
  },
  {
    title:"Appoiments",
    Count:"100"
  },
  {
    title:"List Blog",
    Count:"100"
  },
  {
    title:"New",
    Count:"100"
  },
]

  return (
    <div className="col-md-10 p-0">
      <div className="bg-theme">
      <Card  data={CardData}  />
      </div>
     
    </div>
  )
}

export default Dashboard
