"use client"
import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';
import Image from 'next/image';
import Link from 'next/link';
const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Primary Care Virtual Consultation', href: '/departments' },
  { title: 'Lifestyle Management Services', href: '/doctors' },
];
const menuDataTwo = [
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'FAQs', href: '/' },
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/' },
];

export default function Footer() {
  return (

  
    <footer className="cs_footer cs_style_1 cs_heading_color">
        <Link className='circle-ripple' href="https://wa.me/+971507246289" >
        <Image  src="/images/contact/whatsapp.svg" height={33}
                      width={33} ></Image>
        </Link>
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: 'url(/images/footer_logo_bg.svg)' }}
        >
          <Image
            src="/images/logo.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
            height={49} 
            width={251}
          />
         
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="cs_footer_item">
              
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
           
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="We are licensed as follows"
                  subTitle=""
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2024 Call A Doc . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
