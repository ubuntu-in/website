import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, Star } from "lucide-react";

import Breadcrumb from "@/components/breadcrumb";
import { events } from "@/lib/events";

export default async function EventSponsorsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const { sponsorShipTiers, alaCarteSponsorships, pastSponsors, sponsorTncs } =
    event;

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
              Sponsor: {event.name}
            </h1>
            <p className="p-heading--5 u-align--center">
              Partner with us to support the community and gain visibility with
              a passionate audience of developers, designers, and tech
              enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {pastSponsors && pastSponsors.length > 0 && (
        <section className="p-strip" style={{ paddingTop: 0 }}>
          <div className="row">
            <div className="col-12">
              <h2 className="p-heading--2 u-align--center">
                Our Valued Past Sponsors
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                {pastSponsors.map((sponsor, i) => {
                  if (!sponsor) {
                    console.warn("Undefined sponsor at index:", i, event);
                    return null;
                  }
                  return (
                    <Link
                      key={sponsor.name}
                      href={sponsor.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={sponsor.name ?? "Unknown sponsor"}
                    >
                      <Image
                        src={sponsor.logoUrl ?? "/logos/fallback.png"}
                        alt={`${sponsor.name ?? "Unknown"} logo`}
                        width={160}
                        height={80}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {sponsorShipTiers && sponsorShipTiers.length > 0 && (
        <section className="p-strip" style={{ paddingTop: 0 }}>
          <div className="row">
            <div className="col-12">
              <h2 className="p-heading--2 u-align--center">
                Sponsorship Tiers
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div style={{ overflowX: "auto" }}>
                <table className="p-table" role="grid">
                  <thead>
                    <tr>
                      <th>Benefit</th>
                      {sponsorShipTiers.map((tier) => (
                        <th key={tier.tier} className="u-align--center">
                          {tier.tier}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sponsorShipTiers[0]?.benefits.map((benefit, index) => (
                      <tr key={index}>
                        <td>{benefit.text}</td>
                        {sponsorShipTiers.map((tier) => (
                          <td key={tier.tier} className="u-align--center">
                            {typeof tier.benefits[index]?.value ===
                            "boolean" ? (
                              tier.benefits[index].value ? (
                                <CheckCircle2
                                  size={24}
                                  color="#0E8420"
                                  style={{ display: "inline" }}
                                />
                              ) : (
                                <XCircle
                                  size={24}
                                  color="#C7162B"
                                  style={{ display: "inline" }}
                                />
                              )
                            ) : (
                              <span>
                                {String(
                                  tier.benefits[index]?.value ?? "N/A"
                                )}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <th>Price</th>
                      {sponsorShipTiers.map((tier) => (
                        <td
                          key={tier.tier}
                          className="u-align--center"
                          style={{
                            color: "#E95420",
                            fontWeight: "bold",
                          }}
                        >
                          <div>{tier.price}</div>
                          <div
                            style={{
                              fontWeight: "normal",
                              fontSize: "0.875rem",
                            }}
                          >
                            {tier.priceUSD}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {alaCarteSponsorships && alaCarteSponsorships.length > 0 && (
        <section className="p-strip" style={{ paddingTop: 0 }}>
          <div className="row">
            <div className="col-12">
              <h2 className="p-heading--2 u-align--center">
                A La Carte Sponsorships
              </h2>
            </div>
          </div>
          <div className="row">
            {alaCarteSponsorships.map((option) => (
              <div className="col-4" key={option.tier}>
                <div className="p-card--highlighted">
                  <h3 className="p-card__title">{option.tier}</h3>
                  <div
                    style={{
                      color: "#E95420",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>{option.price}</div>
                    <div
                      style={{
                        fontWeight: "normal",
                        fontSize: "0.875rem",
                      }}
                    >
                      {option.priceUSD}
                    </div>
                  </div>
                  <ul className="p-list">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="p-list__item">
                        <Star
                          size={20}
                          color="#F99B11"
                          style={{
                            display: "inline",
                            marginRight: "0.5rem",
                            verticalAlign: "middle",
                          }}
                        />
                        {benefit.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="p-strip" style={{ paddingTop: 0 }}>
        <div className="row">
          <div className="col-12">
            <div className="p-card">
              <h3 className="p-card__title">Terms &amp; Conditions</h3>
              <ul className="p-list">
                {sponsorTncs &&
                  sponsorTncs.map((term, i) => (
                    <li key={i} className="p-list__item">
                      {term}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          <div className="col-8 col-start-large-3">
            <h2 className="p-heading--2 u-align--center">
              Ready to Partner With Us?
            </h2>
            <p className="u-align--center">
              Download our prospectus or contact us directly to discuss
              opportunities.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Link
                href={event.prospectusUrl}
                className="p-button--positive"
              >
                Download Prospectus
              </Link>
              <Link href="/contact" className="p-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
