import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">About Legatia Tech</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Legatia Tech Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="space-y-4">
          <p className="text-base md:text-lg">
            Legatia Tech is a leading digital marketing technology company dedicated to helping businesses thrive in the
            digital age. With our innovative solutions and expert team, we empower organizations to achieve their
            marketing goals and stay ahead of the competition.
          </p>
          <p className="text-base md:text-lg">
            Founded in 2015, we have quickly grown to become a trusted partner for businesses of all sizes, from
            startups to Fortune 500 companies. Our success is built on a foundation of cutting-edge technology,
            data-driven strategies, and a passionate commitment to our clients' success.
          </p>
          <p className="text-base md:text-lg">
            At Legatia Tech, we believe in the power of digital transformation to revolutionize businesses. Our team of
            skilled professionals brings together expertise in social media management, SEO, full-stack web development,
            content creation, graphic design, and UI/UX to deliver comprehensive digital marketing solutions.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <TeamMember name="Jane Doe" role="CEO & Founder" imageUrl="/placeholder.svg?height=200&width=200" />
          <TeamMember name="John Smith" role="CTO" imageUrl="/placeholder.svg?height=200&width=200" />
          <TeamMember name="Emily Brown" role="Creative Director" imageUrl="/placeholder.svg?height=200&width=200" />
        </div>
      </div>
    </div>
  )
}

function TeamMember({ name, role, imageUrl }: { name: string; role: string; imageUrl: string }) {
  return (
    <div className="text-center">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg md:text-xl font-bold">{name}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{role}</p>
    </div>
  )
}

