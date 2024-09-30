"use client"
import Section from "@/app/ui/Section";

import DepartmentSectionStyle from "@/app/ui/Section/DepartmentSection/DepartmentSectionStyle1";
import BannerSectionStyle3 from "@/app/ui/Section/BannerSection/BannerSectionStyle3";

import FeaturesSectionStyle2 from "@/app/ui/Section/FeaturesSection/FeaturesSectionStyle2";

import FaqSectionStyle4 from '@/app/ui/Section/FaqSection/FaqSectionStyle4';
import bannerImg from '../../../../public/images/about/banner_img.jpg'
import whyChooseUsImg from '../../../../public//images/about/why_choose_us.jpeg'
import faqImg from '../../../../public/images/home_4/faq_img.jpg';
const departmentData = [
  {
    title: 'Patient-Centered Care',
    subTitle:
      'We prioritize the needs, comfort, and well-being of our patients in every interaction.',
    ImageUrl: '/images/about/Patient-Centered-Care.jpg',
   
  },
  {
    title: 'Accessibility',
    subTitle:
      'We are committed to providing healthcare that is easily accessible to all, regardless of location or time.',
      ImageUrl: '/images/about/Accessibility.jpg',

  },
  {
    title: 'Affordability',
    subTitle:
      'We aim to deliver high-quality care at reasonable rates, ensuring that healthcare remains affordable.',
      ImageUrl: '/images/about/Affordability.jpg',
   
  },
  {
    title: 'Innovation',
    subTitle:
      'We embrace technology and continuously seek innovative ways to enhance the patient experience and healthcare delivery.',
      ImageUrl: '/images/about/Innovation.jpg',

  },
  {
    title: 'Privacy & Safety',
    subTitle:
      'We uphold the highest standards of privacy and safety in all our consultations, ensuring the confidentiality and security of patient information. ',
      ImageUrl: '/images/about/PrivacySafety.jpg',
   
  },
  {
    title: 'Excellence',
    subTitle:
      ' We strive for excellence in every service we provide, ensuring top-quality medical advice and care. ',
      ImageUrl: '/images/about/banner_img.jpg',

  },
  {
    title: 'Integrity',
    subTitle:
      '  We operate with honesty, transparency, and ethical practices in all our interactions with patients and partners.',
      ImageUrl: '/images/about/Integrity.jpg',
 
  },
];



const faqData = [
  {
    title: ' Are lifestyle management services covered by insurance?',
    content:
      'Some insurance plans may cover certain aspects of lifestyle management services, such as dietitian or psychologist consultations. Please check with your insurance provider for details.',
  },
  {
    title: 'How do I book a lifestyle management consultation? ',
    content:
      'You can book a consultation through the CallADoc app or website, selecting the specific service you need and choosing a convenient time for your appointment.',
  },

  {
    title: 'How long does a consultation last? ',
    content:
      'Consultations typically last between 30 minutes to 1 hour, depending on the service and your needs.',
  },
  {
    title: ' Can these services be combined?',
    content:
      'Yes, we offer integrated lifestyle management plans that combine diet, mental health, and fitness coaching for a holistic approach to wellness.',
  },
  {
    title: 'How can lifestyle management services help someone with a busy schedule maintain a healthy balance between work and personal life? ',
    content:
      ' Lifestyle management services are tailored to your individual schedule, ensuring flexibility. For busy individuals, we focus on integrating small, manageable changes into daily routines, such as quick workout plans, mindfulness techniques during short breaks, and efficient meal prep ideas. The goal is to make these adjustments seamless without adding more pressure to an already packed schedule.',
  },
  {
    title: ' How can lifestyle management services help someone with a busy schedule maintain a healthy balance between work and personal life? ',
    content:
      ' Lifestyle management services are tailored to your individual schedule, ensuring flexibility. For busy individuals, we focus on integrating small, manageable changes into daily routines, such as quick workout plans, mindfulness techniques during short breaks, and efficient meal prep ideas. The goal is to make these adjustments seamless without adding more pressure to an already packed schedule.',
  },
  {
    title: 'How does tracking progress in lifestyle management improve long-term success for individuals? ',
    content:
      'Tracking progress is key to staying motivated and adjusting plans when necessary. By regularly reviewing your improvements—whether it s in fitness, stress levels, or diet—you re more likely to stay committed to your goals. Tracking helps identify what works best for you and highlights areas where changes are still needed, allowing for a more adaptive and responsive approach to your health journey.',
  },
  {
    title: 'Can lifestyle management services support individuals with chronic health conditions, and if so, how? ',
    content:
      'Yes, lifestyle management is particularly beneficial for individuals with chronic conditions. We focus on making lifestyle adjustments that complement medical treatment, such as creating specialized activity plans, stress management techniques, and dietary changes to support condition management. This holistic approach helps individuals not only manage symptoms but also improve their overall quality of life, often reducing the severity of the condition over time.',
  },
 
  
];

// export const metadata = {
//   title: "About"
// }

export default function About() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={bannerImg}
        title="About US"
        subTitle="Get fast and convenient access to expert medical advice with our virtual consultation and lifestyle management services. Skip the waiting queue and enjoy high-quality care at reasonable rates, all from the comfort of your home."
      />
       <Section topMd={200} topLg={100} topXl={110}></Section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
    <div class="cs_iconbox cs_style_2 text-center">
       <h2 class="cs_iconbox_title cs_fs_32">Vision</h2>
        <p class="cs_iconbox_subtitle m-0">CallAdoc vision is to be a seamless, one-touch accessible, efficient and affordable primary healthcare provider and systematic environment to work. </p>
        
    
        </div>
          </div>
          <div className="col-md-6">
          <div class="cs_iconbox cs_style_2 text-center">
       <h2 class="cs_iconbox_title cs_fs_32">Mission</h2>
        <p class="cs_iconbox_subtitle m-0">Research, Train and Deliver advanced CARE through a wide range of digitalized platforms.</p>
        
    </div>
            </div>
        </div>

      </div>
      <Section topMd={200} topLg={100} topXl={110}>
        <DepartmentSectionStyle
          sectionTitle="OurValues"
         
          data={departmentData}
        />
      </Section>

    
      <Section topMd={185} topLg={150} bottomLg={100} topXl={105}>
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
