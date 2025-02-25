import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <BlogPost
          title="10 SEO Strategies for 2025"
          excerpt="Stay ahead of the curve with these cutting-edge SEO techniques that will boost your rankings."
          date="March 15, 2025"
        />
        <BlogPost
          title="The Future of Social Media Marketing"
          excerpt="Discover the emerging trends that will shape social media marketing in the coming years."
          date="March 10, 2025"
        />
        <BlogPost
          title="Mastering UI/UX Design: Tips from the Experts"
          excerpt="Learn from industry leaders about creating user interfaces that drive engagement and conversions."
          date="March 5, 2025"
        />
        <BlogPost
          title="Content Marketing: Quality vs. Quantity"
          excerpt="Find the right balance in your content strategy to maximize impact and reach."
          date="February 28, 2025"
        />
        <BlogPost
          title="The Role of AI in Digital Marketing"
          excerpt="Explore how artificial intelligence is revolutionizing the digital marketing landscape."
          date="February 20, 2025"
        />
        <BlogPost
          title="Building a Strong Brand Identity Online"
          excerpt="Learn the key elements of creating a memorable and impactful brand presence in the digital world."
          date="February 15, 2025"
        />
      </div>
    </div>
  )
}

function BlogPost({ title, excerpt, date }: { title: string; excerpt: string; date: string }) {
  return (
    <div className="bg-muted rounded-lg p-4 md:p-6 space-y-4">
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <p className="text-sm md:text-base text-muted-foreground">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs md:text-sm text-muted-foreground">{date}</span>
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </div>
    </div>
  )
}

