import { getLatestEvent } from "@/lib/events";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredEvent = getLatestEvent();

  return (
    <div>
      {/* Hero Section */}
      <section className="p-strip--accent u-align--center">
        <div className="row">
          <div className="col-12">
            <h1 className="p-heading--2 u-no-margin--bottom">Ubuntu 25.04</h1>
            <p className="p-heading--4 u-sv3">
              The "Plucky Puffin" has arrived. Experience the latest in
              open-source innovation, with enhanced performance, security, and a
              beautiful new look.
            </p>
            <div className="u-align--center">
              <a
                href="https://releases.ubuntu.com/plucky/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-button--positive u-no-margin--right"
              >
                Download now
              </a>
              <a
                href="https://canonical.com/blog/canonical-releases-ubuntu-25-04-plucky-puffin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-button"
              >
                Release notes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      {featuredEvent && (
        <section className="p-strip">
          <div className="row">
            <div className="col-12 u-sv3">
              <div className="u-flex u-align--center u-justify--between">
                <h2 className="p-heading--3">Featured event</h2>
                <Link href="/events" className="p-button--neutral">
                  View all events →
                </Link>
              </div>
            </div>

            <div className="col-12">
              <div className="p-card">
                <div className="row">
                  {/* Event image */}
                  <div className="col-4">
                    <Image
                      src={featuredEvent.imageUrl}
                      alt={featuredEvent.title}
                      width={600}
                      height={500}
                      data-ai-hint={featuredEvent.imageHint}
                      className="u-img-cover"
                    />
                  </div>

                  {/* Event content */}
                  <div className="col-8">
                    <div className="p-card__header">
                      <span className="p-label">{featuredEvent.location}</span>
                      <h3 className="p-heading--4 u-sv1">
                        <Link href={`/events/${featuredEvent.slug}`}>
                          {featuredEvent.title}
                        </Link>
                      </h3>
                    </div>

                    <div className="p-card__content">
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(featuredEvent.startDate).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                          }
                        )} - {new Date(featuredEvent.endDate).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                        {featuredEvent.isTentative && " (Tentative)"}
                      </p>

                      <p className="u-sv2">{featuredEvent.description}</p>

                      {featuredEvent.speakers &&
                        featuredEvent.speakers.length > 0 && (
                          <div className="u-sv3">
                            <h4 className="p-heading--5 u-sv1">
                              Featured speakers
                            </h4>
                            <ul className="p-inline-list">
                              {featuredEvent.speakers.map((speaker) => (
                                <li
                                  key={speaker.name}
                                  className="p-inline-list__item"
                                >
                                  <span className="p-avatar u-hide--small">
                                    <img
                                      src={speaker.avatarUrl}
                                      alt={speaker.name}
                                    />
                                  </span>
                                  <span className="u-inline">
                                    <strong>{speaker.name}</strong> <br />
                                    <small>{speaker.title}</small>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      <div className="u-sv2">
                        {featuredEvent.ticketsUrl ? (
                          <a
                            href={featuredEvent.ticketsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-button--positive u-no-margin--right"
                          >
                            Register now
                          </a>
                        ) : (
                          <span className="p-label--neutral">
                            Tickets coming soon
                          </span>
                        )}

                        {featuredEvent.cfpUrl && (
                          <a
                            href={featuredEvent.cfpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-button"
                          >
                            Submit to CFP
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
