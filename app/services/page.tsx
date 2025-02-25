import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, PenTool, Search, Share2, Smartphone } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ServiceCard
          icon={<Share2 className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />}
          title="Social Media Management"
          description="Boost your brand's social presence with our expert strategies and engaging content. We handle everything from content creation to community management and performance analysis."
        />
        <ServiceCard
          icon={<Search className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />}
          title="SEO Optimization"
          description="Improve your website's visibility and rank higher in search engine results. Our SEO experts use the latest techniques to drive organic traffic to your site."
        />
        <ServiceCard
          icon={<Code className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />}
          title="Full-Stack Web Development"
          description="Create powerful, scalable web applications tailored to your business needs. From front-end design to back-end functionality, we build robust digital solutions."
        />
        <ServiceCard
          icon={<PenTool className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />}
          title="Content Writing"
          description="Engage your audience with compelling, SEO-friendly content that converts. Our skilled writers create everything from blog posts to whitepapers and product descriptions."
        />
        <ServiceCard
          icon={<Palette className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />}
          title="Graphic Designing"
          description="Bring your brand to life with stunning visuals and graphics that leave a lasting impression. From logos to marketing materials, we create designs that resonate with your audience."
        />
        <ServiceCard
          icon={<Smartphone className="h-10 w-10 md:h-12 md:w-12 mb-4 text-primary" />}
          title="UI/UX Designing"
          description="Create intuitive, user-friendly interfaces that delight your customers and drive conversions. We focus on creating seamless digital experiences across all devices."
        />
      </div>
      <div className="mt-8 md:mt-12 text-center">
        <Link href="/contact" passHref>
          <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-4 md:p-6 space-y-4 bg-muted rounded-lg transition-all hover:shadow-lg">
      {icon}
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{description}</p>
    </div>
  )
}

