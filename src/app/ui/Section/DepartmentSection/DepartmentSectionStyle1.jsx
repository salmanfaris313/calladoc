import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyleNew from '../../IconBox/IconBoxStyleNew';

export default function DepartmentSectionStyle({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <div className="row cs_row_gap_50">
        <div className="col-md-6 col-xl-12 text-center">
          <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
          <Spacing md="72" lg="50" />
        </div>
        {data.map((item, index) => (
          <div className="col-md-6 col-xl-4" key={index}>
            <IconBoxStyleNew {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
