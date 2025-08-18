export type Speaker = {
  name: string;
  title: string;
  avatarUrl: string;
};

export type Sponsor = {
  name: string;
  logoUrl: string;
};

export type Event = {
  id: number;
  slug: string;
  title: string;
  startDate: string; // ISO 8601 format: "YYYY-MM-DD"
  endDate: string;
  location: string;
  isTentative?: boolean;
  description: string;
  about?: string;
  imageUrl: string;
  imageHint: string;
  ticketsUrl?: string;
  cfpUrl?: string;
  speakers?: Speaker[];
  sponsors?: Sponsor[];
};

export const events: Event[] = [
  {
    id: 4,
    slug: "ubucon-india-2025",
    title: "UbuCon India 2025: The first UbuCon of India LoCo",
    startDate: "2025-11-15",
    endDate: "2025-11-17",
    location: "IISC, Bengaluru, India",
    isTentative: true,
    description:
      "UbuCon India is the official Ubuntu community conference in India, featuring Ubuntu, India Community and Free Software.",
    about:
      "UbuCon India is the premier gathering of the Ubuntu community in India, uniting users, developers, and open-source enthusiasts from across the country. The conference features talks, workshops, hands-on sessions, and networking opportunities, all focused on Ubuntu, open-source technologies, and collaborative projects. It provides a platform for learning, sharing experiences, and contributing to the global Ubuntu ecosystem. From seasoned developers to newcomers, UbuCon India welcomes everyone passionate about technology and the philosophy of Free and Open Source Software (FOSS), fostering collaboration, innovation, and community growth.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ubucon india 2025",
    ticketsUrl: "#",
    cfpUrl: "#",
  },
];

// Helper function to get the nearest upcoming event, or the most recent past one if none are upcoming.
export function getLatestEvent(): Event | undefined {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today to the start of the day

  const futureEvents = events.filter(
    (event) => new Date(event.startDate) >= today
  );

  if (futureEvents.length > 0) {
    // Sort future events by date ascending to get the soonest one
    return futureEvents.sort(
      (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    )[0];
  }

  // If no future events, get the most recent past event
  return [...events].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )[0];
}
