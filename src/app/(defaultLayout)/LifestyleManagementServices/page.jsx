
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle6 from '@/app/ui/Section/BannerSection/BannerSectionStyle6';
import DepartmentSectionStyle3 from '@/app/ui/Section/DepartmentSection/DepartmentSectionStyle3';
import FaqSectionStyle4 from '@/app/ui/Section/FaqSection/FaqSectionStyle4';
import bannerImg from '../../../../public/images/departments/banner_img_2.png'

import faqImg from '../../../../public/images/home_4/faq_img.jpg';

const departmentData = [
  {

    title: 'Personalized Health Assessments:',
    subTitle:
      'We begin by understanding comprehensive evaluations of your current health status, lifestyle habits, and health concerns. Our specialists provide detailed assessments to determine areas for improvement and create a tailored plan just for you.',
  
   ImageUrl: '/images/blog/lifestyledemo.jpg',
  },
 
  {

    title: 'Supports Comorbid conditions: ',
    subTitle:
      'Our experts helps to manage and reverse metabolic disorders such as ',
    listitems:['Diabetes- Type-1 diabetes/ Type-2 diabetes/ Juvenile diabetes/ Gestational diabetes',
'Hypertension',
'Elevated Cholesterol-Alcoholic fatty liver/ Non-alcoholic fatty liver',
'Thyroid (Hyperthyroidism/ Hypothyroidism/ Thyroiditis)',
'PCOD/ PCOS/ Hormonal imbalances '],
ImageUrl: '/images/blog/lifestyledemo.jpg',
  },
  
  {

    title: 'Disease Prevent ',
    subTitle:
      'Our experts take a detailed nutritional assessment to know the nutritional status to provide a medical nutrition therapy  for a chronic cases such as',
      ImageUrl: '/images/blog/lifestyledemo.jpg',
      listitems:['Liver disorders and diseases- Obesity / High triglycerides/ Cholesterol/ Alcoholic and Non-Alcoholic Fatty liver / Liver cirrhosis.',
'Renal disorders and diseases- Renal/ kidney stones/ Acute/ Chronic kidney disease / End stage renal disease/ Pre- Dialysis/ Dialysis/ Renal transplant',
'Cardiac disease',
'Digestive and Gastro-intestinal disorders and disease- Bloating / Heart burn/ Gastro oesophageal reflux disorders)/ Irritable bowel syndrome (Constipation / Diarrhoea)/ Food allergies and Intolerances (Lactose intolerance) / Gallstones, Cholecystitis and cholangitis/ Rectal problems (Anal fissures/ Haemorrhoids)/ Small intestinal bacterial overgrowth/ Celiac disease (Gluten intolerances )/ Chrons disease / Ulcerative colitis',
'Cancer- Chemotherapy/ Radiation/ Appetite issue/ Tube feeding',
'High uric acid- Gout/ Arthritis ',
'Enteral and parenteral nutritional care',
'Children nutrition ',
'Gym nutrition '
],
  },
  {

    title: 'Tracking Progress and Follow-Up:',
    subTitle:
      'We provide ongoing support with regular check-ins to track your progress, adjust plans as needed, and keep you motivated towards achieving your lifestyle goals.',
      ImageUrl: '/images/blog/lifestyledemo.jpg',
   
  },
  {

    title: 'Stress Management',
    subTitle:
      'Managing stress is vital for overall health. We provide stress reduction techniques, including mindfulness, relaxation exercises, and coping strategies to help you better handle lifes pressures.',
      ImageUrl: '/images/blog/lifestyledemo.jpg',
    
  },
  {

    title: 'Physical Activity Plans ',
    subTitle:
      'Our experts will design a physical activity regimen based on your fitness level, preferences, and health goals. Whether youre aiming to increase stamina, lose weight, or simply stay active, we have a plan for you.',
      ImageUrl: '/images/blog/lifestyledemo.jpg',

  },
  {

    title: 'Sleep Hygiene',
    subTitle:
      'Quality sleep is crucial for physical and mental recovery. We offer advice on improving sleep patterns and creating a restful environment to ensure better sleep quality and duration.',
      ImageUrl: '/images/blog/lifestyledemo.jpg',

  },
  {

    title: 'Habit Formation and Behavioural Change',
    subTitle:
      'Lasting changes come from building healthy habits. We help you break unproductive routines and develop positive, sustainable behaviours to improve your well-being over time.',
      ImageUrl: '/images/blog/lifestyledemo.jpg',
     
  },
];



