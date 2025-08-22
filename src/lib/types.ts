
export type Speaker = {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
  twitterUrl: string;
  linkedinUrl: string;
};

export type SponsorShipTierBenefit = {
  text: string;
  value: string | boolean | number;
};

export type SponsorShipTier = {
  tier: string;
  price: string;
  priceUSD: string;
  slots: number | "inf";
  benefits: SponsorShipTierBenefit[];
};

export type Sponsor = {
  name: string;
  url: string;
  logoUrl: string;
  logoHint: string;
};

export type TalkFormat = {
  id: number;
  name: string;
  length: string;
};

export type Track = {
  name: string;
  description: string;
};

export type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
  isPast: boolean;
  isTentative?: boolean;
  description: string;
  longDescription: string;
  sponsors: Sponsor[];
  pastSponsors?: Sponsor[];
  speakers?: Speaker[];
  prospectusUrl: string;
  ticketPrice: string;
  ticketUrl?: string;
  cfpUrl: string;
  imageUrl: string;
  imageHint: string;
  tracks?: Track[];
  talkFormats?: TalkFormat[];
  sponsorTncs?: string[];
  sponsorShipTiers?: SponsorShipTier[];
  alaCarteSponsorships?: SponsorShipTier[];
};
