'use client';

import { notFound, useSearchParams, useRouter } from "next/navigation";
import { User, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Clock, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Breadcrumb from "@/components/breadcrumb";
import { events } from "@/lib/events";
import type { Talk } from "@/lib/types";
import { useState, use, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

const ITEMS_PER_PAGE = 10;

const slideInKeyframes = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function EventTalksPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedTalk, setExpandedTalk] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const event = events.find((e) => e.id === id);

  if (!event) {
    notFound();
  }

  const allTalks = event.talks || [];

  // Handle highlight parameter from URL
  useEffect(() => {
    const highlight = searchParams.get('highlight');
    if (highlight) {
      setExpandedTalk(highlight);
      // Find which page contains this talk
      const talkIndex = allTalks.findIndex(t => t.id === highlight);
      if (talkIndex !== -1) {
        const page = Math.floor(talkIndex / ITEMS_PER_PAGE) + 1;
        setCurrentPage(page);
        // Scroll to the talk after page changes
        setTimeout(() => {
          const element = document.getElementById(`talk-${highlight}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
      // Clear the highlight from URL after applying it
      const url = new URL(window.location.href);
      url.searchParams.delete('highlight');
      window.history.replaceState({}, '', url);
    }
  }, [searchParams, allTalks]);

  // Filter talks based on search query
  const filteredTalks = allTalks.filter((talk) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const titleMatch = talk.title.toLowerCase().includes(query);
    const descriptionMatch = talk.description.toLowerCase().includes(query);
    const speakerMatch = talk.authors?.some(
      (author: { name: string; affiliation: string; }) =>
        author.name.toLowerCase().includes(query) ||
        author.affiliation?.toLowerCase().includes(query)
    );

    return titleMatch || descriptionMatch || speakerMatch;
  });

  const totalPages = Math.ceil(filteredTalks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTalks = filteredTalks.slice(startIndex, endIndex);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  if (allTalks.length === 0) {
    return (
      <div className="container mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb />
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">No Talks Available</h2>
            <p className="text-muted-foreground">Talks for this event will be announced soon.</p>
            <Button asChild className="mt-6">
              <Link href={`/events/${id}`}>Back to Event</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <style>{slideInKeyframes}</style>
      <div className="mb-6 sm:mb-8">
        <Breadcrumb />
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-headline text-primary mb-2">
            All Talks
          </h1>
          <p className="text-lg text-muted-foreground">
            {event.name}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="default" className="text-sm py-1.5">
              {allTalks.length} Total Talks
            </Badge>
            {searchQuery && (
              <Badge variant="secondary" className="text-sm py-1.5">
                {filteredTalks.length} Match{filteredTalks.length !== 1 ? 'es' : ''}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by title, description, or speaker name..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
          />
        </div>
      </div>

      {/* No Results Message */}
      {searchQuery && filteredTalks.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <Search className="h-12 w-12 text-muted-foreground mx-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No talks found</h3>
          <p className="text-muted-foreground mb-4">
            No talks match your search for "{searchQuery}"
          </p>
          <Button variant="outline" onClick={() => handleSearchChange("")}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Talks List */}
      {currentTalks.length > 0 && (
        <div className="space-y-4 mb-6">
          {currentTalks.map((talk) => (
            <div key={talk.id} id={`talk-${talk.id}`}>
              <TalkCard
                talk={talk}
                eventId={id}
                isExpanded={expandedTalk === talk.id}
                onToggle={() => setExpandedTalk(expandedTalk === talk.id ? null : talk.id)}
                isHighlighted={searchParams.get('highlight') === talk.id}
              />
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="min-w-[2.5rem]"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href={`/events/${id}`}>Back to Event Details</Link>
        </Button>
      </div>
    </div>
  );
}

function TalkCard({
  talk,
  eventId,
  isExpanded,
  onToggle,
  isHighlighted
}: {
  talk: Talk;
  eventId: string;
  isExpanded: boolean;
  onToggle: () => void;
  isHighlighted?: boolean;
}) {
  return (
    <Card
      className={`group transition-all duration-300 ease-out cursor-pointer ${
        isHighlighted ? 'ring-2 ring-primary/50 ring-offset-2 ring-offset-background' : ''
      } ${
        isExpanded
          ? 'border-primary/50 bg-card shadow-xl'
          : 'border-border/50 hover:border-primary/30 bg-card/80 hover:shadow-lg'
      } backdrop-blur-sm overflow-hidden`}
      onClick={onToggle}
      style={{
        transition: isExpanded
          ? 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
          : 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className={`h-2 transition-all duration-300 ${
        isExpanded || isHighlighted
          ? 'bg-gradient-to-r from-primary via-primary/50 to-transparent'
          : 'bg-gradient-to-r from-primary/60 via-primary/30 to-transparent'
      }`} />
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:gap-5">
          <div className="space-y-3 sm:space-y-4">
            {/* Header Section */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col gap-2">
                {isHighlighted && (
                  <Badge variant="default" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 animate-pulse w-fit">
                    <span className="mr-1">●</span> From Speakers
                  </Badge>
                )}
                {isExpanded && (
                  <Badge variant="secondary" className="text-xs px-2 py-0.5 w-fit">
                    Expanded
                  </Badge>
                )}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                {talk.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {talk.duration && (
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground bg-muted/50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm">
                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                    <span className="font-medium">{talk.duration}</span>
                  </div>
                )}
                {talk.type && (
                  <Badge variant="outline" className="text-xs px-2 sm:px-3 py-1 sm:py-1.5">
                    {talk.type}
                  </Badge>
                )}
              </div>
            </div>

            {/* Indico Button - Responsive */}
            {talk.indicoUrl && (
              <div className="pt-1 sm:pt-0">
                <Button
                  variant="default"
                  size="sm"
                  className="h-8 sm:h-9 px-3 sm:px-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all font-medium w-full sm:w-auto justify-center"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={talk.indicoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2"
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">View Talk Materials</span>
                  </a>
                </Button>
              </div>
            )}

            {/* Expand indicator */}
            <div className="flex items-center justify-center">
              <div
                className={`flex items-center gap-1.5 sm:gap-2 text-xs transition-colors ${
                  isExpanded
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-primary'
                }`}
              >
                <span>{isExpanded ? 'Click to collapse' : 'Click to expand'}</span>
                {isExpanded ? (
                  <ChevronUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                )}
              </div>
            </div>

            {/* Description - Shows 3-4 lines when collapsed, full when expanded */}
            {talk.description && (
              <div
                className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${
                  !isExpanded ? 'line-clamp-3' : 'animate-in fade-in duration-200'
                }`}
                style={{
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 last:mb-0 leading-relaxed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-0.5 pl-4">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-0.5 pl-4">{children}</ol>,
                    li: ({ children }) => <li className="ml-4" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-foreground" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{children}</strong>,
                    em: ({ children }) => <em className="italic" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{children}</em>,
                    code: ({ children }) => (
                      <code
                        className="bg-muted px-1 py-0.5 rounded text-xs font-mono break-all"
                        style={{
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          maxWidth: '100%',
                          display: 'inline-block',
                        }}
                      >
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre
                        className="bg-muted p-2 rounded text-xs overflow-x-auto mb-2"
                        style={{
                          maxWidth: '100%',
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                        }}
                      >
                        {children}
                      </pre>
                    ),
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className="text-primary hover:underline font-medium break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          maxWidth: '100%',
                          display: 'inline-block',
                        }}
                      >
                        {children}
                      </a>
                    ),
                    h1: ({ children }) => <h1 className="text-base font-bold text-foreground mb-2 mt-3">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-sm font-bold text-foreground mb-1.5 mt-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-sm font-bold text-foreground mb-1 mt-2">{children}</h3>,
                    table: ({ children }) => (
                      <div className="overflow-x-auto mb-2">
                        <table className="min-w-full">{children}</table>
                      </div>
                    ),
                    th: ({ children }) => <th className="text-left p-2 border border-border">{children}</th>,
                    td: ({ children }) => <td className="p-2 border border-border" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>{children}</td>,
                  }}
                >
                  {talk.description}
                </ReactMarkdown>
              </div>
            )}

            {/* Speakers Section - Only shown when expanded with animation */}
            {isExpanded && talk.authors && talk.authors.length > 0 && (
              <div
                className="mt-4 pt-4 border-t border-border/50 animate-in fade-in-0 slide-in-from-top-4 duration-300"
                style={{
                  animationFillMode: 'forwards',
                }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Speakers</span>
                    <div className="text-xs text-muted-foreground">{talk.authors.length} {talk.authors.length === 1 ? 'speaker' : 'speakers'}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {talk.authors.map((author, idx) => (
                    <div
                      key={idx}
                      className="bg-muted/30 rounded-lg p-3 hover:bg-muted/50 transition-all duration-200"
                      style={{
                        animation: `slideIn 300ms ${idx * 100}ms cubic-bezier(0.4, 0, 0.2, 1) both`,
                      }}
                    >
                      <div className="font-medium text-foreground text-sm">{author.name}</div>
                      {author.affiliation && (
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {author.affiliation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
