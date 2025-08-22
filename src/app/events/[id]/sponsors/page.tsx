import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, XCircle, Star, Info } from "lucide-react";

import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { events } from "@/lib/events";

export default async function EventSponsorsPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const { sponsorShipTiers, alaCarteSponsorships, pastSponsors, sponsorTncs } = event;

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumb />
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline text-primary">
          Sponsor: {event.name}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
          Partner with us to support the community and gain visibility with a passionate audience of developers, designers, and tech enthusiasts.
        </p>
      </div>

      {pastSponsors && pastSponsors.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Valued Past Sponsors
          </h2>
          <TooltipProvider>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {pastSponsors.map((sponsor, i) => {
                if (!sponsor) {
                  console.warn("Undefined sponsor at index:", i, event);
                  return null;
                }
                return (
                  <Tooltip key={sponsor.name}>
                    <TooltipTrigger asChild>
                      <Link
                        href={sponsor.url ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={sponsor.logoUrl ?? "/logos/fallback.png"}
                          alt={`${sponsor.name ?? "Unknown"} logo`}
                          width={160}
                          height={80}
                          className="object-contain"
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{sponsor.name ?? "Unknown sponsor"}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      )}

      {/* --- Sponsorship Tiers Table Section (Updated) --- */}
      {sponsorShipTiers && sponsorShipTiers.length > 0 && (
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Sponsorship Tiers</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4 font-bold text-lg">Benefit</TableHead>
                    {sponsorShipTiers.map(tier => (
                      <TableHead key={tier.tier} className="text-center w-1/4 font-bold text-lg">{tier.tier}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
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
                    <TableHead className="font-bold text-lg">Price</TableHead>
                    {sponsorShipTiers.map(tier => (
                      <TableCell key={tier.tier} className="text-center font-bold text-xl text-primary">
                        <div>{tier.price}</div>
                        <div className="text-sm font-medium text-muted-foreground">{tier.priceUSD}</div>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* --- A La Carte Section (Updated) --- */}
      {alaCarteSponsorships && alaCarteSponsorships.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">A La Carte Sponsorships</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {alaCarteSponsorships.map((option) => (
              <Card key={option.tier} className="flex flex-col">
                <CardHeader>
                  {/* Use 'tier' instead of 'title' */}
                  <CardTitle>{option.tier}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="font-bold text-xl text-primary mb-4">
                    <div>{option.price}</div>
                    <div className="text-sm font-medium text-muted-foreground">{option.priceUSD}</div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {/* Map through benefits array of objects, using benefit.text */}
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Star className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Info className="mr-3 h-6 w-6 text-primary" />
              Terms & Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {sponsorTncs && sponsorTncs.map((term, i) => (
                <li key={i}>{term}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold tracking-tight">Ready to Partner With Us?</h2>
        <p className="mt-2 text-lg text-muted-foreground">Download our prospectus or contact us directly to discuss opportunities.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href={event.prospectusUrl}>Download Prospectus</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
