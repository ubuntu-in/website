import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline text-primary">
          About Ubuntu India LoCo
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          A passionate group of developers, designers, and tech enthusiasts dedicated to fostering collaboration and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="items-center text-center">
            <div className="p-3 rounded-full bg-primary/10">
              <History className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4 text-2xl">Our History</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            <p>
              Founded in 2009, our community started as a small team on Launchpad. After many twists and turns, we've been reshaped time and again — and now we're rebooting with a fresh beginning, marked by a brand-new UbuCon.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="items-center text-center">
            <div className="p-3 rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4 text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            <p>
              Our mission is to spread awareness and adoption of Ubuntu and FOSS across India. We aim to provide a platform for users to get help, share knowledge, collaborate and encourage contributions from India to the global Ubuntu project.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="items-center text-center">
            <div className="p-3 rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4 text-2xl">Our Community</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground">
            <p>
              We are a diverse group of individuals from various backgrounds, united by our passion for technology. We believe in the power of open source and strive to contribute positively to the tech landscape through our collective efforts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
