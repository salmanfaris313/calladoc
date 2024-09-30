'use client';
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../ui/Section';
import FeaturesSection from '../ui/Section/FeaturesSection';
import AboutSectionStyle3 from '@/app/ui/Section/AboutSection/AboutSectionStyle3';
import DepartmentSectionStyle2 from "@/app/ui/Section/DepartmentSection/DepartmentSectionStyle2";
// Large Images for blur placeholder
import heroImage from '../../../public/images/home_1/hero_img.png';

import aboutImg from '../../../public/images/home_2/about.jpeg'




const featureListData = [
  {
    iconSrc: '/images/home_1/Convenience.svg',
    title: 'Convenience',
    subTitle:
      'With our virtual consultation services, you can access expert medical advice from the comfort of your home, eliminating the need to wait in long queues or travel to clinics. ',
  },
  {
    iconSrc: '/images/home_1/AffordableCare.svg',
    title: 'Affordable Care',
    subTitle:
      'We provide high-quality healthcare at reasonable rates, ensuring that everyone has access to the medical attention they need.',
  },
  {
    iconSrc: '/images/home_1/Availability.svg',
    title: '24/7 Availability',
    subTitle: `Our telehealth services are available anytime, allowing you to consult a doctor at your convenience, whether you're a resident or a visitor in Dubai.`,
  },
  {
    iconSrc: '/images/home_1/PrivacySafety.svg',
    title: 'Privacy & Safety',
    subTitle:
      'We follow strict standards to protect your privacy and ensure the safety of your personal health information in all our consultations.',
  },
  {
    iconSrc: '/images/home_1/ExpertTeam.svg',
    title: 'Expert Team',
    subTitle:
      'Our highly trained, experienced Doctors, and wellness care team (Liscenced Dietician and Psychologist) are dedicated to delivering personalized, compassionate care, addressing your concerns with professionalism and attention.',
  },
  {
    iconSrc: '/images/home_1/SeamlessExperience.svg',
    title: 'Seamless Experience',
    subTitle:
      'From booking your consultation to receiving advice, we make the process simple and hassle-free, ensuring you receive the care you need quickly.',
  },
  {
    iconSrc: '/images/home_1/QualityCare.svg',
    title: '	Quality Care',
    subTitle:
      'Connect with experienced and licensed medical professionals who provide high-quality care tailored to your needs.',
  },
  {
    iconSrc: '/images/home_1/PrivacyandSecurity.svg',
    title: 'Privacy and Security',
    subTitle:
      'Our platform ensures that your personal health information is protected with the highest standards of security and confidentiality.',
  },
  {
    iconSrc: '/images/home_1/HolisticApproach.svg',
    title: 'Holistic Approach: ',
    subTitle:
      'We focus on both physical and mental well-being, ensuring a comprehensive approach to your health.',
  },
  {
    iconSrc: '/images/home_1/PersonalizedPlans.svg',
    title: 'Personalized Plans',
    subTitle:
      'Every plan is customized to suit your lifestyle, ensuring achievable and realistic goals.',
  },
];

const departmentData = [
  {
    title: 'PRIMARY CARE VIRTUAL CONSULTATION',
    subTitle:
      'Doctor on Live Call',
      ImageUrl: '/images/home_1/livevideo.png',
    href: '/PrimaryCareVirtualConsultation',
  },
  {
    title: 'LIFESTYLE MANAGEMENT SERVICES',
    subTitle:
      'Dietician and Psychologist on Call. ',
      ImageUrl: '/images/home_1/lifestyle.png',
    href: '/LifestyleManagementServices',
  },
];



export default function Home() {
  return (
    <>
      <Hero
        title="Primary Care Just One Touch Away"
        subTitle="Call Our Doctor for a Virtual Consultation </br> No Waiting, Easy Access, and Affordable Rates!"
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl={heroImage}
        infoList={[
          {
            title: 'Contact us',
            subTitle: '+971 4 123 4567',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Mail',
            subTitle: 'hello@calladoc.ae',
            iconUrl: '/images/contact/icon_2.svg',
          },
          {
            title: 'Whatsapp',
            subTitle: '+971 4 123 4567',
            iconUrl: '/images/contact/whatsapp.svg',
          },
        ]}
      
      />
 <Section bottomMd={190} bottomLg={65} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          subTitle="Our aim is to break away from the traditional concept of primary healthcare by offering virtual consultations that are convenient, affordable, and high-quality with the team of health practitioners (Doctors, Dieticians, Psychologist etc).  CallAdoc will be a trusted health partner for individuals in the UAE, by providing acute care, chronic disease management, preventive care, and lifestyle guidance. Our services are designed for both UAE residents and visitors, ensuring seamless care at anytime, anywhere virtually."
          imgUrl={aboutImg}
        />
      </Section>
      <Section topMd={100} topLg={50} topXl={60}>
        <DepartmentSectionStyle2
          sectionTitle="OUR FOCUS"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Why Choose Us" data={featureListData} />
      </Section>
     
    
     
    </>
  );
}
