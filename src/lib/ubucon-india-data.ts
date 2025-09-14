import type { Sponsor, Track, Event, SponsorShipTier } from './types';

const sponsors: Record<string, Sponsor> = {
  canonical: { name: 'Canonical', url: 'https://canonical.com/', logoUrl: '/logos/canonical.svg', logoHint: 'canonical logo' },
  fossunited: { name: 'FOSS United', url: 'https://fossunited.org/', logoUrl: '/logos/fossunited.svg', logoHint: 'fossunited logo' },
  onlyoffice: { name: 'ONLYOFFICE', url: 'https://www.onlyoffice.com/', logoUrl: '/logos/onlyoffice.svg', logoHint: 'onlyoffice logo' },
};

const tracks: Track[] = [
  {
    name: 'Desktop',
    description: 'Explore Ubuntu on the desktop—from GNOME and KDE to packaging (Snaps, Debs), gaming, user experience, and accessibility.'
  },
  {
    name: 'Cloud & Infrastructure',
    description: 'Dive into Ubuntu Server, OpenStack, Kubernetes, MicroK8s, Juju, MAAS, and everything powering public, private, and hybrid cloud environments.'
  },
  {
    name: 'DevOps & Security',
    description: 'Learn best practices for CI/CD, automated systems management, AppArmor, network security, and hardening strategies in modern infrastructures.'
  },
  {
    name: 'Embedded & IoT',
    description: 'Discover Ubuntu Core, Raspberry Pi, robotics, automotive, and other embedded use cases for the edge and IoT deployments.'
  },
  {
    name: 'Community & Open Source',
    description: 'Celebrate FOSS values with talks on building communities, LoCos, contribution pathways, advocacy, diversity, inclusion, and licensing.'
  },
  {
    name: 'AI & Machine Learning',
    description: 'From development on Ubuntu Desktop to deploying models in the cloud and on the edge, explore AI/ML workflows, MLOps, and ethics.'
  },
];

const benefitTexts: string[] = [
  "Logo on Website",
  "Logo on Plenary banner",
  "Logo on Stage (or Podium) banner",
  "Logo on Nametag",
  "Logo on Video banner",
  "Logo on Video sponsor information scene",
  "Logo on T-Shirt (or other swag)",
  "Event pass (lunch, coffee, access to all areas)",
  "Recognition posting on social media",
  "Recognition posting on blog",
  "Mention during opening and closing session",
  "Sponsored session",
  "Sponsor booth",
  "Promotion video during breaks",
  "Distribute Promotional Material",
  "Promotional Email to all Attendees",
];

const tierData = {
  Diamond: {
    price: "₹5,00,000+",
    priceUSD: "$10,000",
    slots: 1,
    values: [
      "XL", "XL", true, true, true, true, true, 5, true, true, true,
      "A Keynote (30min) + A Workshop (60min)", "L", "3min",
      "Handout on attendee check-in + At booth", true,
    ],
  },
  Gold: {
    price: "₹3,00,000",
    priceUSD: "$6,000",
    slots: 2,
    values: [
      "L", "L", true, true, true, true, true, 5, true, true, true,
      "A Talk (20min) or A Workshop (60min)", "M", "2min",
      "Handout on attendee check-in", true,
    ],
  },
  Silver: {
    price: "₹2,00,000",
    priceUSD: "$3,500",
    slots: 6,
    values: [
      "M", "M", true, false, false, true, false, 3, true, false, true,
      "A Talk (20min)", "S", "1min", "Handout on attendee check-in (Add-on)", true,
    ],
  },
  Bronze: {
    price: "₹1,00,000",
    priceUSD: "$1,600",
    slots: "inf",
    values: [
      "S", "S", false, false, false, true, false, 2, true, false, true,
      "A Lightning talk (5min)", "S (Add-on)", false, false, false,
    ],
  },
  Supporter: {
    price: "₹50,000 - ₹80,000",
    priceUSD: "$500 - $800",
    slots: "inf",
    values: [
      "S", "XS", false, false, false, true, false, 1, true, false, true,
      false, false, false, false, false,
    ],
  },

  Startups: {
    price: "₹20,000 - ₹80,000",
    priceUSD: "$200 - $800",
    slots: "inf",
    values: [
      "S", "XS", false, false, false, true, false, 1, true, false, true,
      false, false, false, false, false,
    ],
  }
} as const;


