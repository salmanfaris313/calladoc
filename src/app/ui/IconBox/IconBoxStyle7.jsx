import React from 'react';
import parser from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

export default function IconBoxStyle6({ title, subTitle,listitems,ImageUrl}) {
  return (
    <div className="cs_post cs_style_1">
        <div className="cs_post_thumb cs_view_mouse">
        <Image src={ImageUrl} alt="Icon" height={379} width={526}/>
      </div>
      <div className='cs_post_info'>
      <h2 className="cs_iconbox_title cs_fs_32">{parser(title)}</h2>
      <p className="cs_iconbox_subtitle m-0">{parser(subTitle)}</p>
      <ul className='listitem'>
        {listitems?.map((items)=>{
          return(
            <li>{items}</li>
          )
        })}
        
      </ul>
    </div>
    </div>
  );
}
