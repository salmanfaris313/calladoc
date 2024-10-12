import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
export default function SideMenuWidget({ logoSrc, data }) {
  return (
    <>
       <Image src={logoSrc} alt="Logo" height={28} width={250} />
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <Icon icon={item.icon} /> <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
