"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, Star, Info } from "lucide-react";

import Breadcrumb from "@/components/breadcrumb";
import { Button, Card, Table, TableCell, TableHeader, TableRow, Tooltip } from "@canonical/react-components";
import { events } from "@/lib/events";
import styles from "./sponsors.module.scss";

export default function EventSponsorsPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
  const { id } = React.use(params);
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const { sponsorShipTiers, alaCarteSponsorships, pastSponsors, sponsorTncs } = event;

  return (
    <div className={`container-custom ${styles.sponsorsContainer}`}>
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb />
      </div>
      <div className={styles.headerArea}>
        <h1 className={styles.title}>
          Sponsor: {event.name}
        </h1>
        <p className={styles.subtitle}>
          Partner with us to support the community and gain visibility with a passionate audience of developers, designers, and tech enthusiasts.
        </p>
      </div>

      {pastSponsors && pastSponsors.length > 0 && (
        <div className="mb-16">
          <h2 className={styles.sectionTitle}>
            Our Valued Past Sponsors
          </h2>
          <div className={styles.pastSponsorsWrapper}>
            {pastSponsors.map((sponsor, i) => {
              if (!sponsor) {
                console.warn("Undefined sponsor at index:", i, event);
                return null;
              }
              return (
                <Tooltip key={sponsor.name} message={sponsor.name ?? "Unknown sponsor"}>
                  <Link
                    href={sponsor.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sponsorLogoLink}
                  >
                    <Image
                      src={sponsor.logoUrl ?? "/logos/fallback.png"}
                      alt={`${sponsor.name ?? "Unknown"} logo`}
                      width={160}
                      height={80}
                      className={styles.sponsorLogo}
                    />
                  </Link>
                </Tooltip>
              );
            })}
          </div>
        </div>
      )}

      {/* --- Sponsorship Tiers Table Section --- */}
      {sponsorShipTiers && sponsorShipTiers.length > 0 && (
        <Card
          className={styles.tableCard}
          title={<div className={styles.tableHeaderTitle}>Sponsorship Tiers</div>}
        >
          <div className={styles.responsiveTableWrapper}>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader className="w-1/4 font-bold text-lg">Benefit</TableHeader>
                  {sponsorShipTiers.map(tier => (
                    <TableHeader key={tier.tier} className="text-center w-1/4 font-bold text-lg">{tier.tier}</TableHeader>
                  ))}
                </TableRow>
              </thead>
              <tbody>
                {/* Safely access benefits from the first tier to create rows */}
                {sponsorShipTiers[0]?.benefits.map((benefit, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{benefit.text}</TableCell>
                    {sponsorShipTiers.map(tier => (
                      <TableCell key={tier.tier} className="text-center">
                        {typeof tier.benefits[index]?.value === 'boolean' ? (
                          tier.benefits[index].value ? (
                            <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="font-medium text-foreground">{String(tier.benefits[index]?.value ?? 'N/A')}</span>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableHeader className="font-bold text-lg">Price</TableHeader>
                  {sponsorShipTiers.map(tier => (
                    <TableCell key={tier.tier} className="text-center font-bold text-xl text-primary">
                      <div className={styles.priceWrapper}>{tier.price}</div>
                      <div className={styles.priceUSD}>{tier.priceUSD}</div>
                    </TableCell>
                  ))}
                </TableRow>
              </tbody>
            </Table>
          </div>
        </Card>
      )}

      {/* --- A La Carte Section --- */}
      {alaCarteSponsorships && alaCarteSponsorships.length > 0 && (
        <div className="mt-16">
          <h2 className={styles.sectionTitle}>A La Carte Sponsorships</h2>
          <div className={styles.alaCarteGrid}>
            {alaCarteSponsorships.map((option) => (
              <Card key={option.tier} title={option.tier}>
                <div>
                  <div className={styles.priceWrapper}>
                    <div>{option.price}</div>
                    <div className={styles.priceUSD}>{option.priceUSD}</div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className={styles.benefitItem}>
                        <Star className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <Card
          className={styles.termsCard}
          title={
            <div className={styles.termsTitle}>
              <Info className="mr-3 h-6 w-6 text-primary" style={{ verticalAlign: 'middle' }} />
              Terms & Conditions
            </div>
          }
        >
          <ul className={styles.termsList}>
            {sponsorTncs && sponsorTncs.map((term, i) => (
              <li key={i}>{term}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className={styles.ctaArea}>
        <h2 className={styles.ctaTitle}>Ready to Partner With Us?</h2>
        <p className={styles.ctaDescription}>Download our prospectus or contact us directly to discuss opportunities.</p>
        <div className={styles.ctaButtonGroup}>
          <Button element={Link} href={event.prospectusUrl} appearance="brand">
            Download Prospectus
          </Button>
          <Button element={Link} href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
