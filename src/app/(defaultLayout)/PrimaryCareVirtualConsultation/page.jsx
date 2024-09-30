
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import DepartmentSectionStyle3 from '@/app/ui/Section/DepartmentSection/DepartmentSectionStyle3';
import FaqSectionStyle4 from '@/app/ui/Section/FaqSection/FaqSectionStyle4';
import bannerImg from '../../../../public/images/departments/banner_img.png'
import faqImg from '../../../../public/images/home_4/faq_img.jpg';
const departmentData = [
  {

    title: 'Primary Care Medical Consultation',
    subTitle:
      'Receive medical advice for a wide range of health concerns, including acute illnesses, routine check-ups, and general health inquiries. Our doctors are available for virtual consultations to address your medical needs promptly and effectively.',
      listitems:['General medical consultations (General/ Family Medicine) ','Acute illness management'],
      ImageUrl: '/images/departments/Primary-Care-Medical-Consultation.jpg',
  },
  {

    title: 'Chronic Care Management',
    subTitle:
      'Ongoing management and support for chronic conditions such as diabetes, hypertension, and asthma, helping you stay on top of your health.',
      subTitle:
      'Our experts helps to manage and reverse metabolic disorders such as ',
    listitems:['Ongoing care for conditions such as diabetes, hypertension, and asthma',
'Monitoring and adjusting treatment plans',
'Patient education and support',
'Internal Medicine/ Endocrinologist Experts Service.',
'Combined management with clinical Dietitian.'],
ImageUrl: '/images/departments/Chronic -Care-Management.jpg',

  },
  {

    title: 'Refill Prescription/ Get Prescription ',
    subTitle:
      'Refill prescription in every periodic timeframe without visiting the medical centre. ',
      listitems:['Any prescription that needs to be refilled every frequent ',
'Get advice before taking medical prescription refill.',
'Medication management and follow-up',
'Advice on medication adherence and side effects',
'Second opinion on medication undergoing.'
],
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
  ImageUrl: '/images/departments/Follow-up-Care.jpg',
  },
  {

    title: 'Clinical Dietitian Services: ',
    subTitle:
      'Tailored nutritional advice from certified dietitians to help you to improve overall nutrition, achieve weight management goals, address specific health conditions like acute and chronic and manage specific dietary needs.',
      listitems:['Personalized nutrition plans and dietary advice',
'Weight management and dietary modifications',
'Support for specific health conditions and dietary needs',
'Disease management combined medical team. '
],
ImageUrl: '/images/departments/Clinical-Dietitian-Services.jpg',
  },
  {

    title: 'Mental Health/Psychologist Consultations',
    subTitle:
      'Access to qualified mental health professionals to help manage stress, anxiety, depression, and other mental health concerns.',
      listitems:['Consultations with mental health professionals',
'Support for anxiety, depression, stress, and other mental health issues',
'Counselling and therapeutic interventions'],
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
      title: 'How do I book a lifestyle management consultation? ',
      content:
        'You can book a telehealth consultation via the CallAdoc app or website by selecting the type of service and your preferred time slot.',
    },
  
    {
      title: 'What types of medical issues can be addressed in a telehealth consultation?',
      content:
        'Telehealth consultations are suitable for a variety of conditions, including:',
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
