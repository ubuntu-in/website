import { SiMatrix, SiTelegram, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const iconCircleStyle = {
  display: "inline-flex",
  padding: "1rem",
  borderRadius: "50%",
  background: "hsla(15, 90%, 50%, 0.1)",
};

const contactMethods = [
  {
    icon: SiGmail,
    title: "Email",
    description: "Official communication & inquiries.",
    contact: "bhavi@ubuntu.com",
    href: "mailto:bhavi@ubuntu.com",
  },
  {
    icon: SiMatrix,
    title: "Matrix",
    description: "Real-time chat with the community.",
    contact: "#ubuntu-india:ubuntu.com",
    href: "https://matrix.to/#/#ubuntu-india:ubuntu.com",
  },
  {
    icon: SiTelegram,
    title: "Telegram",
    description: "Community channel for news & updates.",
    contact: "@ubuntuin01",
    href: "https://t.me/ubuntuin01",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    description: "Professional updates & networking.",
    contact: "Ubuntu India",
    href: "https://www.linkedin.com/company/ubuntu-in",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="p-strip">
        <div className="row">
          <div className="col-8 col-start-large-3">
            <h1 className="p-heading--1 u-align--center">Get in Touch</h1>
            <p className="p-heading--5 u-align--center">
              Join us on your favorite platform — whether for quick chats,
              updates, or formal communication.
            </p>
          </div>
        </div>
      </section>

      <section className="p-strip">
        <div className="row">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div className="col-3" key={method.title}>
                <div className="p-card">
                  <div className="u-align--center">
                    <div style={iconCircleStyle}>
                      <Icon size={40} color="#E95420" />
                    </div>
                    <h3 className="p-card__title">{method.title}</h3>
                  </div>
                  <p className="u-align--center">{method.description}</p>
                  <Link
                    href={method.href}
                    className="p-button--positive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.contact}
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
