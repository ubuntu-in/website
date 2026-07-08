import Image from "next/image";
import { events } from "@/lib/events";
import { SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb";

export default async function EventSpeakersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const { speakers } = event;

  return (
    <>
      <section className="p-strip">
        <div className="row">
          <div className="col-12">
            <Breadcrumb />
          </div>
        </div>
      </section>

      <section className="p-strip" style={{ paddingTop: 0 }}>
        <div className="row">
          <div className="col-8 col-start-large-3">
            <h1 className="p-heading--1 u-align--center">
              Speakers for {event.name}
            </h1>
            <p className="p-heading--5 u-align--center">
              Learn from the best in the industry. Our speakers are passionate
              experts and innovators.
            </p>
          </div>
        </div>
      </section>

      <section className="p-strip" style={{ paddingTop: 0 }}>
        <div className="row">
          {speakers && speakers.length > 0 ? (
            speakers.map((speaker) => (
              <div className="col-4" key={speaker.id}>
                <div className="p-card--highlighted u-align--center">
                  <div
                    style={{
                      position: "relative",
                      width: "128px",
                      height: "128px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "4px solid hsla(15, 90%, 50%, 0.2)",
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      fill
                      style={{ objectFit: "cover" }}
                      data-ai-hint={speaker.imageHint}
                      sizes="128px"
                    />
                  </div>
                  <h4>{speaker.name}</h4>
                  <p style={{ color: "#E95420", fontWeight: 500 }}>
                    {speaker.title}
                  </p>
                  <p>{speaker.bio}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    <Link
                      href={speaker.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiX size={20} />
                    </Link>
                    <Link
                      href={speaker.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="u-align--center">
                Speakers for this event will be announced soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
