"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DropDown from './DropDown';
import Spacing from '../Spacing';
import IconBoxStyle11 from '../IconBox/IconBoxStyle11';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import Image from 'next/image';

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${variant} ${isSticky ? 'cs_active_sticky' : ''
          }`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image src={logoSrc} alt="Logo" height={28} width={250} />
                </Link>
                <nav className="cs_nav">
                  <ul
                    className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'
                      }`}
                  >
                    <li>
                      <Link href="/">Home</Link>
        
                    </li>
                  
                    <li>
                      <Link href="/about">About US</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/">Departments</Link>
                      <DropDown>
                        <ul>
                        <li className="menu-item-has-children">
                      <Link href="/PrimaryCareVirtualConsultation">Primary Care Virtual Consultation</Link>
                      <DropDown>
                        <ul className='newlistdrop'>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Primary Care Medical Consultation</Link>
                          </li>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Chronic Care Management</Link>
                          </li>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Refill Prescription/ Get Prescription</Link>
                          </li>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Specialist Referrals</Link>
                          </li>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Follow-up Care</Link>
                          </li>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Clinical Dietitian Services</Link>
                          </li>
                          <li >
                          <Link href="/PrimaryCareVirtualConsultation">Mental Health/Psychologist Consultations</Link>
                          </li>
                         
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/LifestyleManagementServices"> Lifestyle Management Services</Link>
                      <DropDown>
                        <ul className='newlistdrop'>
                    
                          <li>
                          <Link href="/LifestyleManagementServices">Personalized Health Assessments </Link>
                          </li>
                          <li>
                          <Link href="/LifestyleManagementServices">Supports Comorbid conditions </Link>
                          </li>
                          <li>
                          <Link href="/LifestyleManagementServices">Disease Prevent </Link>
                          </li>
                          <li>
                          <Link href="/LifestyleManagementServices">Tracking Progress and Follow-Up: </Link>
                          </li>
                          <li>
                          <Link href="/LifestyleManagementServices">Stress Management </Link>
                          </li>
                          <li>
                          <Link href="/LifestyleManagementServices">Physical Activity Plans </Link>
                          </li>

                          <li>
                          <Link href="/LifestyleManagementServices">Sleep Hygiene</Link>
                          </li>
                          <li>
                          <Link href="/LifestyleManagementServices">Habit Formation and Behavioural Change </Link>
                          </li>
                         
                        </ul>
                      </DropDown>
                    </li>
                         
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link href="">Careers</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact US</Link>
                    </li>
                   
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs_menu_toggle cs_teggle_active'
                        : 'cs_menu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`cs_sidenav ${sideNav ? 'active' : ''}`}>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSideNav(!sideNav)}
        />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(!sideNav)}
          >
            <Image src="/images/icons/close.svg" alt="Close" height={28} width={28} />
          </button>
          <div className="cs_logo_box">
            <Image src={logoSrc} alt="Logo" height={28} width={173} />
            <div className="cs_height_15" />
            <h3 className="cs_fs_24 cs_semibold mb-0">
            For general questions or information about our services, please contact us at:
            </h3>
          </div>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          <Spacing md="35" lg="50" xl="35" />
          <IconBoxStyle11
            title="Phone"
            subTitle="+971 4 123 4567"
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Email"
            subTitle="info@CallAdoc.ae"
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Location"
            subTitle="CALLADOC TELEHEALTH SERVICES LLC
902, NGI HOUSE, Port Saeed, Dubai, UAE
"
            iconSrc="/images/contact/icon_3.svg"
          />
         
          <Spacing md="70" lg="50" xl="50" />
          <hr />
          <Spacing md="70" lg="50" xl="50" />
          <SocialWidget />
        </div>
      </div>
      
    </>
  );
}
