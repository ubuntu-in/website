"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Ticket } from "lucide-react";
import { Button, Card, Chip } from "@canonical/react-components";
import { events } from "@/lib/events";
import { Tabs } from "@canonical/react-components";
import styles from "./events.module.scss";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);

  const EventCard = ({ event }: { event: (typeof events)[0] }) => (
    <Card
      className={styles.eventCard}
      title={
        <div className={styles.cardHeaderArea}>
          <h3 className={styles.cardTitle}>{event.name}</h3>
          <div className={styles.cardDate}>
            <Calendar className="mr-2 h-4 w-4" style={{ verticalAlign: 'middle' }} />
            <span>
              {event.date} {event.isTentative && <span className="text-muted-foreground/80">(Tentative)</span>}
            </span>
          </div>
        </div>
      }
    >
      <div className={styles.cardBody}>
        <div className={styles.imageWrapper}>
          <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            className={styles.cardImage}
            data-ai-hint={event.imageHint}
          />
          <div className={styles.imageOverlay} />
          {event.isPast && (
            <div className={styles.badgePosition}>
              <Chip value="Past Event" isReadOnly />
            </div>
          )}
        </div>
        
        <div className={styles.cardLocation}>
          <MapPin className="mr-2 h-4 w-4" style={{ verticalAlign: 'middle' }} />
          <span>{event.location}</span>
        </div>
        
        <p className={styles.description}>{event.description}</p>
        
        <div className={styles.cardFooter}>
          <Button element={Link} href={`/events/${event.id}`} appearance="brand" style={{ flex: 1, textAlign: 'center' }}>
            View Details <ArrowRight className="ml-2 h-4 w-4 inline-block" style={{ verticalAlign: 'middle' }} />
          </Button>

          {event.ticketUrl && (
            <Button
              element={Link}
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1, textAlign: 'center' }}
            >
              <Ticket className="mr-2 h-4 w-4 inline-block" style={{ verticalAlign: 'middle' }} /> Get Tickets
            </Button>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <div className={`container-custom ${styles.eventsContainer}`}>
      <div className={styles.headerArea}>
        <h1 className={styles.title}>
          Our Events
        </h1>
        <p className={styles.subtitle}>
          Join us for meetups, workshops, and conferences.
        </p>
      </div>

      <div className={styles.tabsContainer}>
        <Tabs
          links={[
            {
              label: "Upcoming",
              active: activeTab === "upcoming",
              onClick: (e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                setActiveTab("upcoming");
              },
            } as any,
            {
              label: "Past",
              active: activeTab === "past",
              onClick: (e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                setActiveTab("past");
              },
            } as any,
          ]}
        />
      </div>

      {activeTab === "upcoming" ? (
        upcomingEvents.length > 0 ? (
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-10">No upcoming events scheduled. Check back soon!</p>
        )
      ) : pastEvents.length > 0 ? (
        <div className={styles.eventsGrid}>
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-10">No past events to show.</p>
      )}
    </div>
  );
}
