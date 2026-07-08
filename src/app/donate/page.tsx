import { FaHeart, FaIndianRupeeSign, FaGithub } from "react-icons/fa6";
import Link from "next/link";

const iconCircleStyle = {
  display: "inline-flex",
  padding: "1rem",
  borderRadius: "50%",
  background: "hsla(15, 90%, 50%, 0.1)",
};

const donationOptions = [
  {
    icon: FaHeart,
    title: "Volunteer",
    description:
      "The most valuable contribution is your time and skill. Help us organize events, manage projects, or mentor newcomers. Your involvement is what makes our community thrive.",
    buttonText: "Get Involved",
    href: "/contact",
  },
  {
    icon: FaIndianRupeeSign,
    title: "Donate in INR",
    description:
      "For our supporters in India, we accept online donations. Your financial support helps us cover operational costs like servers, event venues, and resources for our members.",
    buttonText: "Coming Soon...",
    href: "#",
  },
  {
    icon: FaGithub,
    title: "GitHub Sponsors",
    description:
      "If you're an international supporter or prefer using GitHub, you can sponsor our work directly. This is a great way to support our open-source projects and initiatives.",
    buttonText: "Coming Soon...",
    href: "#",
  },
];

export default function DonationPage() {
  return (
    <>
      <section className="p-strip">
        <div className="row">
          <div className="col-8 col-start-large-3">
            <h1 className="p-heading--1 u-align--center">
              Support Our Community
            </h1>
            <p className="p-heading--5 u-align--center">
              Your support enables us to continue our work, host events, and
              build a better platform for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          {donationOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div className="col-4" key={option.title}>
                <div className="p-card--highlighted">
                  <div className="u-align--center">
                    <div style={iconCircleStyle}>
                      <Icon size={40} color="#E95420" />
                    </div>
                    <h3 className="p-card__title">{option.title}</h3>
                  </div>
                  <p className="u-align--center">{option.description}</p>
                  <Link
                    href={option.href}
                    className="p-button--positive"
                    target={option.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {option.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