const faqData = [
    {
      title: 'What are lifestyle management services?',
      content:
        'Lifestyle management services help improve your overall physical, mental, and emotional well-being by offering personalized guidance on diet, exercise, mental health, and stress management.',
    },
    {
      title: ' What do dietitian services involve?',
      content:
        ' Dietician services includes nutritional assessment, personalized nutrition plans, nutritional counselling, nutritional education, management of specific conditions conditions like diabetes, hypertension, obesity, and more. ',
    },
    {
      title: ' How do I know if I need a dietitian?',
      content:
        'If you are struggling to manage health conditions, nutritional deficit or weight management, food allergies or intolerances, digestive issues, pregnancy and postpartum nutrition or want to improve overall nutrition for a healthy lifestyle, our dietician can guide you.  ',
    },
    {
      title: 'Can a dietitian help with weight loss or gain? ',
      content:
        ' Yes, a dietitian can create tailored meal plans and provide guidance to help you achieve your weight management goals in a healthy and sustainable way. ',
    },
    {
      title: 'Will I get a customized meal plan? ',
      content:
        'Yes, our dietitian will create a meal plan based on your personal goals, health condition, and food cultures and food preferences.  ',
    },
    {
      title: 'What do psychologist services offer? ',
      content:
        ' Psychologist services provide mental health support, including stress management, coping strategies, therapy for anxiety, depression, and other mental health concerns. ',
    },
    {
      title: 'How can a psychologist help me manage stress? ',
      content:
        ' A psychologist can help you identify the sources of your stress, teach you relaxation techniques, and develop coping strategies to manage stress in a healthier way. ',
    },
    {
      title: 'Do I need a psychologist if I am not diagnosed with a mental health condition? ',
      content:
        'You don’t need a diagnosis to benefit from seeing a psychologist. You can seek help for day-to-day stress, personal development, or to enhance your emotional well-being.   ',
    },
    {
      title: 'Are consultations confidential? ',
      content:
        ' Yes, all psychologist consultations are completely confidential and follow strict data protection guidelines. ',
    },
    {
      title: ' What can I expect from fitness coaching services?',
      content:
        ' Fitness coaching includes personalized workout plans, fitness assessments, and regular check-ins to help you achieve your fitness goals, whether its building strength, endurance, or overall wellness. ',
    },
    {
      title: 'Can a fitness coach design a plan for beginners? ',
      content:
        'Yes, fitness coaches can tailor plans to any level, from beginner to advanced, ensuring you progress safely and effectively.  ',
    },
    
    {
      title: ' How often will I need to meet with a fitness coach?',
      content:
        'It depends on your goals and needs. Typically, clients meet with fitness coaches once a week or biweekly, but this can be adjusted based on your preferences.'
    },  
    {
      title: ' Can fitness coaching be done remotely?',
      content:
        ' Yes, fitness coaching can be conducted virtually, allowing you to follow your personalized plan from home with regular online check-ins. ',
    },
    
  ];


export default function LifestyleManagementServices() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl={bannerImg}
        title="Lifestyle Management Services"
        subTitle="Our approach to lifestyle management is holistic, focusing on every aspect of your life that impacts your health. With our expert guidance, you can take small but impactful steps toward a healthier, more fulfilling life. Whether you're looking to improve your fitness, manage stress, or make better choices in your daily routine, we're here to support you."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section topMd={185} topLg={45} bottomLg={100} topXl={105}>
        <FaqSectionStyle4
          sectionTitle="Lifestyle Management Services - FAQ"
          data={faqData}
          faqImgUrl={faqImg}
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
    </>
  );
}
