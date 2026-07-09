"use client";

import { Card } from "@canonical/react-components";
import { Users, Target, History } from "lucide-react";
import styles from "./about.module.scss";

export default function AboutPage() {
  return (
    <div className={`container-custom ${styles.aboutContainer}`}>
      <div className={styles.headerArea}>
        <h1 className={styles.title}>
          About Ubuntu India LoCo
        </h1>
        <p className={styles.subtitle}>
          A passionate group of developers, designers, and tech enthusiasts dedicated to fostering collaboration and innovation.
        </p>
      </div>

      <div className={styles.aboutGrid}>
        <Card
          className={styles.aboutCard}
          title={
            <div className={styles.cardHeaderContent}>
              <div className={styles.iconWrapper}>
                <History className="h-8 w-8 text-primary" />
              </div>
              <span className={styles.cardTitle}>Our History</span>
            </div>
          }
        >
          <p className={styles.cardContentText}>
            Founded in 2009, our community started as a small team on Launchpad. After many twists and turns, we've been reshaped time and again — and now we're rebooting with a fresh beginning, marked by a brand-new UbuCon.
          </p>
        </Card>

        <Card
          className={styles.aboutCard}
          title={
            <div className={styles.cardHeaderContent}>
              <div className={styles.iconWrapper}>
                <Target className="h-8 w-8 text-primary" />
              </div>
              <span className={styles.cardTitle}>Our Mission</span>
            </div>
          }
        >
          <p className={styles.cardContentText}>
            Our mission is to spread awareness and adoption of Ubuntu and FOSS across India. We aim to provide a platform for users to get help, share knowledge, collaborate and encourage contributions from India to the global Ubuntu project.
          </p>
        </Card>

        <Card
          className={styles.aboutCard}
          title={
            <div className={styles.cardHeaderContent}>
              <div className={styles.iconWrapper}>
                <Users className="h-8 w-8 text-primary" />
              </div>
              <span className={styles.cardTitle}>Our Community</span>
            </div>
          }
        >
          <p className={styles.cardContentText}>
            We are a diverse group of individuals from various backgrounds, united by our passion for technology. We believe in the power of open source and strive to contribute positively to the tech landscape through our collective efforts.
          </p>
        </Card>
      </div>
    </div>
  );
}
