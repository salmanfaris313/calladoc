import Image from "next/image";
import React from "react";

export default function Careersapplydetails({
  id,
  title,
  desciption,
  whyworkwithus,
  apply,
  href,
  SubsecondTitle,
  subTitle,
  content,
}) {
  return (
    <div className="col-md-12" id={id}>
    <div className="cs_iconbox cs_style_13 p-3 cs_radius_25 ">
      <div className="cs_iconbox_info">
        <h2 className="cs_iconbox_title cs_fs_40">{title}</h2>
        <p className="cs_iconbox_subtitle">{desciption}</p>

        <h4 className="cs_iconbox_title cs_fs_18">{subTitle}</h4>
        <ul>
          {whyworkwithus.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <h4 className="cs_iconbox_title cs_fs_18">{SubsecondTitle}</h4>
        <p className="cs_iconbox_subtitle">{content}</p>
       
      </div>
    </div>
    </div>
  );
}
