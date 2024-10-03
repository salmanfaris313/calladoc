import React from 'react';
import IconBoxStyle11 from '../../IconBox/IconBoxStyle11';
import Spacing from '../../Spacing';

export default function ContactInfoSection({ sectionTitle }) {
  return (
    <div className="container">
     
      <Spacing md="70" lg="50" />
      <h4>General Inquiries</h4>
      <p>For general questions or information about our services, please contact us at</p>

      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle="+971 5072 46289"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="hello@calladoc.ae"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="CALLADOC TELEHEALTH SERVICES LLC 
902, NGI HOUSE, Port Saeed, Dubai, UAE
"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      <h4>Support</h4>
      <p>For assistance with our telehealth services or technical support, please email us at</p>
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle=" +971 5072 46289"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="hello@calladoc.ae"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
       
      </div>
      <Spacing md="35" />
      <h4>Career Opportunities</h4>
      <p>To apply for a position or for any inquiries related to careers, please send your CV and cover letter to</p>
      <div className="row g-4 g-xl-3 g-xxl-5">
       
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="hello@calladoc.ae"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
       
      </div>
      <Spacing md="35" />
      <h4>Business Partnerships</h4>
      <p>For information about business partnerships or collaborations, please reach out to</p>
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle=" +971 5072 46289"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="hello@calladoc.ae"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
      
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724445.795527476!2d48.9273301985472!3d24.27134765016985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1727432864917!5m2!1sen!2sin"
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}
