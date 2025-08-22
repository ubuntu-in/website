import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaHeart, FaIndianRupeeSign, FaGithub } from "react-icons/fa6"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const donationOptions = [
  {
    icon: FaHeart,
    title: "Volunteer",
    description: "The most valuable contribution is your time and skill. Help us organize events, manage projects, or mentor newcomers. Your involvement is what makes our community thrive.",
    buttonText: "Get Involved",
    href: "/contact",
  },
  {
    icon: FaIndianRupeeSign,
    title: "Donate in INR",
    description: "For our supporters in India, we accept online donations. Your financial support helps us cover operational costs like servers, event venues, and resources for our members.",
    buttonText: "Coming Soon...",
    href: "#",
  },
  {
    icon: FaGithub,
    title: "GitHub Sponsors",
    description: "If you're an international supporter or prefer using GitHub, you can sponsor our work directly. This is a great way to support our open-source projects and initiatives.",
    buttonText: "Coming Soon...",
    href: "#",
  },
];

export default function DonationPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline text-primary">
          Support Our Community
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Your support enables us to continue our work, host events, and build a better platform for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {donationOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Card key={option.title} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="mt-4 text-2xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription>{option.description}</CardDescription>
                <Button asChild className="mt-6 w-full">
                  <Link href={option.href} target={option.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                    {option.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            )}
          )}
      </div>
    </div>
  );
}