function createSponsorshipTiers(data: typeof tierData, benefits: string[]): SponsorShipTier[] {
  return Object.entries(data).map(([tierName, tierDetails]) => ({
    tier: tierName.replace('_', ' '),
    price: tierDetails.price,
    priceUSD: tierDetails.priceUSD,
    slots: tierDetails.slots,
    benefits: benefits.map((text, index) => ({
      text,
      value: tierDetails.values[index],
    })),
  }));
}

export const sponsorshipTiers: SponsorShipTier[] = createSponsorshipTiers(tierData, benefitTexts);


export const aLaCarteSponsorships: SponsorShipTier[] = [
  {
    tier: "Exhibitor Package",
    price: "₹15,000",
    priceUSD: "$600",
    slots: "inf",
    benefits: [
      { text: "S size booth & Logistics support", value: true },
      { text: "3 Tickets (exhibition area access only)", value: true },
      { text: "Logo exposure on exhibitors information page", value: true },
    ],
  },
  {
    tier: "Diversity Fund",
    price: "₹10,000 - ₹35,000",
    priceUSD: "$200 - $700",
    slots: "inf",
    benefits: [
      { text: "Logo exposure on travel grant page on our website", value: true },
      { text: "Logo exposure on beneficiaries' event report", value: true },
    ],
  },
];

const termsAndConditions = [
    "All sponsorship fees are exclusive of applicable taxes.",
    "INR pricing is exclusively available for businesses with a primary office registered in India.",
    "Sponsored sessions are subject to approval by the content team. Sessions must focus on relevant Open Source topics, comply with the Code of Conduct, and must not be sales pitches.",
    "Startup pricing is limited to companies that are five years old or less, have 30 or fewer employees, and use Ubuntu internally.",
    "All listed add-ons are available at an additional cost and are not included in the base package price.",
    "The 'Promotional Email' benefit can be replaced with a list of attendees (names, affiliation, email) who have explicitly opted-in to share their data.",
    "Sponsorship is not confirmed until payment is received in full, and all benefits are non-transferable.",
    "Sponsor materials (logos, branding, etc.) must be provided in the required format by the specified deadline.",
    "The event organizers reserve the right to refuse any sponsorship application at their discretion.",
    "In the event of conference cancellation, a full refund of the sponsorship fee will be provided.",
    "Sponsors are responsible for their own travel and accommodation expenses."
];


export const ubucon2025: Event =
{
  id: 'ubucon-india-2025',
  name: 'UbuCon India 2025',
  date: 'November 15-16, 2025',
  location: 'Bangalore, India',
  isPast: false,
  description: 'UbuCon India is the official Ubuntu community conference in India, featuring Ubuntu, India Community and Free Software.',
  longDescription: 'UbuCon India is the premier gathering of the Ubuntu community in India, uniting users, developers, and open-source enthusiasts from across the country. The conference features talks, workshops, hands-on sessions, and networking opportunities, all focused on Ubuntu, open-source technologies, and collaborative projects. It provides a platform for learning, sharing experiences, and contributing to the global Ubuntu ecosystem. From seasoned developers to newcomers, UbuCon India welcomes everyone passionate about technology and the philosophy of Free and Open Source Software (FOSS), fostering collaboration, innovation, and community growth.',
  sponsors: [],
  pastSponsors: [sponsors.canonical, sponsors.fossunited, sponsors.onlyoffice],
  speakers: [],
  prospectusUrl: '/prospects/sponsorship-prospectus-ubucon-india.pdf',
  ticketPrice: 'TBD',
  cfpUrl: 'https://events.canonical.com/event/136/abstracts/',
  imageUrl: '/assets/iisc.jpg',
  imageHint: 'tech conference',
  sponsorShipTiers: sponsorshipTiers,
  alaCarteSponsorships: aLaCarteSponsorships,
  sponsorTncs: termsAndConditions,
  tracks: tracks,
  talkFormats: [
      { id: 1 , name: 'Talk', length: '20 minutes' },
      { id: 2, name: 'Talk', length: '30-40 minutes' },
      { id: 3,  name: 'Lightning Talk', length: '5 minutes' },
      { id: 4, name: 'Workshop', length: '60 minutes' },
      { id: 5,  name: 'Workshop', length: '90 minutes' },
  ],
}
