import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiLinkedin, SiMatrix, SiTelegram, SiGmail } from "react-icons/si";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    icon: SiLinkedin,
    title: "LinkedIn",
    description: "Professional updates & networking.",
    contact: "Ubuntu India",
    href: "https://www.linkedin.com/company/ubuntu-in",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline text-primary">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join us on your favorite platform — whether for quick chats, updates, or formal communication.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Card
              key={method.title}
              className="flex flex-col items-center text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <p className="text-sm text-muted-foreground">{method.description}</p>
                <Button asChild className="w-full">
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.contact}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
