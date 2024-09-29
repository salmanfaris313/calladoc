import React from 'react';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import ContactForm from '@/app/ui/ContactForm';
import Section from '@/app/ui/Section';
import ContactInfoSection from '@/app/ui/Section/ContactInfoSection';

import bannerImg from '../../../../public/images/contact/banner_img.png';

export default function Contact() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl={bannerImg}
        title="Contact Us"
        subTitle="We value your feedback and inquiries. At CALLADOC TELEHEALTH SERVICES LLC, we are here to assist you with any questions or concerns you may have. Whether you need support with our services, have a general inquiry, or want to get in touch with our team, you can reach us through the following methods:"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Section
        topMd={200}
        topLg={150}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section>
    </>
  );
}
