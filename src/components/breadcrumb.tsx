"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { events } from '@/lib/events';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  // Don't show breadcrumbs on the homepage
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    let label: React.ReactNode = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    // Special handling for event names
    if (pathSegments[0] === 'events' && index === 1) {
      const event = events.find(e => e.id === segment);
      if (event) {
        label = event.name;
      }
    }

    const isLast = index === pathSegments.length - 1;

    return (
      <li key={href} className="p-breadcrumbs__item">
        {isLast ? (
          <span aria-current="page">{label}</span>
        ) : (
          <Link href={href}>{label}</Link>
        )}
      </li>
    );
  });

  return (
    <nav className="p-breadcrumbs" aria-label="Breadcrumb">
      <ul className="p-breadcrumbs__items">
        <li className="p-breadcrumbs__item">
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
