import { Icon } from '@iconify/react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamStyle2({
  imgUrl,
  department,
  name,
  description,
  href,
}) {
  return (
    <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
      <div className="cs_member_img">
        <Link href={href} className="d-block">
          <Image src={imgUrl} alt="Doctor" height={487} width={487} />
        </Link>
        <div className="cs_label cs_white_color cs_accent_bg">{department}</div>
      </div>
      <div className="cs_team_meta cs_white_bg">
        <div>
          <h3 className="cs_member_name cs_fs_32">
            <Link href={href}>{name}</Link>
          </h3>
         
          <p className="cs_member_description">{description}</p>
        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
}
