import React from 'react'
import Section from '@/app/ui/Section';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import bannerImg from '../../../../public/images/contact/banner_img.png';
import IconBoxStyle13 from '@/app/ui/IconBox/IconBoxStyle13';
import Careers from '@/app/ui/Section/Careers/Careers';
import CareersApply from '@/app/ui/Section/Careers/CareersApply';
function careers() {
    
const careerdata = [
    {
      title: 'General Practitioner (GP)',
      location: 'Remote Type: Part-Time',
      headResponsibilities:'Responsibilities',
      Responsibilities:[
        'Conduct virtual consultations for general medical issues',
        'Provide ongoing care and management for chronic conditions',
       'Develop personalized treatment plans and follow-up care',
      ],
      headRequirements:'Requirements',
      Requirements: [
        'Medical degree and valid UAE medical license',
        ' Experience in telehealth preferred',
        'Strong communication and patient management skills',
      ],
      apply: 'Apply Now',
      href: '/careers/#Applynow',
    },
      {
        title: 'Clinical Psychologist',
        location: 'Remote Type: Part-Time',
        headResponsibilities:'Responsibilities',
        Responsibilities:[
          'Provide virtual consultations for mental health concerns, including anxiety, depression, and stress',
          'Develop and implement therapeutic interventions',
         'Offer support and guidance for mental well-being',
        ],
        headRequirements:'Requirements',
        Requirements: [
          'Degree in Clinical Psychology',
          ' Relevant certifications and experience in mental health care',
          'Empathetic and compassionate approach',
        ],
        apply: 'Apply Now',
        href: '/careers/#Applynow',
      },
      {
        title: 'Dietitian',
        location: 'Remote Type: Part-Time',
        headResponsibilities:'Responsibilities',
        Responsibilities:[
          'Provide personalized nutritional advice and meal planning',
          'Support clients with weight management and dietary needs',
         'Collaborate with other healthcare professionals for integrated care',
        ],
        headRequirements:'Requirements',
        Requirements: [
          ' Degree in Dietetics or Nutrition',
          ' Certification and experience in dietary counseling',
          'Ability to create customized nutrition plans',
        ],
        apply: 'Apply Now',
        href: '/careers/#Applynow',
      },
      {
        title: ' Business Development Manager',
        location: ' Dubai, UAE Type: Full-Time',
        headResponsibilities:'Responsibilities',
        Responsibilities:[
          ' Develop and execute strategies for business growth and expansion',
          ' Identify new opportunities and build partnerships',
         'Drive marketing and outreach efforts to increase service utilization',
        ],
        headRequirements:'Requirements',
        Requirements: [
          'Proven experience in business development, preferably in healthcare or telehealth',
          ' Strong analytical and strategic thinking skills',
          ' Excellent communication and negotiation abilities',
        ],
        apply: 'Apply Now',
        href: '/careers/#Applynow',
      },
  ];


const careersapply =[
    {
        id:"Applynow",
        title:"How to Apply",
        desciption:"To apply for any of the positions listed, please send your CV and a cover letter to career@CallAdoc.ae with the subject line corresponding to the job title you are applying for.",
        subTitle:"Why Work With Us?",
        whyworkwithus:['Innovative Environment: Join a leading telehealth provider at the forefront of healthcare innovation.',
            'Innovative Environment: Join a leading telehealth provider at the forefront of healthcare innovation.',
            'Career Growth: Access professional development and growth opportunities within a supportive team.',
            ' Impactful Work: Contribute to making healthcare more accessible and efficient for people in Dubai and beyond.'

        ],
        SubsecondTitle:"Join Us and Make a Difference!",
        content:"We are dedicated to building a diverse and inclusive team where everyone can thrive. We look forward to receiving your application and exploring how you can contribute to our mission."

    }
]

  return (
    <div>
    <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl={bannerImg}
        title="Careers"
        subTitle="At CALLADOC TELEHEALTH SERVICES LLC, we are committed to enhancing healthcare through innovative telehealth solutions. We are currently seeking talented professionals to join our team and contribute to our mission of providing accessible and high-quality medical care. Explore our current job openings and find out how you can be part of our dynamic team"
      />
       <Section topMd={65} bottomMd={50} bottomLg={50} bottomXl={50}>
        <Careers data={careerdata} />
      </Section>
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <CareersApply data={careersapply} />
      </Section>
    </div>
  )
}

export default careers
