import Image from "next/image";
import React from "react";

export default function IconBoxStyle13({
  title,
  location,
  Responsibilities,
  apply,
  href,
  Requirements,
  headResponsibilities,
  headRequirements,
}) {
  return (
    <div className="col-md-6">
    <div className="cs_iconbox cs_style_13 p-3 cs_radius_25 ">
      <div className="cs_iconbox_info">
        <h2 className="cs_iconbox_title cs_fs_40">{title}</h2>
        <p className="cs_iconbox_subtitle">{location}</p>

        <h4 className="cs_iconbox_title cs_fs_18">{headResponsibilities}</h4>
        <ul>
          {Responsibilities.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <h4 className="cs_iconbox_title cs_fs_18">{headRequirements}</h4>
        <ul>
          {Requirements.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <a href={href} className="cs_btn cs_style_1 btn btn-primary">
          <span>{apply}</span>
          <i>
            <Image
              src="/images/icons/arrow_white.svg"
              alt="Icon"
              height={11}
              width={15}
            />
            <Image
              src="/images/icons/arrow_white.svg"
              alt="Icon"
              height={11}
              width={15}
            />
          </i>
        </a>
      </div>
    </div>
    </div>
  );
}
