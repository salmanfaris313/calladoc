import React from 'react';
import SideMenuWidget from '../Widget/SideMenuWidget';

const categoryData = [
  {
    title: 'Dashboard',
    url: '/adminpanel/dashboard',
    icon:"hugeicons:home-03"
  },
  {
    title: 'Enquiries',
    url: '/adminpanel/enquiries',
    icon:"hugeicons:mail-01"
  },
  {
    title: 'Add Blog',
    url: '/',
    icon:"hugeicons:add-circle"
  },
  {
    title: 'View Blog',
    url: '/',
    icon:"hugeicons:left-to-right-list-bullet"
  },
];



export default function Sidebar() {
  return (
    <div className="cs_sidebar col-md-2">
      <div className="cs_sidebar_item widget_categories">
        <SideMenuWidget logoSrc="/images/logo.svg"  title="Dashboard" data={categoryData} />
      </div>
      
    </div>
  );
}
