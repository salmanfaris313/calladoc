
'use client'
import Dashboard from '@/app/ui/Section/Dashboard/Dashboardpage'
import Sidebar from '@/app/ui/Sidebar'
import React from 'react'

function Dashbaord() {
  return (
    <div class="row">
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default Dashbaord
