"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@canonical/react-components";
import { events } from "@/lib/events";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb";
import styles from "./speakers.module.scss";

export default function EventSpeakersPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
  const { id } = React.use(params);
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const { speakers } = event;

  return (
    <div className={styles.speakersContainer}>
      <div className="container-custom">
        <div className={styles.breadcrumbWrapper}>
          <Breadcrumb />
        </div>
      </div>
      <div className={styles.headerArea}>
        <div className="container-custom">
          <h1 className={styles.title}>
            Speakers for {event.name}
          </h1>
          <p className={styles.subtitle}>
            Learn from the best in the industry. Our speakers are passionate experts and innovators.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {speakers && speakers.length > 0 ? (
          <div className={styles.speakersGrid}>
            {speakers.map((speaker) => (
              <Card
                key={speaker.id}
                className={styles.speakerCard}
                title={
                  <div className={styles.cardHeaderArea}>
                    <div className={styles.avatarWrapper}>
                      <Image
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        fill
                        className={styles.avatarImage}
                        data-ai-hint={speaker.imageHint}
                      />
                    </div>
                    <h3 className={styles.speakerName}>{speaker.name}</h3>
                    <p className={styles.speakerTitle}>{speaker.title}</p>
                  </div>
                }
              >
                <div>
                  <p className={styles.speakerBio}>{speaker.bio}</p>
                  <div className={styles.socialLinks}>
                    <Link href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className={styles.socialIcon} />
                    </Link>
                    <Link href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className={styles.socialIcon} />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className={styles.noSpeakers}>
            <p>Speakers for this event will be announced soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
