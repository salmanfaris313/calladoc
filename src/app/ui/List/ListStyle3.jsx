import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

export default function ListStyle3({ heading, title, data }) {
  return (
    <div className="cs_list cs_style_1">
      <h2 className="cs_list_title cs_medium cs_fs_24">
       
        {heading}
      </h2>
      <ul className="cs_mp0 cs_heading_color cs_radius_20 cs_white_bg cs_medium p-0">
        {data?.map((item, index) => (
          <li key={index} >
            {item.title}
          
          </li>
        ))}
      </ul>
    </div>
  );
}
