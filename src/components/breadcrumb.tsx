"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
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
      <React.Fragment key={href}>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            <Link
              href={href}
              className={`ml-4 text-sm font-medium ${isLast ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {label}
            </Link>
          </div>
        </li>
      </React.Fragment>
    );
  });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <Home className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {breadcrumbs}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
