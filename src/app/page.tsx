import Link from "next/link";
import { Calendar, Info, Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="p-strip--highlighted is-deep">
        <div className="row">
          <div className="col-6">
            <h1 className="p-heading--1">Welcome to the Ubuntu India LoCo</h1>
            <p className="p-heading--4">
              Your place for connecting, learning, and growing with the Ubuntu
              community in Bharat and beyond. Discover events, get involved, and
              support our mission.
            </p>
            <ul className="p-inline-list">
              <li className="p-inline-list__item">
                <Link href="/events" className="p-button--positive">
                  Explore Events
                </Link>
              </li>
              <li className="p-inline-list__item">
                <Link href="/about" className="p-button">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="p-card">
              <h3 className="p-card__title">
                Next Up: UbuCon India 2025
              </h3>
              <p>
                Join us for our biggest event of the year, featuring talks from
                industry leaders, hands-on workshops, and networking
                opportunities.
              </p>
              <p>
                <Calendar
                  size={16}
                  color="#E95420"
                  style={{ display: "inline", marginRight: "0.5rem", verticalAlign: "middle" }}
                />
                November 15-16, 2025
              </p>
              <Link
                href="/events/ubucon-india-2025"
                className="p-button--positive"
              >
                View Event Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          <div className="col-4">
            <div className="p-card--highlighted">
              <Calendar
                size={24}
                color="#E95420"
                style={{ marginBottom: "0.5rem" }}
              />
              <h3 className="p-card__title">Upcoming Events</h3>
              <p>
                Check out our schedule of meetups, workshops, and conferences.
              </p>
              <Link href="/events" className="p-button--link">
                See all events
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="p-card--highlighted">
              <Info
                size={24}
                color="#E95420"
                style={{ marginBottom: "0.5rem" }}
              />
              <h3 className="p-card__title">About Us</h3>
              <p>
                Learn about our mission, our values, and the people behind the
                community.
              </p>
              <Link href="/about" className="p-button--link">
                Discover our story
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="p-card--highlighted">
              <Heart
                size={24}
                color="#E95420"
                style={{ marginBottom: "0.5rem" }}
              />
              <h3 className="p-card__title">Support Us</h3>
              <p>
                Help us grow. Your contribution makes a huge difference.
              </p>
              <Link href="/donate" className="p-button--link">
                Ways to donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
