import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <PortfolioItem
          title="Social Media Campaign"
          description="Increased engagement by 200% for a leading e-commerce brand"
          imageUrl="/placeholder.svg?height=300&width=400"
        />
        <PortfolioItem
          title="Website Redesign"
          description="Improved conversion rates by 150% for a SaaS company"
          imageUrl="/placeholder.svg?height=300&width=400"
        />
        <PortfolioItem
          title="SEO Optimization"
          description="Boosted organic traffic by 300% for a local business"
          imageUrl="/placeholder.svg?height=300&width=400"
        />
        <PortfolioItem
          title="Content Marketing Strategy"
          description="Generated 5000+ leads for a B2B tech company"
          imageUrl="/placeholder.svg?height=300&width=400"
        />
        <PortfolioItem
          title="Brand Identity Design"
          description="Created a cohesive brand identity for a startup, leading to successful Series A funding"
          imageUrl="/placeholder.svg?height=300&width=400"
        />
        <PortfolioItem
          title="Mobile App UI/UX"
          description="Designed an intuitive mobile app interface, resulting in 1M+ downloads"
          imageUrl="/placeholder.svg?height=300&width=400"
        />
      </div>
    </div>
  )
}

function PortfolioItem({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div className="bg-muted rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

