
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events } from "@/lib/events";
import { Badge } from "@/components/ui/badge";

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);

  const EventCard = ({ event }: { event: (typeof events)[0] }) => (
    <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={event.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {event.isPast && (
            <Badge variant="secondary" className="absolute top-4 right-4">Past Event</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription className="flex items-center text-sm pt-1">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{event.date} {event.isTentative && <span className="text-muted-foreground/80">(Tentative)</span>}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <p className="text-foreground/80 pt-2 line-clamp-3">{event.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/events/${event.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {event.ticketUrl && (
            <Button asChild className="flex-1" variant="secondary">
              <Link
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Ticket className="mr-2 h-5 w-5" /> Get Tickets
              </Link>
            </Button>
          )}
        </CardFooter>
    </Card>
  );

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline text-primary">
          Our Events
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Join us for meetups, workshops, and conferences.
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">No upcoming events scheduled. Check back soon!</p>
          )}
        </TabsContent>
        <TabsContent value="past">
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">No past events to show.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
