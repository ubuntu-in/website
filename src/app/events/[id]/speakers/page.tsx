
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { events } from "@/lib/events";
import type { Author } from "@/lib/types";
import { User, Search } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb";
import { useState, use } from "react";

export default function EventSpeakersPage({
    params
  }: {
    params: Promise<{ id: string }>;
  }) {
  const { id } = use(params);
  const [searchQuery, setSearchQuery] = useState("");

  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const talks = event.talks || [];

  const speakersMap = new Map<string, Author & { talkCount: number; talkTitles: string[] }>();

  talks.forEach(talk => {
    talk.authors.forEach((author: Author) => {
      const key = author.name;
      if (speakersMap.has(key)) {
        const existing = speakersMap.get(key)!;
        existing.talkCount += 1;
        existing.talkTitles.push(talk.title);
      } else {
        speakersMap.set(key, {
          ...author,
          talkCount: 1,
          talkTitles: [talk.title]
        });
      }
    });
  });

  const allSpeakers = Array.from(speakersMap.values()).sort((a, b) => a.name.localeCompare(b.name));

  const filteredSpeakers = allSpeakers.filter((speaker) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const nameMatch = speaker.name.toLowerCase().includes(query);
    const affiliationMatch = speaker.affiliation?.toLowerCase().includes(query);
    const talksMatch = speaker.talkTitles.some(title => title.toLowerCase().includes(query));

    return nameMatch || affiliationMatch || talksMatch;
  });

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
        {allSpeakers.length > 0 && (
          <div className="mt-6 flex justify-center gap-2">
            <Badge variant="default" className="text-sm py-1.5">
              {allSpeakers.length} {allSpeakers.length === 1 ? 'Speaker' : 'Speakers'}
            </Badge>
            <Badge variant="secondary" className="text-sm py-1.5">
              {talks.length} {talks.length === 1 ? 'Talk' : 'Talks'}
            </Badge>
          </div>
        )}
      </div>

      {/* Search Input */}
      {allSpeakers.length > 0 && (
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search speakers by name, affiliation, or talk title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
            />
          </div>
        </div>
      )}

      {searchQuery && (
        <div className="mb-4 text-center">
          <Badge variant="secondary" className="text-sm py-1.5">
            {filteredSpeakers.length} Match{filteredSpeakers.length !== 1 ? 'es' : ''} for "{searchQuery}"
          </Badge>
        </div>
      )}

      {/* No Results Message */}
      {searchQuery && filteredSpeakers.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <Search className="h-12 w-12 text-muted-foreground mx-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No speakers found</h3>
          <p className="text-muted-foreground mb-4">
            No speakers match your search for "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-primary hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}

      {filteredSpeakers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeakers.map((speaker, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors border-2 border-primary/20">
                    {speaker.imageUrl ? (
                      <Image
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        width={96}
                        height={96}
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      <User className="h-12 w-12 text-primary" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    {speaker.affiliation && (
                      <p className="text-sm text-muted-foreground">
                        {speaker.affiliation}
                      </p>
                    )}
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary" className="text-xs">
                      {speaker.talkCount} {speaker.talkCount === 1 ? 'Talk' : 'Talks'}
                    </Badge>
                  </div>
                  {speaker.talkCount > 0 && (
                    <div className="pt-2 w-full">
                      <p className="text-xs text-muted-foreground mb-2 font-semibold">Speaking at:</p>
                      <div className="space-y-2">
                        {speaker.talkTitles.map((title, i) => {
                          const talk = talks.find(t => t.title === title);
                          return (
                            <div key={i} className="p-2 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors">
                              <a
                                href={`/events/${id}/talks?highlight=${encodeURIComponent(talk?.id || title)}`}
                                className="block text-xs text-foreground line-clamp-2 font-medium hover:text-primary transition-colors cursor-pointer"
                                title="View talk details"
                              >
                                {title}
                              </a>
                            </div>
                          );
                        })}
                        {speaker.talkCount > 3 && (
                          <p className="text-xs text-muted-foreground italic">
                            +{speaker.talkCount - 3} more talk{speaker.talkCount - 3 > 1 ? 's' : ''}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : allSpeakers.length > 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground text-lg">No speakers match your search.</p>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground text-lg">Speakers for this event will be announced soon!</p>
        </div>
      )}
    </div>
  );
}
