"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Navigation } from "@canonical/react-components";
import type { NavItem, NavLink } from "@canonical/react-components";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export function Header() {
  const pathname = usePathname();

  const items: NavItem[] = navLinks.map((link) => ({
    label: link.label,
    url: link.href,
    isSelected: pathname === link.href,
  }));

  const logo = (
    <Link href="/" className="p-navigation__link" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <Image
        src="/logos/ubuntu-in-logo.png"
        alt="Ubuntu India Logo"
        width={32}
        height={32}
        className="rounded-md"
      />
      <span className="font-bold text-foreground" style={{ fontSize: '1.2rem' }}>
        Ubuntu India
      </span>
    </Link>
  );

  const generateLink = (item: NavLink) => {
    return (
      <Link href={item.url || "#"} className={item.className} onClick={item.onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {item.label}
      </Link>
    );
  };

  return (
    <Navigation
      logo={logo}
      items={items}
      generateLink={generateLink}
    />
  );
}
