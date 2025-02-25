import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, PenTool, Search, Share2, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white animate-fade-in">
                Elevate Your Digital Presence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl animate-slide-up">
                Legatia Tech: Your partner in cutting-edge digital marketing solutions. Transform your brand with our
                expert services.
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Link href="/contact" passHref>
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                  Get Started
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12 animate-fade-in">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Share2 className="h-8 w-8 md:h-10 md:w-10 mb-4 text-primary" />}
              title="Social Media Management"
              description="Boost your brand's social presence with our expert strategies and engaging content."
            />
            <ServiceCard
              icon={<Search className="h-8 w-8 md:h-10 md:w-10 mb-4 text-primary" />}
              title="SEO Optimization"
              description="Improve your website's visibility and rank higher in search engine results."
            />
            <ServiceCard
              icon={<Code className="h-8 w-8 md:h-10 md:w-10 mb-4 text-primary" />}
              title="Full-Stack Web Development"
              description="Create powerful, scalable web applications tailored to your business needs."
            />
            <ServiceCard
              icon={<PenTool className="h-8 w-8 md:h-10 md:w-10 mb-4 text-primary" />}
              title="Content Writing"
              description="Engage your audience with compelling, SEO-friendly content that converts."
            />
            <ServiceCard
              icon={<Palette className="h-8 w-8 md:h-10 md:w-10 mb-4 text-primary" />}
              title="Graphic Designing"
              description="Bring your brand to life with stunning visuals and graphics that leave a lasting impression."
            />
            <ServiceCard
              icon={<Smartphone className="h-8 w-8 md:h-10 md:w-10 mb-4 text-primary" />}
              title="UI/UX Designing"
              description="Create intuitive, user-friendly interfaces that delight your customers and drive conversions."
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter animate-fade-in">
                Ready to Transform Your Digital Strategy?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg animate-slide-up">
                Let's work together to elevate your brand and achieve your digital marketing goals.
              </p>
            </div>
            <Link href="/contact" passHref>
              <Button
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6 space-y-4 bg-muted rounded-lg transition-all hover:shadow-lg animate-fade-in">
      {icon}
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{description}</p>
    </div>
  )
}

