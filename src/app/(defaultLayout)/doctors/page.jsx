"use client"
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle4 from '@/app/ui/Section/BannerSection/BannerSectionStyle4';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import TeamSectionStyle2 from '@/app/ui/Section/TeamSection/TeamSectionStyle2';

import bannerImg from '../../../../public/images/contact/banner_img.png';


const teamData = [
  {
    imgUrl: '/images/doctors/VirginVinoliya.png',
    department: 'DIETICIAN',
    name: 'Ms. VIRGIN VINOLIYA',
    description:
      'Ms. Virgin Vinoliya is a Clinical Nutritionist with a profound commitment to transform life through the power of nutrition. A dedicated Clinical Dietitian with extensive experience across various domains, including hospital care, rehabilitation, weight management, and wellness promotion. ',
   
    category: 'DIETICIAN',
    href: '/doctors/doctor-details',
  },
];

export default function Doctors() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl={bannerImg}
        title="Doctors"
        subTitle="With access to the latest medical technologies and evidence-based practices, our doctors stay at the forefront of modern medicine. Their commitment to continuous learning allows them to bring innovative treatments and solutions to their patients."
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      
    </>
  );
}
