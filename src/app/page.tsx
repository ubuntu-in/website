"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Info, Heart } from "lucide-react";
import { Button, Card } from "@canonical/react-components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className="container-custom">
          <div className={styles.heroRow}>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>
                  Welcome to the Ubuntu India LoCo
                </h1>
                <p className={styles.heroDescription}>
                  Your place for connecting, learning, and growing with the Ubuntu community in Bharat and beyond. Discover events, get involved, and support our mission.
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <Button element={Link} href="/events" appearance="brand" className="font-semibold">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" style={{ verticalAlign: 'middle' }} />
                </Button>
                <Button element={Link} href="/about" className="font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
            <div>
              <div className="w-full max-w-md">
                <Card
                  className={styles.nextEventCard}
                  title={<span className="text-primary">Next Up: UbuCon India 2025</span>}
                >
                  <p className="text-muted-foreground mb-4">Join us for our biggest event of the year, featuring talks from industry leaders, hands-on workshops, and networking opportunities.</p>
                  <div className="flex items-center text-sm font-medium text-foreground">
                    <Calendar className="mr-2 h-4 w-4 text-primary" style={{ verticalAlign: 'middle' }} />
                    <span>November 15-16, 2025</span>
                  </div>
                  <Button element={Link} href="/events/ubucon-india-2025" appearance="brand" style={{ marginTop: '1rem', width: '100%' }}>
                    View Event Details
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container-custom">
          <div className={styles.featuresGrid}>
            <Card
              className={styles.featureCard}
              title={
                <div className={styles.cardHeaderFlex}>
                  <span>Upcoming Events</span>
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              }
            >
              <p className="text-sm text-muted-foreground mb-4">Check out our schedule of meetups, workshops, and conferences.</p>
              <Button element={Link} href="/events" appearance="link" style={{ padding: 0, height: 'auto' }}>
                See all events <ArrowRight className="ml-1 h-4 w-4 inline-block" style={{ verticalAlign: 'middle' }} />
              </Button>
            </Card>

            <Card
              className={styles.featureCard}
              title={
                <div className={styles.cardHeaderFlex}>
                  <span>About Us</span>
                  <Info className="w-6 h-6 text-primary" />
                </div>
              }
            >
              <p className="text-sm text-muted-foreground mb-4">Learn about our mission, our values, and the people behind the community.</p>
              <Button element={Link} href="/about" appearance="link" style={{ padding: 0, height: 'auto' }}>
                Discover our story <ArrowRight className="ml-1 h-4 w-4 inline-block" style={{ verticalAlign: 'middle' }} />
              </Button>
            </Card>

            <Card
              className={styles.featureCard}
              title={
                <div className={styles.cardHeaderFlex}>
                  <span>Support Us</span>
                  <Heart className="w-6 h-6 text-primary" />
                </div>
              }
            >
              <p className="text-sm text-muted-foreground mb-4">Help us grow. Your contribution makes a huge difference.</p>
              <Button element={Link} href="/donate" appearance="link" style={{ padding: 0, height: 'auto' }}>
                Ways to donate <ArrowRight className="ml-1 h-4 w-4 inline-block" style={{ verticalAlign: 'middle' }} />
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
