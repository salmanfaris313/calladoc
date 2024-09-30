import React from "react";
import Section from "@/app/ui/Section";
import BannerSectionStyle5 from "@/app/ui/Section/BannerSection/BannerSectionStyle5";
import BannerSectionStyle6 from "@/app/ui/Section/BannerSection/BannerSectionStyle6";
import DepartmentSectionStyle3 from "@/app/ui/Section/DepartmentSection/DepartmentSectionStyle3";
import FaqSectionStyle4 from "@/app/ui/Section/FaqSection/FaqSectionStyle4";
import bannerImg from "../../../../public/images/departments/banner_img_2.png";

import faqImg from "../../../../public/images/home_4/faq_img.jpg";

const departmentData = [
  {
    title: "Personalized Health Plans",
    subTitle:
      "CallAdoc develop a tailored wellness programs and offer individualized health plans focusing on physical health, mental health, work-life balance and job’s physical and mental demands. Patient receive both nutritional guidance and psychological support through virtual consultations assessment.  Dieticians focus on tailor meal plans based on individual nutritional status, health goals and medical conditions and psychologists address mental well being, behavioural changes and emotional eating patterns.",

    ImageUrl: "/images/lifestyle/Personalized-Health-Assessments.jpg",
    listnew:'',
  },

  {
    title: "Weight Management Programs ",
    subTitle:
      "CallAdoc platform leverage digital platforms to provide personalized, remote support for individuals seeking to achieve and maintain a healthy weight. These programs integrate professional guidance, behavioral strategies, and nutritional planning, all delivered through virtual consultations and online resources. ",
    
    listnew:'',
    ImageUrl: "/images/lifestyle/Supports-Comorbid-conditions.jpg",
  },

  {
    title: "Preventive Nutrition Care",
    subTitle:
      "chronic disease management in nutrition can support a wide range of diseases where dietary interventions play a key role in managing symptoms, preventing complications, and improving overall health. Here are the most common disease that can be included in nutrition- focused chronic disease management",
    ImageUrl: "/images/lifestyle/Disease-Prevent.jpg",
    listitems: [
     'Diabetes [Type 1, Type 2, Pre-Diabetes, Gestational Diabetes, Juvenile Diabetes]',
'Cardiovascular Diseases',
'Renal Disease',
'Digestive &Gastrointestinal disorders [Bloating, Heartburn, Constipation, Food intolerance and allergies, Inflammatory Bowel Disease (Crohn’s disease & Ulcerative colitis), Celiac disease, Gastroesophageal Reflux Disease (GERD)]',
'Obesity and Metabolic syndrome',
'Cancer [Chemotherapy/ Radiation/ Appetite issue/ Tube feeding]',
'Liver diseases [NAFLD-Non- alcoholic fatty liver diseases, Cirrhosis, Hepatitis]',
'Respiratory Diseases – COPD, Asthma',
'Osteoporosis and Bone Health ',
'Rheumatoid arthritis and Other Autoimmune disorders.',
'Thyroid Disorders (Hyperthyroidism, Hypothyroidism)',
'Mental health disorders (Anxiety, Eating disorders, depression)',
'Alzheimer’s disease and cognitive decline ',
'PCOS/ PCOS (Poly cystic ovarian syndrome)',
    ],
    listnew:'',
  },
  {
    title: "Tracking Progress and Follow-Up:",
    subTitle:
      "Patient have access to continuous support through CallAdoc with regular check-ins to update their meal plans as needed based on changes in their health status, such as symptoms, lab results or treatment adjustments and keep you motivated towards achieving your lifestyle goals.",
    ImageUrl: "/images/lifestyle/Tracking-Progress-and-Follow-Up.jpg",
    listnew:'',
  },
  {
    title: "Mental Health and Stress Management:",
    subTitle:
      "CallAdoc offers virtual counselling sessions to manage job stress, anxiety, or burnout, particularly for those in high-stress positions. Managing stress is vital for overall health. We provide stress reduction techniques, including mindfulness, relaxation exercises, and coping strategies to help you better handle life's pressures.",
    ImageUrl: "/images/lifestyle/Stress-Management.jpg",
    listnew:'',
  },
  {
    title: "Health education and Workshop",
    subTitle:
      "Our experts will design a physical activity regimen based on your fitness level, preferences, and health goals. Whether youre aiming to increase stamina, lose weight, or simply stay active, we have a plan for you.",
    ImageUrl: "/images/lifestyle/Physical-Activity-Plans.jpg",
    listnew:'',
  },
  
];

const faqData = [
  {
    title: "What are lifestyle management services?",
    content:
      "Lifestyle management services help improve your overall physical, mental, and emotional well-being by offering personalized guidance on diet, exercise, mental health, and stress management.",
  },
  {
    title: " What do dietitian services involve?",
    content:
      " Dietician services includes nutritional assessment, personalized nutrition plans, nutritional counselling, nutritional education, management of specific conditions conditions like diabetes, hypertension, obesity, and more. ",
  },
  {
    title: " How do I know if I need a dietitian?",
    content:
      "If you are struggling to manage health conditions, nutritional deficit or weight management, food allergies or intolerances, digestive issues, pregnancy and postpartum nutrition or want to improve overall nutrition for a healthy lifestyle, our dietician can guide you.  ",
  },
  {
    title: "Can a dietitian help with weight loss or gain? ",
    content:
      " Yes, a dietitian can create tailored meal plans and provide guidance to help you achieve your weight management goals in a healthy and sustainable way. ",
  },
  {
    title: "Will I get a customized meal plan? ",
    content:
      "Yes, our dietitian will create a meal plan based on your personal goals, health condition, and food cultures and food preferences.  ",
  },
  {
    title: "What do psychologist services offer? ",
    content:
      " Psychologist services provide mental health support, including stress management, coping strategies, therapy for anxiety, depression, and other mental health concerns. ",
  },
  {
    title: "How can a psychologist help me manage stress? ",
    content:
      " A psychologist can help you identify the sources of your stress, teach you relaxation techniques, and develop coping strategies to manage stress in a healthier way. ",
  },
  {
    title:
      "Do I need a psychologist if I am not diagnosed with a mental health condition? ",
    content:
      "You don’t need a diagnosis to benefit from seeing a psychologist. You can seek help for day-to-day stress, personal development, or to enhance your emotional well-being.   ",
  },
  {
    title: "Are consultations confidential? ",
    content:
      " Yes, all psychologist consultations are completely confidential and follow strict data protection guidelines. ",
  },
  {
    title: " What can I expect from fitness coaching services?",
    content:
      " Fitness coaching includes personalized workout plans, fitness assessments, and regular check-ins to help you achieve your fitness goals, whether its building strength, endurance, or overall wellness. ",
  },
  {
    title: "Can a fitness coach design a plan for beginners? ",
    content:
      "Yes, fitness coaches can tailor plans to any level, from beginner to advanced, ensuring you progress safely and effectively.  ",
  },

  {
    title: " How often will I need to meet with a fitness coach?",
    content:
      "It depends on your goals and needs. Typically, clients meet with fitness coaches once a week or biweekly, but this can be adjusted based on your preferences.",
  },
  {
    title: " Can fitness coaching be done remotely?",
    content:
      " Yes, fitness coaching can be conducted virtually, allowing you to follow your personalized plan from home with regular online check-ins. ",
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
