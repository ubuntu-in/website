import React from "react";
import { SponsorTabs } from "../components/SponsorTabs";
import "../styles/OurSponsors.scss";
import { OurSponsorsHeroSection } from "../sections/oursponsors/OurSponsorsHeroSection";
import { OurSponsorsPrincipalSection } from "../sections/oursponsors/OurSponsorsPrincipalSection";
import { OurSponsorsGoldSection } from "../sections/oursponsors/OurSponsorsGoldSection";

export const OurSponsors: React.FC = () => (
  <main className="our-sponsors-page">
    <OurSponsorsHeroSection />
    <SponsorTabs />
    <OurSponsorsPrincipalSection />
    <OurSponsorsGoldSection />
  </main>
);

export default OurSponsors;
