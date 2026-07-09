"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  Ticket,
  FileText,
  Handshake,
  Code,
  Users,
  Building,
  Tag,
  Clock,
} from "lucide-react";
import { events } from "@/lib/events";
import { Button, Card, Chip } from "@canonical/react-components";
import Breadcrumb from "@/components/breadcrumb";
import styles from "./event-detail.module.scss";

export default function IndividualEventPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
  const { id } = React.use(params);
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className={`container-custom ${styles.detailContainer}`}>
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb />
      </div>
      
      <div className={styles.heroBanner}>
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          className={styles.bannerImage}
          data-ai-hint={event.imageHint}
        />
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerTitleWrapper}>
          <h1 className={styles.bannerTitle}>
            {event.name}
          </h1>
        </div>
      </div>

      <div className={styles.contentLayout}>
        <div className={styles.leftColumn}>
          <Card
            title={
              <span className={styles.cardHeaderTitle}>About this Event</span>
            }
          >
            <p className={styles.cardBodyText}>
              {event.longDescription}
            </p>
          </Card>

          {event.tracks && (
            <Card
              title={
                <span className={styles.cardHeaderTitle}>
                  <Tag className="mr-3 h-6 w-6 text-primary" style={{ verticalAlign: 'middle' }} />
                  Event Tracks
                </span>
              }
            >
              <div>
                {event.tracks.map((track) => (
                  <div key={track.name} className={styles.trackItem}>
                    <h3 className={styles.trackName}>{track.name}</h3>
                    <p className={styles.cardBodyText}>{track.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        <div className={styles.rightColumn}>
          <Card
            title={
              <span className={styles.cardHeaderTitle}>Event Details</span>
            }
          >
            <div>
              <div className={styles.detailRow}>
                <Calendar className="text-primary h-5 w-5" style={{ flexShrink: 0 }} />
                <span>
                  {event.date} {event.isTentative && <span className="text-muted-foreground/80">(Tentative)</span>}
                </span>
              </div>
              <div className={styles.detailRow}>
                <MapPin className="text-primary h-5 w-5" style={{ flexShrink: 0 }} />
                <span>{event.location}</span>
              </div>
              <div className={styles.detailRow}>
                <Ticket className="text-primary h-5 w-5" style={{ flexShrink: 0 }} />
                <span>{event.ticketPrice}</span>
              </div>
              
              <div className={styles.cardDividerContent}>
                <Button
                  element={Link}
                  href={`/events/${event.id}/speakers`}
                  appearance="base"
                  style={{ width: '100%', justifyContent: 'flex-start' }}
                >
                  <Users className="mr-2 h-5 w-5 inline-block" style={{ verticalAlign: 'middle' }} /> View Speakers
                </Button>
              </div>
            </div>
          </Card>

          {event.talkFormats && (
            <Card
              title={
                <span className={styles.cardHeaderTitle}>
                  <Clock className="mr-3 h-6 w-6 text-primary" style={{ verticalAlign: 'middle' }} />
                  Talk Formats
                </span>
              }
            >
              <ul className={styles.formatsList}>
                {event.talkFormats.map((format) => (
                  <li key={format.id}>
                    {format.name} ({format.length})
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <div className={styles.buttonStack}>
            {event.ticketUrl && (
              <Button element={Link} href={event.ticketUrl} appearance="brand" style={{ width: '100%' }}>
                <Ticket className="mr-2 h-5 w-5 inline-block" style={{ verticalAlign: 'middle' }} /> Get Tickets
              </Button>
            )}
            <Button element={Link} href={`/events/${event.id}/sponsors`} appearance="brand" style={{ width: '100%' }}>
              <Building className="mr-2 h-5 w-5 inline-block" style={{ verticalAlign: 'middle' }} /> Sponsor Us
            </Button>
            <Button element={Link} href={event.prospectusUrl} style={{ width: '100%' }}>
              <FileText className="mr-2 h-5 w-5 inline-block" style={{ verticalAlign: 'middle' }} /> View Prospectus
            </Button>
            <Button element={Link} href={event.cfpUrl} style={{ width: '100%' }}>
              <Code className="mr-2 h-5 w-5 inline-block" style={{ verticalAlign: 'middle' }} /> Submit a proposal
            </Button>
          </div>

          {event.sponsors && event.sponsors.length > 0 && (
            <Card
              title={
                <span className={styles.cardHeaderTitle}>
                  <Handshake className="mr-3 h-5 w-5 text-primary" style={{ verticalAlign: 'middle' }} />
                  Our Sponsors
                </span>
              }
            >
              <div className={styles.sponsorsWrapper}>
                {event.sponsors.map((sponsor) => (
                  <Link
                    href={sponsor.url}
                    key={sponsor.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Chip value={sponsor.name} isReadOnly />
                  </Link>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
