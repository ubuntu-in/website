
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/breadcrumb";

export default async function IndividualEventPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumb />
      </div>
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          className="object-cover"
          data-ai-hint={event.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white font-headline">
            {event.name}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About this Event</h2>
              <p className="text-muted-foreground leading-relaxed">
                {event.longDescription}
              </p>
            </CardContent>
          </Card>

          {event.tracks && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl"><Tag className="mr-3 h-6 w-6 text-primary"/>Event Tracks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {event.tracks.map((track) => (
                  <div key={track.name}>
                    <h3 className="font-semibold text-lg">{track.name}</h3>
                    <p className="text-muted-foreground mt-1">{track.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center">
                <Calendar className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{event.date} {event.isTentative && <span className="text-muted-foreground/80">(Tentative)</span>}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{event.location}</span>
              </div>
              <div className="flex items-center">
                <Ticket className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{event.ticketPrice}</span>
              </div>
            </CardContent>
            <CardContent className="border-t pt-4">
                 <div className="flex flex-col space-y-2">
                    <Button asChild variant="ghost" className="justify-start">
                        <Link href={`/events/${event.id}/speakers`}>
                            <Users className="mr-2 h-5 w-5" /> View Speakers
                        </Link>
                    </Button>
                </div>
            </CardContent>
          </Card>

          {event.talkFormats && (
            <Card>
               <CardHeader>
                <CardTitle className="flex items-center text-2xl"><Clock className="mr-3 h-6 w-6 text-primary"/>Talk Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {event.talkFormats.map(format => <li key={format.id}>{format.name} ({format.length})</li>)}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col space-y-2">
            {event.ticketUrl && (
              <Button size="lg" asChild>
                <Link href={event.ticketUrl}>
                  <Ticket className="mr-2 h-5 w-5" /> Get Tickets
                </Link>
              </Button>
            )}
            <Button size="lg" asChild>
              <Link href={`/events/${event.id}/sponsors`}>
                <Building className="mr-2 h-5 w-5" /> Sponsor Us
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={event.prospectusUrl}>
                <FileText className="mr-2 h-5 w-5" /> View Prospectus
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={event.cfpUrl}>
                <Code className="mr-2 h-5 w-5" /> Submit a proposal
              </Link>
            </Button>
          </div>

          {event.sponsors.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Handshake className="mr-3 h-5 w-5 text-primary" />
                  Our Sponsors
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {event.sponsors.map((sponsor) => (
                  <Link href={sponsor.url} key={sponsor.name} target="_blank" rel="noopener noreferrer">
                     <Badge variant="secondary" className="text-sm py-1 px-3 hover:bg-primary/20 transition-colors">{sponsor.name}</Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
