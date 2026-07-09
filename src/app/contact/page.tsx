import { Card, Button } from "@canonical/react-components";
import { SiMatrix, SiTelegram, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./contact.module.scss";

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
    <div className={`container-custom ${styles.contactContainer}`}>
      <div className={styles.headerArea}>
        <h1 className={styles.title}>
          Get in Touch
        </h1>
        <p className={styles.subtitle}>
          Join us on your favorite platform — whether for quick chats, updates, or formal communication.
        </p>
      </div>

      <div className={styles.contactGrid}>
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Card
              key={method.title}
              className={styles.contactCard}
              title={
                <div className={styles.cardHeaderContent}>
                  <div className={styles.iconWrapper}>
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className={styles.cardTitle}>{method.title}</span>
                </div>
              }
            >
              <div className={styles.cardBody}>
                <p className={styles.description}>{method.description}</p>
                <Button
                  element={Link}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  appearance="brand"
                  style={{ width: '100%' }}
                >
                  {method.contact}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
