import { Icon } from '@iconify/react';
import React from 'react';

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        CALLADOC TELEHEALTH SERVICES LLC 902<br></br> NGI HOUSE, Port Saeed<br></br> Dubai, UAE
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        +971 5072 46289
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        hello@calladoc.ae
      </li>
    </ul>
  );
}
