import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IconBoxStyle4({ title, subTitle, ImageUrl, href }) {
  return (
    <div className="cs_post cs_style_1">
      <div className="cs_post_thumb cs_view_mouse">
        <Image src={ImageUrl} alt="Icon" height={379} width={526}/>
      </div>
      <div className='cs_post_info'>
      <h2 className="cs_iconbox_title cs_fs_32">{title}</h2>
      <p className="cs_iconbox_subtitle m-0">{subTitle}</p>
      </div>
    </div>
  );
}
