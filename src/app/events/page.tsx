"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { events } from "@/lib/events";
import { useState } from "react";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);
  const displayEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <>
      <section className="p-strip">
        <div className="row">
          <div className="col-8 col-start-large-3">
            <h1 className="p-heading--1 u-align--center">Our Events</h1>
            <p className="p-heading--5 u-align--center">
              Join us for meetups, workshops, and conferences.
            </p>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          <div className="col-12">
            <nav className="p-tabs" aria-label="Event filter">
              <ul className="p-tabs__list">
                <li
                  className={`p-tabs__item ${
                    activeTab === "upcoming" ? "is-active" : ""
                  }`}
                >
                  <button
                    className="p-tabs__link"
                    onClick={() => setActiveTab("upcoming")}
                    role="tab"
                    aria-selected={activeTab === "upcoming"}
                  >
                    Upcoming
                  </button>
                </li>
                <li
                  className={`p-tabs__item ${
                    activeTab === "past" ? "is-active" : ""
                  }`}
                >
                  <button
                    className="p-tabs__link"
                    onClick={() => setActiveTab("past")}
                    role="tab"
                    aria-selected={activeTab === "past"}
                  >
                    Past
                  </button>
                </li>
              </ul>
            </nav>

            <div style={{ marginTop: "2rem" }}>
              <div className="row">
                {displayEvents.length > 0 ? (
                  displayEvents.map((event) => (
                    <div className="col-4" key={event.id}>
                      <div className="p-card--highlighted">
                        <div
                          style={{
                            position: "relative",
                            height: "200px",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            className="p-card__image"
                            src={event.imageUrl}
                            alt={event.name}
                            fill
                            style={{ objectFit: "cover" }}
                            data-ai-hint={event.imageHint}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          {event.isPast && (
                            <div
                              style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                background: "rgba(0,0,0,0.6)",
                                color: "#fff",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "4px",
                                fontSize: "0.875rem",
                              }}
                            >
                              Past Event
                            </div>
                          )}
                        </div>
                        <h4>{event.name}</h4>
                        <p>
                          <Calendar
                            size={16}
                            style={{
                              display: "inline",
                              marginRight: "0.5rem",
                              verticalAlign: "middle",
                            }}
                          />
                          {event.date}{" "}
                          {event.isTentative && <span>(Tentative)</span>}
                        </p>
                        <p>
                          <MapPin
                            size={16}
                            style={{
                              display: "inline",
                              marginRight: "0.5rem",
                              verticalAlign: "middle",
                            }}
                          />
                          {event.location}
                        </p>
                        <p>{event.description}</p>
                        <div
                          style={{
                            display: "flex",
                            gap: "0.5rem",
                            marginTop: "1rem",
                          }}
                        >
                          <Link
                            href={`/events/${event.id}`}
                            className="p-button"
                          >
                            View Details
                          </Link>
                          {event.ticketUrl && (
                            <Link
                              href={event.ticketUrl}
                              className="p-button--positive"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Ticket
                                size={16}
                                style={{
                                  marginRight: "0.5rem",
                                  verticalAlign: "middle",
                                }}
                              />
                              Get Tickets
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <p className="u-align--center">
                      {activeTab === "upcoming"
                        ? "No upcoming events scheduled. Check back soon!"
                        : "No past events to show."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
