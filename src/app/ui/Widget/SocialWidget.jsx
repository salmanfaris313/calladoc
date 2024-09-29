import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';


export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>Follow Us</h2>
      <div className="cs_social_links">
        <Link href="https://www.facebook.com/profile.php?id=61565427012289">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link href="https://www.youtube.com/@CallADocHealthcare">
          <Icon icon="fa-brands:youtube" />
        </Link>
        <Link href="https://www.linkedin.com/company/calladochealthcare/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link>
        <Link href="https://www.tiktok.com/@calladochealthcare?lang=en">
          <Icon icon="fa-brands:tiktok" />
        </Link>
        <Link href="https://www.instagram.com/calladochealthcare/">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
