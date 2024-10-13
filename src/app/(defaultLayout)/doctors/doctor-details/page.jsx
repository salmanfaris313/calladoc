"use client"
import React from 'react';
import Section from '@/app/ui/Section';
import DoctorDetailsSection from '@/app/ui/Section/DoctorDetailsSection';
import doctorImg from '../../../../../public/images/doctors/VirginVinoliya.png';
import Spacing from '@/app/ui/Spacing';


export default function DoctorDetails() {
  return (
    <>
      <Spacing md="66" lg="100" />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <DoctorDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl={doctorImg}
          name="VIRGIN VINOLIYA"
          department="DIETICIAN "
          designation="DIETICIAN "
          description="Ms. Virgin Vinoliya is a Clinical Nutritionist with a profound commitment to transform life through the power of nutrition. A dedicated Clinical Dietitian with extensive experience across various domains, including hospital care, rehabilitation, weight management, and wellness promotion. Proven expertise in providing individualized nutritional care, conducting wellness talks, and implementing evidence-based dietary interventions to enhance patient outcomes. Passionate about improving health through practical, sustainable dietary modifications and lifestyle management. Ms. Virgin Vinoliya believes in a patient-centered, evidence-based approach to care. Her goal towards profession is to support people to improve their health by providing expert nutrition and dietary advice in a challenging way. Ms. Virgin Vinoliya actively engaged in corporate health talks to promote wellness and provide nutrition education to employees, contributing to a healthier workplace environment."
         
          contactInfo={[
          
            {
        
              title: 'A Comparison of the Nutritional Status of Diabetic and Non-Diabetic Hemodialysis Patients”, International Journal of Science and Research (IJSR), Volume 11 Issue 3, March 2022, pp. 686-689, ',
              subtitle: 'https://www.ijsr.net/get_abstract.php?paper_id=SR22312121141',
            },
          ]}
          contactInfoHeading="Publications "
          schedules={[
            { 
              title: 'Bachelor of Science – Nutrition and Dietetics (3 years)', 
             
            },
            { 
             
              title: 'Master of Science - Clinical Nutritionist (2 years)', 
        
            },
            { 
      
              title: 'Registered Dietician Training (6 months) ', 
            },
          ]}
          scheduleHeading="Education & Training "
          degrees={[
            {
              title: 'Nutrition in Critical Illness',
            },
            {
              title:
                'Diabetes Management ',
            },
            {
              title: 'Thyroid Management',
            },
            {
              title: 'Polycystic Ovary Syndrome (PCOS)/PCOD',
            },
            {
              title: 'Gastrointestinal Health',
            },
            {
              title: 'Women’s Health: Fertility/ Pregnancy/ Breastfeeding',
            },
            {
              title: '	Weight loss/ Weight gain ',
            },
            {
              title: 'Renal Nutrition',
            },
           
          ]}
          degreesHeading="Specialty Interests"
          experiences={[
            {
              title:
                'DHA (Dubai) Licensed Clinical Nutritionist & Dietician ',
            },
            {
              title:
                'Licensed Dietician from Indian Dietetic Association (IDA)',
            },
            {
              title: `Active member at ASPEN (American Society for Parenteral and Enteral Nutrition) & IAPEN (Indian Society for Parenteral and Enteral Nutrition )`,
            },
           
          ]}
          experiencesHeading="Professional Affliations & License "
          awards={[
            { title: 'P.C. Kurian Meritorious Award' },
           
          ]}
          awardHeading="Awards"
        />
      </Section>
      
    </>
  );
}
