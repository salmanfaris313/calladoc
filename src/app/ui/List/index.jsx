import Image from 'next/image';
import React from 'react';

export default function List({ heading, iconUrl, data }) {
  return (
    <div className="cs_list cs_style_1">
      <h2 className="cs_list_title cs_medium cs_fs_24">
        
        {heading}
      </h2>
      <ul className='p-0'>
        {data?.map((item, index) => (
          <li key={index}>
            {item.title && (
              <p className="cs_medium cs_heading_color mb-0">{item.title}</p>
            )}

            {item.subTitle && <p className="mb-0">{item.subTitle}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
