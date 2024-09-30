
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import DepartmentSectionStyle3 from '@/app/ui/Section/DepartmentSection/DepartmentSectionStyle3';
import FaqSectionStyle4 from '@/app/ui/Section/FaqSection/FaqSectionStyle4';
import bannerImg from '../../../../public/images/departments/banner_img.png'
import faqImg from '../../../../public/images/home_4/faq_img.jpg';
const departmentData = [
  {

    title: 'General Medical Consultation',
    subTitle:
      'Receive medical advice for a wide range of health concerns, including acute illnesses, routine check-ups, and general health inquiries. Our doctors are available for virtual consultations to address your medical needs promptly and effectively.',
      listitems:['General medical consultations (General/ Family Medicine) ','Acute illness management','Preventive care and wellness checks-ups'],
      ImageUrl: '/images/departments/Primary-Care-Medical-Consultation.jpg',
      listnew:'',
  },
  {

    title: 'Chronic disease Management',
    subTitle:
      'Ongoing management and support for chronic conditions such as diabetes, hypertension, and asthma, helping you stay on top of your health.',
     
    listitems:['Ongoing care for conditions such as diabetes, hypertension, and asthma',
'Monitoring and adjusting treatment plans',
'Patient education and support',
'Internal Medicine/ Endocrinologist Experts Service.',
'Combined management with clinical Dietitian.'],
listnew:'',
ImageUrl: '/images/departments/Chronic -Care-Management.jpg',

  },
  {

    title: 'Prescription Management ',
    subTitle:
      'Refill prescription in every periodic timeframe without visiting the medical centre. ',
      listitems:['Any prescription that needs to be refilled every frequent ',
'Get advice before taking medical prescription refill.',
'Medication management and follow-up',
'Advice on medication adherence and side effects',
'Second opinion on medication undergoing.'
],
listnew:'',
ImageUrl: '/images/departments/Refill-Prescription_ Get Prescription.jpg',
  },
  {

    title: 'Specialist Referrals',
    subTitle:
      'Get your specialist referrals through If needed, we can refer you to specialists for further examination and treatment, ensuring a seamless transition in your care.',
      listitems:['Access to a network of medical specialists for advanced care',
'Referrals and coordination for specialized treatments',
'Follow-up care and management'
],
listnew:'',
ImageUrl: '/images/departments/Specialist-Referrals.jpg',
  },
  {

    title: 'Follow-up Care',
    subTitle:
      'Ongoing support through follow-up consultations to track your progress and adjust treatment plans as necessary.',
      listitems:['Regular follow-up consultations to monitor health progress',
'Adjustments to treatment plans as needed',
'Ongoing support and guidance'
],
listnew:'',
  ImageUrl: '/images/departments/Follow-up-Care.jpg',
  },
  {

    title: 'Nutrition Support ',
    subTitle:
      'Nutritional therapy in primary care includes a range of services designed to support patient health through personalized dietary intervention. These services can include',
      listitems:['Dietary assessment ',
'Personalized meal plans ',
'Weight management ',
'Chronic disease management ',
'Nutritional education ',
'Preventive care ',
'Pediatric and geriatric nutrition ',
'Sports nutrition',
'Renal nutrition ',
'Enteral/ Parenteral nutrition (Tube feeding)',

],
listnew:'All the above service are essential for promoting long term Wellness and preventing the escalation of chronic conditions through diet. ',
ImageUrl: '/images/departments/Clinical-Dietitian-Services.jpg',
  },
  {

    title: 'Mental Health Support',
    subTitle:
      'Access to qualified mental health professionals to help manage stress, anxiety, depression, and other mental health concerns.',
      listitems:['Consultations with mental health professionals',
'Support for anxiety, depression, stress, and other mental health issues',
'Counselling and therapeutic interventions'],
listnew:'',
ImageUrl: '/images/departments/Mental-Health_Psychologist-Consultations.jpg',
  },
 
];



const faqData = [
    {
      title: 'What is telehealth?',
      content:
        'Telehealth involves providing healthcare services remotely through digital platforms, enabling you to consult a healthcare professional via video, phone, or chat without needing to visit a clinic.',
    },
    {
      title: 'How do I book a telehealth consultation?',
      content:
        'You can book a telehealth consultation via the CallAdoc app or website by selecting the type of service and your preferred time slot.',
    },
  
    {
      title: 'What types of medical issues can be addressed in a telehealth consultation?',
      content:
        'Telehealth consultations are suitable for a variety of conditions, including:',
        listitemsfaq:['Common illnesses (cold, flu, infections)',
'Chronic disease management (diabetes, hypertension etc)',
'Lifestyle and wellness guidance (nutrition, weight loss)',
'Follow-up care',
'Prescription renewals',
]
    },
    {
      title: ' How long is the consultation?',
      content:
        'Consultations typically last 15 to 20 minutes, but this may vary depending on your needs.',
    },
    {
      title: ' Can I get a prescription through telehealth?',
      content:
        'Yes, if necessary, your doctor can provide an electronic prescription during your consultation, which you can use to purchase medication at a pharmacy.',
    },
    {
      title: ' Is telehealth secure and confidential? ',
      content:
        ' Yes, telehealth consultations follow strict confidentiality and data protection standards, ensuring that your medical information is kept private.',
    },
    {
      title: ' Will my insurance cover telehealth consultations? ',
      content:
        'Most insurance plans cover telehealth consultations, but it’s recommended to check with your insurance provider to confirm your coverage.',
    },
    {
      title: 'What do I need for a telehealth consultation? ',
      content:
        'All you need is a stable internet connection, a device with a camera and microphone (like a smartphone, tablet, or computer), and a quiet space for the consultation.',
    },
    {
        title: 'Can telehealth replace an in-person visit? ',
        content:
          'While telehealth can handle many medical concerns, certain cases may still require an in-person visit for physical examinations, tests, or procedures.',
      },
      {
        title: 'How do I follow up after a telehealth consultation? ',
        content:
          'You can schedule follow-up appointments through the CallAdoc platform, and your doctor will provide you with any necessary instructions after the consultation.',
      },
       
    
  ];

export default function Departments() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl={bannerImg}
        title="Primary Care Virtual Consultation"
        subTitle="Get expert medical consultation from qualified practitioners through video or audio call, available at your convenience."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section topMd={185} topLg={45} bottomLg={100} topXl={105}>
        <FaqSectionStyle4
          sectionTitle="Frequently Asked <br />Questions"
          data={faqData}
          faqImgUrl={faqImg}
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
    </>
  );
}
