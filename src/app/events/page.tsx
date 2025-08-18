import { events, type Event } from "@/lib/events";
import Image from "next/image";
import Link from "next/link";

function EventCard({ event }: { event: Event }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isUpcoming = new Date(event.startDate) >= today;

  return (
    <div className="p-card u-no-margin--bottom">
      <Link href={`/events/${event.slug}`}>
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={400}
          height={250}
          className="p-card__image"
        />
      </Link>

      <div className="p-card__content">
        <div className="p-card__header u-flex u-flex--justify-space-between u-align--center">
          <Link href={`/events/${event.slug}`} className="p-link--soft p-card__title u-no-margin--bottom">
            {event.title}
          </Link>
          {isUpcoming && (
            <span className="p-label--positive">
              Upcoming
            </span>
          )}
        </div>

        <ul className="p-list u-no-margin--top">
          <li className="p-list__item">
            Date: {new Date(event.startDate).toLocaleDateString("en-IN", {
              day: "numeric",
            })} - {new Date(event.endDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </li>
          <li className="p-list__item">Location: {event.location}</li>
          <hr className="u-sv1" />
        </ul>

        <p>{event.description}</p>
      </div>

      {/* Accordion substitute with Vanilla's expander */}
      <details className="p-expander">
        <summary className="p-expander__summary">More details</summary>
        <div className="p-expander__content">
          {event.speakers && event.speakers.length > 0 && (
            <div className="u-sv1">
              <h4 className="u-text--muted">Speakers</h4>
              <ul className="p-inline-list">
                {event.speakers.map((speaker) => (
                  <li key={speaker.name} className="p-inline-list__item">
                    {speaker.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.sponsors && event.sponsors.length > 0 && (
            <div className="u-sv1">
              <h4 className="u-text--muted">Sponsors</h4>
              <ul className="p-inline-list">
                {event.sponsors.map((sponsor) => (
                  <li key={sponsor.name} className="p-inline-list__item">
                    <span className="p-label">{sponsor.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-button-group u-sv1">
            {event.ticketsUrl ? (
              <a
                href={event.ticketsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-button"
              >
                🎟 Get Tickets
              </a>
            ) : (
              <button className="p-button is-disabled">🎟 Coming soon</button>
            )}
            <Link href={`/events/${event.slug}`} className="p-button--neutral">
              View Details →
            </Link>
          </div>
        </div>
      </details>
    </div>
  );
}

export default function EventsPage() {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div className="row u-vertically-center u-align-center">
      <section className="col-12">
        <h1 className="p-heading--2 u-align-center">Community Events</h1>
        <p className="u-align-center u-text--muted">
          Join us for meetups, workshops, release parties, and more.
        </p>
      </section>

      <section className="row u-equal-height u-no-margin--top">
        {sortedEvents.map((event) => (
          <div key={event.id} className="col-4">
            <EventCard event={event} />
          </div>
        ))}
      </section>
    </div>
  );
}
