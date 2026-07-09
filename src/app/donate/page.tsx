"use client";

import { Card, Button } from "@canonical/react-components";
import { FaHeart, FaIndianRupeeSign, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import styles from "./donate.module.scss";

const donationOptions = [
  {
    icon: FaHeart,
    title: "Volunteer",
    description: "The most valuable contribution is your time and skill. Help us organize events, manage projects, or mentor newcomers. Your involvement is what makes our community thrive.",
    buttonText: "Get Involved",
    href: "/contact",
  },
  {
    icon: FaIndianRupeeSign,
    title: "Donate in INR",
    description: "For our supporters in India, we accept online donations. Your financial support helps us cover operational costs like servers, event venues, and resources for our members.",
    buttonText: "Coming Soon...",
    href: "#",
  },
  {
    icon: FaGithub,
    title: "GitHub Sponsors",
    description: "If you're an international supporter or prefer using GitHub, you can sponsor our work directly. This is a great way to support our open-source projects and initiatives.",
    buttonText: "Coming Soon...",
    href: "#",
  },
];

export default function DonationPage() {
  return (
    <div className={styles.donateContainer}>
      <div className={styles.headerArea}>
        <div className="container-custom">
          <h1 className={styles.title}>
            Support Our Community
          </h1>
          <p className={styles.subtitle}>
            Your support enables us to continue our work, host events, and build a better platform for everyone.
          </p>
        </div>
      </div>

      <div className="container-custom">
        <div className={styles.donateGrid}>
          {donationOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Card
                key={option.title}
                className={styles.donateCard}
                title={
                  <div className={styles.cardHeaderContent}>
                    <div className={styles.iconWrapper}>
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <span className={styles.cardTitle}>{option.title}</span>
                  </div>
                }
              >
                <div className={styles.cardBody}>
                  <p className={styles.description}>{option.description}</p>
                  <Button
                    element={Link}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    appearance="brand"
                    style={{ width: '100%' }}
                  >
                    {option.buttonText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
