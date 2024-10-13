import { Icon } from '@iconify/react';
import React from 'react';
import Link from 'next/link';
import List from '../../List';
import ListStyle3 from '../../List/ListStyle3';
import ListStyle2 from '../../List/ListStyle2';
import Spacing from '../../Spacing';
import Image from 'next/image';

export default function DoctorDetailsSection({
  bgUrl,
  imgUrl,
  name,
  department,
  designation,
  description,
  contactInfo,
  contactInfoHeading,
  degrees,
  degreesHeading,
  experiences,
  experiencesHeading,
  awards,
  awardHeading,
  schedules,
  scheduleHeading,
}) {
  return (
    <div className="cs_doctor_details">
   
      <Spacing md="85" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cs_single_doctor overflow-hidden cs_radius_20">
              <Image src={imgUrl} alt="Doctor" className="w-100" height={736} width={664} />
              <h3 className="cs_white_color cs_accent_bg mb-0 text-center cs_semibold cs_fs_24">
                {department}
              </h3>
            </div>
            <Spacing md="50" lg="30" />
            <ListStyle2
              heading={contactInfoHeading}
              data={contactInfo}
            />
            <Spacing md="66" lg="15" />
            <ListStyle3
              heading={scheduleHeading}
             
              data={schedules}
            />
             <Spacing md="70" lg="15" />
            <List
              heading={awardHeading}
             
              data={awards}
            />
          </div>
          <div className="col-lg-6 offset-lg-1 position-relative">
            <Spacing md="55" />
            <h2 className="cs_fs_48 mb-0 cs_semibold">{name}</h2>
            <Spacing md="12" />
            <h3 className="cs_semibold cs_fs_24 mb-0">{designation}</h3>
            <Spacing md="32" />
            <p className="mb-0 cs_heading_color">{description}</p>
           
            <Spacing md="200" xl="150" lg="40" />
            <Spacing md="35" lg="0" />
            <List
              heading={degreesHeading}
            
              data={degrees}
            />
            <Spacing md="70" lg="15" />
            <List
              heading={experiencesHeading}
             
              data={experiences}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}
