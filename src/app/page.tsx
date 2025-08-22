import Link from "next/link";
import { ArrowRight, Calendar, Info, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
                  Welcome to the Ubuntu India LoCo
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your place for connecting, learning, and growing with the Ubuntu community in Bharat and beyond. Discover events, get involved, and support our mission.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/events">
                    Explore Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-semibold">
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Card className="bg-background/50 border-2 border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Next Up: UbuCon India 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Join us for our biggest event of the year, featuring talks from industry leaders, hands-on workshops, and networking opportunities.</p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      <Calendar className="mr-2 h-4 w-4 text-primary" />
                      <span>November 15-16, 2025</span>
                    </div>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/events/ubucon-india-2025">View Event Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Upcoming Events</CardTitle>
                <Calendar className="w-6 h-6 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Check out our schedule of meetups, workshops, and conferences.</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/events">
                    See all events <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">About Us</CardTitle>
                <Info className="w-6 h-6 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Learn about our mission, our values, and the people behind the community.</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/about">
                    Discover our story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Support Us</CardTitle>
                <Heart className="w-6 h-6 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Help us grow. Your contribution makes a huge difference.</p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/donate">
                    Ways to donate <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
