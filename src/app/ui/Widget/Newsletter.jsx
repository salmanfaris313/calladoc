'use client'

import React from 'react';
import NewsletterForm from '../NewsletterForm';
import Image from 'next/image';

export default function Newsletter({ title, ImageUrl }) {
  return (
    <div className="cs_newsletter cs_style_1">
      <h2 className="cs_newsletter_title">{title}</h2>
      <div className='d-flex Licensed'>
            <Image src="/images/home_1/Dubai_Health_Authority_logo.png" width={170} height={112}></Image>
            <Image src="/images/home_1/DED-eServices-01.png" width={170} height={112}></Image>
        </div>
      
    </div>
  );
}
