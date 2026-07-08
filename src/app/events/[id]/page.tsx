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
import Breadcrumb from "@/components/breadcrumb";

export default async function IndividualEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <>
      <section className="p-strip">
        <div className="row">
          <div className="col-12">
            <Breadcrumb />
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            overflow: "hidden",
          }}
        >
          <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            style={{ objectFit: "cover" }}
            data-ai-hint={event.imageHint}
            sizes="100vw"
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: "2rem",
            }}
          >
            <h1
              className="p-heading--1"
              style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
            >
              {event.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          <div className="col-8">
            <div className="p-card" style={{ marginBottom: "1.5rem" }}>
              <h2 className="p-heading--3">About this Event</h2>
              <p>{event.longDescription}</p>
            </div>

            {event.tracks && (
              <div className="p-card">
                <h3 className="p-heading--3">
                  <Tag
                    size={24}
                    color="#E95420"
                    style={{
                      display: "inline",
                      marginRight: "0.75rem",
                      verticalAlign: "middle",
                    }}
                  />
                  Event Tracks
                </h3>
                {event.tracks.map((track) => (
                  <div key={track.name} style={{ marginBottom: "1rem" }}>
                    <h4>{track.name}</h4>
                    <p>{track.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-4">
            <div className="p-card" style={{ marginBottom: "1.5rem" }}>
              <h3 className="p-card__title">Event Details</h3>
              <p>
                <Calendar
                  size={20}
                  color="#E95420"
                  style={{
                    display: "inline",
                    marginRight: "0.75rem",
                    verticalAlign: "middle",
                  }}
                />
                <strong>
                  {event.date}{" "}
                  {event.isTentative && <span>(Tentative)</span>}
                </strong>
              </p>
              <p>
                <MapPin
                  size={20}
                  color="#E95420"
                  style={{
                    display: "inline",
                    marginRight: "0.75rem",
                    verticalAlign: "middle",
                  }}
                />
                <strong>{event.location}</strong>
              </p>
              <p>
                <Ticket
                  size={20}
                  color="#E95420"
                  style={{
                    display: "inline",
                    marginRight: "0.75rem",
                    verticalAlign: "middle",
                  }}
                />
                <strong>{event.ticketPrice}</strong>
              </p>
              <hr className="p-rule" />
              <Link
                href={`/events/${event.id}/speakers`}
                className="p-button"
              >
                <Users size={20} style={{ marginRight: "0.5rem" }} />
                View Speakers
              </Link>
            </div>

            {event.talkFormats && (
              <div className="p-card" style={{ marginBottom: "1.5rem" }}>
                <h3 className="p-card__title">Talk Formats</h3>
                <ul className="p-list">
                  {event.talkFormats.map((format) => (
                    <li key={format.id} className="p-list__item">
                      {format.name} ({format.length})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ marginBottom: "1.5rem" }}>
              {event.ticketUrl && (
                <Link
                  href={event.ticketUrl}
                  className="p-button--positive"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  <Ticket
                    size={20}
                    style={{
                      marginRight: "0.5rem",
                      verticalAlign: "middle",
                    }}
                  />
                  Get Tickets
                </Link>
              )}
              <Link
                href={`/events/${event.id}/sponsors`}
                className="p-button"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                <Building
                  size={20}
                  style={{
                    marginRight: "0.5rem",
                    verticalAlign: "middle",
                  }}
                />
                Sponsor Us
              </Link>
              <Link
                href={event.prospectusUrl}
                className="p-button"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                <FileText
                  size={20}
                  style={{
                    marginRight: "0.5rem",
                    verticalAlign: "middle",
                  }}
                />
                View Prospectus
              </Link>
              <Link
                href={event.cfpUrl}
                className="p-button"
                style={{ display: "block" }}
              >
                <Code
                  size={20}
                  style={{
                    marginRight: "0.5rem",
                    verticalAlign: "middle",
                  }}
                />
                Submit a proposal
              </Link>
            </div>

            {event.sponsors.length > 0 && (
              <div className="p-card">
                <h3 className="p-card__title">Our Sponsors</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {event.sponsors.map((sponsor) => (
                    <Link
                      href={sponsor.url}
                      key={sponsor.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-chip"
                    >
                      {sponsor.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
