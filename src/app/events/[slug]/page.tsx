import { events, Event } from "@/lib/events";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EventDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) notFound();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isUpcoming = new Date(event.startDate) >= today;

  return (
    <div className="p-strip--main u-pv4">
      {/* Back Link */}
      <div className="u-mb4">
        <Link
          href="/events"
          className="p-link--soft u-flex u-items-center"
        >
          <span className="u-mr2">&#8592;</span> Back to all events
        </Link>
      </div>

      {/* Header */}
      <header className="u-mb6">
        <h1 className="p-heading--1 u-mb2">{event.title}</h1>
        <div className="u-flex u-flex-wrap u-gap2 u-text--muted">
          <div className="u-flex u-items-center u-gap1">
            <span>&#128197;</span>
            <span>
              {new Date(event.startDate).toLocaleDateString("en-IN", {
                day: "numeric",
              })} - {new Date(event.endDate).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {event.isTentative && " (Tentative)"}
            </span>
          </div>
          <div className="u-flex u-items-center u-gap1">
            <span>&#128205;</span>
            <span>{event.location}</span>
          </div>
          {isUpcoming && (
            <span className="p-label--positive u-ml2">Upcoming</span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="row u-gap2">
        {/* Left Column */}
        <div className="col-8">
          {/* Event Image */}
          <div className="p-card u-mb4">
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={400}
              height={250}
              data-ai-hint={event.imageHint}
              className="p-card__image"
            />
          </div>

          {/* About */}
          <section className="u-mb6">
            <h2 className="p-heading--2 u-mb2">About the Event</h2>
            <p className="u-text--muted">{event.about || event.description}</p>
          </section>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <section className="u-mb6">
              <h2 className="p-heading--2 u-mb3">Speakers</h2>
              <div className="row u-gap2">
                {event.speakers.map((speaker) => (
                  <div key={speaker.name} className="col-6@sm col-4@md u-flex u-gap2 u-items-center">
                    <div className="p-avatar">
                      <Image
                        src={speaker.avatarUrl}
                        alt={speaker.name}
                        width={64}
                        height={64}
                        className="p-avatar__image"
                      />
                    </div>
                    <div>
                      <h3 className="p-heading--4 u-no-margin--bottom">{speaker.name}</h3>
                      <p className="u-text--muted u-text--small">{speaker.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Sponsors */}
          {event.sponsors && event.sponsors.length > 0 && (
            <section className="u-mb6">
              <h2 className="p-heading--2 u-mb3">Sponsors</h2>
              <div className="u-flex u-flex-wrap u-gap2 u-items-center">
                {event.sponsors.map((sponsor) => (
                  <div key={sponsor.name}>
                    <Image
                      src={sponsor.logoUrl}
                      alt={`${sponsor.name} logo`}
                      width={150}
                      height={75}
                      className="u-object-fit--contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="col-12@sm col-4@md">
          <div className="p-card u-sticky u-top4">
            <h3 className="p-heading--3 u-mb2">&#128179; Registration</h3>
            <p className="u-text--muted u-mb2">Secure your spot for this event.</p>
            <a
              href={event.ticketsUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-button ${!event.ticketsUrl ? "is-disabled" : ""} u-mb2 u-width-full`}
            >
              {event.ticketsUrl ? "Get Tickets" : "Coming Soon"}
            </a>

            {/* CFP */}
            {event.cfpUrl && (
              <>
                <hr className="u-my2" />
                <h4 className="p-heading--4 u-mb1">Call for Papers</h4>
                <p className="u-text--muted u-mb2">Have something to share? Submit your proposal.</p>
                <a
                  href={event.cfpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-button p-button--outline u-width-full"
                >
                  Submit to CFP
                </a>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
