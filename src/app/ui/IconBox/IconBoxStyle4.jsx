import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IconBoxStyle4({ title, subTitle, ImageUrl, href }) {
  return (
   
      <div className="cardnew">
      <Image src={ImageUrl} alt="Icon" height={312} width={415}/>
    <div className="card-content">
      <h2>
      {title}
      </h2>
      <p>
      {subTitle} </p>
      
      <div className="cs_hero_info_col">
              <Link href={href}  className="cs_btn cs_style_1">
                <span> View Details </span>
                <i>
                  <Image
                    src="/images/icons/arrow_white.svg"
                    alt="Icon"
                    height={11}
                    width={16}
                  />
                  <Image
                    src="/images/icons/arrow_white.svg"
                    alt="Icon"
                    height={11}
                    width={16}
                  />
                </i>
              </Link>
            </div>
    </div>
  </div>
  
  );
}
