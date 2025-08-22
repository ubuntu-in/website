
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { events } from "@/lib/events";
import { SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb";

export default async function EventSpeakersPage({
    params
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
    <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Breadcrumb />
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline text-primary">
          Speakers for {event.name}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Learn from the best in the industry. Our speakers are passionate experts and innovators.
        </p>
      </div>

      {speakers && speakers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.id} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    data-ai-hint={speaker.imageHint}
                  />
                </div>
                <CardTitle className="mt-4">{speaker.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{speaker.title}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{speaker.bio}</p>
                <div className="flex justify-center gap-4">
                  <Link href={speaker.twitterUrl} target="_blank" rel="noopener noreferrer">
                    <SiX className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href={speaker.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
            <p className="text-muted-foreground text-lg">Speakers for this event will be announced soon!</p>
        </div>
      )}
    </div>
  );
}
