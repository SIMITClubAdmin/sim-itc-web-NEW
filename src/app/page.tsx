// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  SIM IT Club
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empowering students through technology, innovation, and community.
                </p>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/join-us">
                  <Button className="px-8">
                    Join Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/initiatives/hackathons">
                  <Button variant="outline" className="px-8">
                    Explore Our Events
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/omnitool-img.jpeg"
                alt="SIM IT Club Members"
                width={400}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
